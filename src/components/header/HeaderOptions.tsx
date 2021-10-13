import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon, MenuIcon } from "@heroicons/react/solid";
import HeaderOptionsItem from "./HeaderOptionsItem";

const HeaderOptions = () => {
  return (
    <>
      <MenuIcon className="h-6 md:hidden cursor-pointer" />
      <HeaderOptionsItem Icon={HomeIcon} />
      <HeaderOptionsItem
        Icon={PaperAirplaneIcon}
        IconClass="rotate-45"
        count={3}
      />
      <HeaderOptionsItem Icon={PlusCircleIcon} />
      <HeaderOptionsItem Icon={UserGroupIcon} />
      <HeaderOptionsItem Icon={HeartIcon} />
    </>
  );
};

export default HeaderOptions;
