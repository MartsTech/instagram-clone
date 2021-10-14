import FeedSuggestionsItems from "./FeedSuggestionsItems";

const FeedSuggestions = () => {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <FeedSuggestionsItems />
    </div>
  );
};

export default FeedSuggestions;
