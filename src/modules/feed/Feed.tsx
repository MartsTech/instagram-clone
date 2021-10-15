import Header from "components/header/Header";
import { observer } from "mobx-react-lite";
import Posts from "modules/posts/Posts";
import Stories from "modules/stories/Stories";
import { useStore } from "stores/store";
import FeedCreatePost from "./create/FeedCreate";
import FeedProfile from "./FeedProfile";
import FeedSuggestions from "./suggestions/FeedSuggestions";

const Feed = () => {
  const { user } = useStore().userStore;

  return (
    <div
      className="bg-gray-50 h-screen overflow-y-scroll
      scrollbar-hide"
    >
      <Header />
      <main
        className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto 
        ${!user && "!grid-cols-1 !max-w-3xl"}`}
      >
        <section className="col-span-2">
          <Stories />
          <Posts />
        </section>
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            {user && (
              <>
                <FeedProfile />
                <FeedSuggestions />
              </>
            )}
          </div>
        </section>
      </main>
      <FeedCreatePost />
    </div>
  );
};

export default observer(Feed);
