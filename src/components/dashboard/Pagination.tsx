const Pagination = () => {
  return (
    <div className="p-2 flex justify-between mt-2">
      <button
        className="flex justify-center items-center px-3 h-[36px] bg-stone-400/70 text-gray-500 rounded-lg disabled:cursor-not-allowed"
        disabled
      >
        Previous
      </button>
      <button className="px-3 hover:shadow-lg disabled:cursor-not-allowed bg-zinc-100 text-zinc-700 rounded-lg">
        Next
      </button>
    </div>
  );
};

export default Pagination;
