import { useEffect, useState } from "react";
import { useStore } from "stores/store";

const usePostLikes = (postId: string) => {
  const { likesRegistery } = useStore().postStore;
  const { user } = useStore().userStore;

  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLikesCount(likesRegistery[postId].length);
    setIsLiked(
      likesRegistery[postId].findIndex((like) => like.id === user?.uid) !== -1
    );
  }, [postId, likesRegistery[postId].length]);

  return [likesCount, isLiked] as const;
};

export default usePostLikes;
