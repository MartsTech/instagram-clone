import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import StoriesItem from "./StoriesItem";

const Stories = () => {
  const { stories } = useStore().storyStore;
  const { user } = useStore().userStore;

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200
      border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {user && (
        <StoriesItem
          avatar={user.photoURL || ""}
          username={user.displayName}
          mine={true}
        />
      )}

      {stories.map((story) => (
        <StoriesItem
          key={story.id}
          avatar={story.avatar}
          username={story.username}
        />
      ))}
    </div>
  );
};

export default observer(Stories);
