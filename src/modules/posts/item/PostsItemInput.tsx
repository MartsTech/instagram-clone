import { EmojiHappyIcon } from "@heroicons/react/outline";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "stores/store";

interface PostsItemInputProps {
  postId: string;
}

const PostsItemInput: React.FC<PostsItemInputProps> = ({ postId }) => {
  const { user } = useStore().userStore;
  const { postComment, loading } = useStore().postStore;

  const [comment, setComment] = useState("");

  if (!user) return null;

  return (
    <form className="flex items-center p-4">
      <EmojiHappyIcon className="h-7" />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment ..."
        className="border-none flex-1 focus:ring-0 outline-none"
      />
      <button
        disabled={!comment.trim() || loading}
        onClick={(e) => {
          e.preventDefault();
          postComment(comment.trim(), postId);
          setComment("");
        }}
        type="submit"
        className="font-semibold text-blue-400"
      >
        Post
      </button>
    </form>
  );
};

export default observer(PostsItemInput);
