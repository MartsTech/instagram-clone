import usePostComments from "hooks/usePostComments";
import { observer } from "mobx-react-lite";
import PostItemComment from "./PostItemComment";

interface PostItemCommentsProps {
  postId: string;
}

const PostItemComments: React.FC<PostItemCommentsProps> = ({ postId }) => {
  const [comments] = usePostComments(postId);

  return (
    <>
      {comments.length > 0 && (
        <div
          className="ml-10 h-20 overflow-y-scroll scrollbar-track-black
          scrollbar-thin"
        >
          {comments.map((comment) => (
            <PostItemComment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </>
  );
};

export default observer(PostItemComments);
