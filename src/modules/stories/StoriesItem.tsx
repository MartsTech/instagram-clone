export interface StoriesItemProps {
  avatar: string;
  username: string;
  mine?: boolean;
}

const StoriesItem: React.FC<StoriesItemProps> = ({
  avatar,
  username,
  mine = false,
}) => {
  return (
    <div>
      <img
        className={`h-14 w-14 rounded-full p-[1.5px] border-red-500
        border-2 object-contain cursor-pointer hover:scale-110
        transition transform duration-200 ease-out ${
          mine && "border-green-500"
        }`}
        loading="lazy"
        src={avatar}
        alt={username}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default StoriesItem;
