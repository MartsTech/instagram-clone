import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { db, storage } from "config/firebase";
import { makeAutoObservable, runInAction } from "mobx";
import { Post, PostComment } from "types/post";
import { store } from "./store";

class PostStore {
  postsRegistery = new Map<string, Post>();
  commentsRegistery: { [id: string]: PostComment[] } = {};
  selectedImageToPost: string | ArrayBuffer | null = null;
  caption = "";
  loading = false;

  constructor() {
    makeAutoObservable(this);
    this.getPosts();
  }

  get posts() {
    return Array.from(this.postsRegistery.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }

  private getPosts = async () => {
    const postsSnap = await getDocs(
      query(collection(db, "posts"), orderBy("timestamp", "desc"))
    );

    postsSnap.docs.forEach(async (doc) => {
      await this.setPostFromDoc(doc);
    });
  };

  private setPostFromDoc = async (doc: DocumentSnapshot<DocumentData>) => {
    if (this.postsRegistery.has(doc.id)) {
      return;
    }

    await this.getComments(doc.id);

    const post = {
      id: doc.id,
      ...doc.data(),
      timestamp: new Date(doc.data()?.timestamp?.toDate()),
    } as Post;

    runInAction(() => {
      this.postsRegistery.set(post.id, post);
    });
  };

  private getComments = async (postId: string) => {
    if (this.commentsRegistery[postId]) {
      return;
    }

    const commentsSnap = await getDocs(
      query(
        collection(db, "posts", postId, "comments"),
        orderBy("timestamp", "desc")
      )
    );

    const comments = commentsSnap.docs.map((doc) =>
      this.getCommentFromDoc(doc)
    );

    runInAction(() => {
      this.commentsRegistery[postId] = comments;
    });
  };

  private getCommentFromDoc = (doc: DocumentSnapshot<DocumentData>) => {
    return {
      id: doc.id,
      ...doc.data(),
      timestamp: new Date(doc.data()?.timestamp?.toDate()),
    } as PostComment;
  };

  selectImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      runInAction(() => {
        this.selectedImageToPost = readerEvent.target?.result || null;
      });
    };
  };

  removeImageToPost = () => {
    this.selectedImageToPost = null;
  };

  uploadPost = async () => {
    if (this.loading || typeof this.selectedImageToPost !== "string") {
      return;
    }

    const { user } = store.userStore;

    if (!user) {
      return;
    }

    this.loading = true;

    const docRef = await addDoc(collection(db, "posts"), {
      username: user.displayName,
      avatar: user.photoURL,
      caption: this.caption,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, this.selectedImageToPost, "data_url");

    const downloadURL = await getDownloadURL(imageRef);

    await updateDoc(doc(db, "posts", docRef.id), {
      image: downloadURL,
    });

    const postDoc = await getDoc(docRef);
    this.setPostFromDoc(postDoc);

    store.commonStore.setModalOpen(false);

    runInAction(() => {
      this.caption = "";
      this.selectedImageToPost = null;
      this.loading = false;
    });
  };

  setCaption = (caption: string) => {
    this.caption = caption;
  };

  postComment = async (comment: string, postId: string) => {
    if (this.loading) {
      return;
    }

    const { user } = store.userStore;

    if (!user) {
      return;
    }

    this.loading = true;

    const docRef = await addDoc(collection(db, "posts", postId, "comments"), {
      comment,
      username: user.displayName,
      avatar: user.photoURL,
      timestamp: serverTimestamp(),
    });

    const commentDoc = await getDoc(docRef);
    this.commentsRegistery[postId].push(this.getCommentFromDoc(commentDoc));

    runInAction(() => {
      this.loading = false;
    });
  };
}

export default PostStore;
