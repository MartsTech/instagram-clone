import Header from "components/header/Header";
import Posts from "modules/posts/Posts";
import Stories from "modules/stories/Stories";

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
      </main>
    </div>
  );
};

export default Feed;
