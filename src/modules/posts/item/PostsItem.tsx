import { Post } from "types/post";
import PostItemComments from "./PostItemComments";
import PostsItemButtons from "./PostsItemButtons";
import PostsItemHeader from "./PostsItemHeader";
import PostsItemInput from "./PostsItemInput";

export interface PostsItemProps {
  post: Post;
}

const PostsItem: React.FC<PostsItemProps> = ({ post }) => {
  const { avatar, username, image, caption, id } = post;

  return (
    <div className="bg-white my-7 border rounded-sm">
      <PostsItemHeader avatar={avatar} username={username} />
      <img className="object-cover" loading="lazy" src={image} alt="post" />
      <PostsItemButtons />
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>
      <PostItemComments postId={post.id} />
      <PostsItemInput postId={id} />
    </div>
  );
};

export default PostsItem;
