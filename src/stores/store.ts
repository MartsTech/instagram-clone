import { createContext, useContext } from "react";
import StoryStore from "./storyStore";
import UserStore from "./userStore";

interface Store {
  userStore: UserStore;
  storyStore: StoryStore;
}

export const store: Store = {
  userStore: new UserStore(),
  storyStore: new StoryStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export const resetStore = () => {
  const { userStore } = store;
  userStore.reset();
};
