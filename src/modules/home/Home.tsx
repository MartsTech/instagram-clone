import Header from "components/header/Header";
import HomeFeed from "./feed/HomeFeed";
import HomeModal from "./modal/HomeModal";

const Home = () => {
  return (
    <>
      <Header />
      <HomeFeed />
      <HomeModal />
    </>
  );
};

export default Home;
