import HeaderLogo from "./HeaderLogo";
import HeaderOptions from "./HeaderOptions";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <HeaderLogo />
        <HeaderSearch />
        <div className="flex items-center justify-end space-x-4">
          <HeaderOptions />
          <HeaderProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
