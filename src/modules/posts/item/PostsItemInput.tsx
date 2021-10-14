import { EmojiHappyIcon } from "@heroicons/react/outline";

const PostsItemInput = () => {
  return (
    <form className="flex items-center p-4">
      <EmojiHappyIcon className="h-7" />
      <input
        type="text"
        placeholder="Add a comment ..."
        className="border-none flex-1 focus:ring-0 outline-none"
      />
      <button className="font-semibold text-blue-400">Post</button>
    </form>
  );
};

export default PostsItemInput;
