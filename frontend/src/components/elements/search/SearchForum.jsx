import { FaSearch } from 'react-icons/fa';

const SearchForum = () => {
  return (
    <div className="flex items-center border mb-4 border-slate-300 gap-2 rounded-sm py-2 px-4 focus-within:border-primary transition-colors lg:bg-white">
      <FaSearch />
      <input
        type="text"
        className="focus:outline-none text-sm w-full bg-transparent"
        placeholder="Cari judul diskusi"
      />
    </div>
  );
};

export default SearchForum;
