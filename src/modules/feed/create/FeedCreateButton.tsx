const FeedCreateButton = () => {
  return (
    <div className="mt-5 sm:mt-6">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md
        border border-transparent shadow-sm px-4 py-2 bg-red-600
        text-base font-medium text-white hover:bg-red-700
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-red-500 sm:text-sm disabled:bg-gray-300
        disabled:cursor-not-allowed hover:disabled:bg-gray-300"
      >
        Upload Post
      </button>
    </div>
  );
};

export default FeedCreateButton;
