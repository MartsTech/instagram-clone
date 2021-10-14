import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const FeedProfile = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        loading="lazy"
        src={user?.photoURL || undefined}
        alt="profile"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{user?.displayName}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
};

export default observer(FeedProfile);
