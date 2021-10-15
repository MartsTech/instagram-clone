import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { db, storage } from "config/firebase";
import { makeAutoObservable, runInAction } from "mobx";
import { Post } from "types/post";
import { store } from "./store";

class PostStore {
  postsRegistery = new Map<string, Post>();
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

  private getPosts = () => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          const post = {
            id: doc.id,
            ...doc.data(),
            timestamp: new Date(doc.data().timestamp?.toDate()),
          } as Post;

          runInAction(() => {
            this.postsRegistery.set(post.id, post);
          });
        });
      }
    );
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
}

export default PostStore;
