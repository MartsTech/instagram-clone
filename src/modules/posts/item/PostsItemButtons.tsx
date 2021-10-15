import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PostsItemButtonsItem from "./PostsItemButtonsItem";

const PostsItemButtons = () => {
  const { user } = useStore().userStore;

  if (!user) return null;

  return (
    <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
        <PostsItemButtonsItem Icon={HeartIcon} />
        <PostsItemButtonsItem Icon={ChatIcon} />
        <PostsItemButtonsItem Icon={PaperAirplaneIcon} />
      </div>
      <PostsItemButtonsItem Icon={BookmarkIcon} />
    </div>
  );
};

export default observer(PostsItemButtons);
