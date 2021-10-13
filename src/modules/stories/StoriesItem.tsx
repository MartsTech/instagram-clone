import { Story } from "types/story";

interface StoriesItemProps {
  story: Story;
}

const StoriesItem: React.FC<StoriesItemProps> = ({ story }) => {
  const { avatar, username } = story;

  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500
        border-2 object-contain cursor-pointer hover:scale-110
        transition transform duration-200 ease-out"
        loading="lazy"
        src={avatar}
        alt={username}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default StoriesItem;
