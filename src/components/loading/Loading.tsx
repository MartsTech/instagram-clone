import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="h-screen bg-gray-50 grid place-items-center">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/images/logo-mobile.png"
          height={170}
          width={170}
          objectFit="contain"
          alt="brand"
        />
        <ClipLoader size={80} />
      </div>
    </div>
  );
};

export default Loading;
