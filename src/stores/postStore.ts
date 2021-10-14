import { makeAutoObservable } from "mobx";
import { Post } from "types/post";

class PostStore {
  posts: Post[] = [];
  selectedImageToPost: string | ArrayBuffer | null = null;
  caption: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  selectImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      this.selectedImageToPost = readerEvent.target?.result || null;
    };
  };

  removeImageToPost = () => {
    this.selectedImageToPost = null;
  };

  setCaption = (caption: string) => {
    this.caption = caption;
  };
}

export default PostStore;
