import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-3 border border-gray-600 rounded-full min-w-max py-1 px-2">
      <MdSearch className="h-6 w-6 text-black" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none text-black outline-none"
      />
    </div>
  );
};

export default Search;
