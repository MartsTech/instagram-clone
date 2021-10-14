import { Post } from "types/post";
import PostsItemButtons from "./PostsItemButtons";
import PostsItemHeader from "./PostsItemHeader";
import PostsItemInput from "./PostsItemInput";

export interface PostsItemProps {
  post: Post;
}

const PostsItem: React.FC<PostsItemProps> = ({ post }) => {
  const { avatar, username, img, caption } = post;

  return (
    <div className="bg-white my-7 border rounded-sm">
      <PostsItemHeader avatar={avatar} username={username} />
      <img className="object-cover" loading="lazy" src={img} alt="post" />
      <PostsItemButtons />
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>
      <PostsItemInput />
    </div>
  );
};

export default PostsItem;
