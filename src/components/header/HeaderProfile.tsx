import { useStore } from "stores/store";

const HeaderProfile = () => {
  const { user } = useStore().userStore;

  return (
    <img
      loading="lazy"
      src={user?.photoURL || undefined}
      alt="profile"
      className="h-10 rounded-full cursor-pointer"
    />
  );
};

export default HeaderProfile;
