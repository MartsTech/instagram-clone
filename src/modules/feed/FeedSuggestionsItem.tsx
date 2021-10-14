import { Suggestion } from "types/feed";

interface FeedSuggestionsItemProps {
  suggestion: Suggestion;
}

const FeedSuggestionsItem: React.FC<FeedSuggestionsItemProps> = ({
  suggestion,
}) => {
  const { avatar, username, company } = suggestion;

  return (
    <div className="flex items-center justify-between mt-3">
      <img
        className="w-10 h-10 rounded-full border p-[2px]"
        loading="lazy"
        src={avatar}
        alt={username}
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{username}</h2>
        <h3 className="text-xs text-gray-400">Works at {company.name}</h3>
      </div>
      <button className="text-xs text-blue-400 font-bold">Follow</button>
    </div>
  );
};

export default FeedSuggestionsItem;
