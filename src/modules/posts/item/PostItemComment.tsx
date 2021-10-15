import Moment from "react-moment";
import { PostComment } from "types/post";

interface PostItemCommentProps {
  comment: PostComment;
}

const PostItemComment: React.FC<PostItemCommentProps> = ({ comment }) => {
  const { avatar, username, timestamp } = comment;

  return (
    <div className="flex items-center space-x-2 mb-3">
      <img
        className="h-7 rounded-full"
        loading="lazy"
        src={avatar}
        alt="avatar"
      />
      <p className="text-sm flex-1">
        <span className="font-bold">{username}</span> {comment.comment}
      </p>
      <Moment fromNow className="pr-5 text-xs">
        {timestamp}
      </Moment>
    </div>
  );
};

export default PostItemComment;
