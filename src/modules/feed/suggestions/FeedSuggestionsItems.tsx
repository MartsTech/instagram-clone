import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import FeedSuggestionsItem from "./FeedSuggestionsItem";

const FeedSuggestionsItems = () => {
  const { suggestions } = useStore().feedStore;

  return (
    <>
      {suggestions.map((suggestion) => (
        <FeedSuggestionsItem key={suggestion.id} suggestion={suggestion} />
      ))}
    </>
  );
};

export default observer(FeedSuggestionsItems);
