import { defaultSEO } from "config/seo";
import AuthProvider from "modules/auth/AuthProvider";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store, StoreContext } from "stores/store";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContext.Provider value={store}>
      <AuthProvider>
        <DefaultSeo {...defaultSEO} />
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" hideProgressBar />
      </AuthProvider>
    </StoreContext.Provider>
  );
};

export default App;
