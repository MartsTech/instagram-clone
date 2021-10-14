import Header from "components/header/Header";
import Posts from "modules/posts/Posts";
import Stories from "modules/stories/Stories";
import FeedProfile from "./FeedProfile";
import FeedSuggestions from "./FeedSuggestions";

const Feed = () => {
  return (
    <div
      className="bg-gray-50 h-screen overflow-y-scroll
      scrollbar-hide"
    >
      <Header />
      <main
        className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto"
      >
        <section className="col-span-2">
          <Stories />
          <Posts />
        </section>
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <FeedProfile />
            <FeedSuggestions />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Feed;
