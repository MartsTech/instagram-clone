import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import usePostLikes from "hooks/usePostLikes";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PostsItemButtonsItem from "./PostsItemButtonsItem";

interface PostsItemButtonsProps {
  postId: string;
}

const PostsItemButtons: React.FC<PostsItemButtonsProps> = ({ postId }) => {
  const { user } = useStore().userStore;
  const { likePost } = useStore().postStore;

  const [_, isLiked] = usePostLikes(postId);

  if (!user) return null;

  return (
    <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
        <PostsItemButtonsItem
          Icon={HeartIcon}
          selected={isLiked}
          onClick={() => likePost(postId, isLiked)}
        />
        <PostsItemButtonsItem Icon={ChatIcon} />
        <PostsItemButtonsItem Icon={PaperAirplaneIcon} />
      </div>
      <PostsItemButtonsItem Icon={BookmarkIcon} />
    </div>
  );
};

export default observer(PostsItemButtons);
