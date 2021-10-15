import Image from "next/image";
import { useRouter } from "next/router";

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push("/")}
        className="relative hidden lg:inline-grid w-24 cursor-pointer"
      >
        <Image
          src="/images/logo.png"
          alt="text logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        onClick={() => router.push("/")}
        className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
      >
        <Image
          src="/images/logo-mobile.png"
          alt="mobile logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  );
};

export default HeaderLogo;
