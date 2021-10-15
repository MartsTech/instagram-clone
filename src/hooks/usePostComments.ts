import { useEffect, useState } from "react";
import { useStore } from "stores/store";
import { PostComment } from "types/post";

const usePostComments = (postId: string) => {
  const { commentsRegistery } = useStore().postStore;
  const [comments, setComments] = useState<PostComment[]>([]);

  useEffect(() => {
    setComments(commentsRegistery[postId]);
  }, [postId, commentsRegistery]);

  return [comments] as const;
};

export default usePostComments;
