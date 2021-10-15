import usePostLikes from "hooks/usePostLikes";
import { observer } from "mobx-react-lite";

interface PostItemCaptionProps {
  id: string;
  username: string;
  caption: string;
}

const PostsItemCaption: React.FC<PostItemCaptionProps> = ({
  id,
  username,
  caption,
}) => {
  const [likesCount] = usePostLikes(id);

  return (
    <p className="p-5 truncate">
      {likesCount > 0 && <p className="font-bold mb-1">{likesCount} likes</p>}
      <span className="font-bold mr-1">{username} </span>
      {caption}
    </p>
  );
};

export default observer(PostsItemCaption);
