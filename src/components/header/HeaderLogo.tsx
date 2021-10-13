import Image from "next/image";

const HeaderLogo = () => {
  return (
    <>
      <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
        <Image src="/images/logo.png" layout="fill" objectFit="contain" />
      </div>
      <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
        <Image src="/images/logo-icon.png" layout="fill" objectFit="contain" />
      </div>
    </>
  );
};

export default HeaderLogo;
