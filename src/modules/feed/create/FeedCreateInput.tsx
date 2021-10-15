import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const FeedCreateInput = () => {
  const { caption, setCaption } = useStore().postStore;

  return (
    <div className="mt-2">
      <input
        className="border-none focus:ring-0 w-full text-center"
        type="text"
        placeholder="Please enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
    </div>
  );
};

export default observer(FeedCreateInput);
