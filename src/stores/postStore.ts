import { makeAutoObservable } from "mobx";
import { Post } from "types/post";

class PostStore {
  posts: Post[] = [];

  constructor() {
    makeAutoObservable(this);

    this.genPost();
  }

  private genPost = () => {
    this.posts.push(
      {
        id: "123",
        username: "martstech",
        avatar: "",
        img: "",
        caption: "Getting a pretty good start here",
      },
      {
        id: "231",
        username: "martstech",
        avatar: "",
        img: "",
        caption: "Getting a pretty good start here",
      },
      {
        id: "312",
        username: "martstech",
        avatar: "",
        img: "",
        caption: "Getting a pretty good start here",
      }
    );
  };
}

export default PostStore;
