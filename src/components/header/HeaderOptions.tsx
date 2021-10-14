import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon, MenuIcon } from "@heroicons/react/solid";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import HeaderOptionsItem from "./HeaderOptionsItem";

const HeaderOptions = () => {
  const { user } = useStore().userStore;
  const router = useRouter();

  return (
    <>
      <MenuIcon className="h-6 md:hidden cursor-pointer" />
      <HeaderOptionsItem Icon={HomeIcon} onClick={() => router.push("/")} />
      {user ? (
        <>
          <HeaderOptionsItem
            Icon={PaperAirplaneIcon}
            IconClass="rotate-45"
            count={3}
          />
          <HeaderOptionsItem Icon={PlusCircleIcon} />
          <HeaderOptionsItem Icon={UserGroupIcon} />
          <HeaderOptionsItem Icon={HeartIcon} />
        </>
      ) : (
        <button onClick={() => router.push("/login")}>Sign In</button>
      )}
    </>
  );
};

export default observer(HeaderOptions);
