import { DotsHorizontalIcon } from "@heroicons/react/outline";

interface PostsItemHeaderProps {
  avatar: string;
  username: string;
}

const PostsItemHeader: React.FC<PostsItemHeaderProps> = ({
  avatar,
  username,
}) => {
  return (
    <div className="flex items-center p-5">
      <img
        className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        loading="lazy"
        src={avatar}
        alt={username}
      />
      <p className="flex-1 font-bold">{username}</p>
      <DotsHorizontalIcon className="h-5" />
    </div>
  );
};

export default PostsItemHeader;
