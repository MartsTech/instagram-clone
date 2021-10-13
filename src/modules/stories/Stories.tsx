import { useStore } from "stores/store";
import StoriesItem from "./StoriesItem";

const Stories = () => {
  const { stories } = useStore().storyStore;

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200
      border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {stories.map((story) => (
        <StoriesItem key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;
