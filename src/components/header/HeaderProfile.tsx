import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const HeaderProfile = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <>
      {user && (
        <img
          loading="lazy"
          src={user.photoURL || undefined}
          alt="profile"
          onClick={signOut}
          className="h-10 w-10 rounded-full cursor-pointer"
        />
      )}
    </>
  );
};

export default observer(HeaderProfile);
