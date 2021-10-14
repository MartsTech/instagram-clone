import Header from "components/header/Header";
import { useStore } from "stores/store";

const Login = () => {
  const { signInGoogle } = useStore().userStore;

  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center 
        min-h-screen py-2 -mt-56 px-14 text-center"
      >
        <img
          className="w-80"
          loading="lazy"
          src="/images/logo.png"
          alt="logo"
        />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only
        </p>
        <div className="mt-40">
          <button
            className="p-3 bg-blue-500 rounded-lg text-white"
            onClick={signInGoogle}
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
