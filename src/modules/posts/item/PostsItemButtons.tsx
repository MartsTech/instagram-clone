import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import PostsItemButtonsItem from "./PostsItemButtonsItem";

const PostsItemButtons = () => {
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

export default PostsItemButtons;
