import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PostsItem from "./item/PostsItem";

const Posts = () => {
  const { posts } = useStore().postStore;

  return (
    <div>
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default observer(Posts);
