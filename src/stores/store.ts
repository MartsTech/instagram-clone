import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import FeedStore from "./feedStore";
import PostStore from "./postStore";
import StoryStore from "./storyStore";
import UserStore from "./userStore";

interface Store {
  commonStore: CommonStore;
  userStore: UserStore;
  storyStore: StoryStore;
  postStore: PostStore;
  feedStore: FeedStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  storyStore: new StoryStore(),
  postStore: new PostStore(),
  feedStore: new FeedStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export const resetStore = () => {
  const { userStore } = store;
  userStore.reset();
};
