import { FiFilter } from 'react-icons/fi';
import ThreadList from './ThreadList';
import ButtonPaginate from '../../../components/elements/ButtonPaginate';
import { SearchForum } from '../../../components/elements/search';

const ThreadSection = () => {
  return (
    <div className="flex flex-col py-4 px-[5%] lg:px-8 lg:ml-[300px] lg:flex-1 xl:ml-[400px]">
      <div className="lg:hidden">
        <SearchForum />
      </div>
      <div className="flex items-center justify-between border-b border-b-slate-500 pb-4">
        <button
          type="button"
          className="bg-primary font-semibold text-xs text-white rounded-sm py-2 px-4 cursor-pointer"
        >
          Buat Diskusi
        </button>
        <FiFilter className="text-xl cursor-pointer" />
      </div>
      <ThreadList />
      <Pagination />
    </div>
  );
};

const Pagination = () => {
  const contentPerPage = 10;
  const listThread = 100;
  const page = listThread / contentPerPage;

  return (
    <div className="mt-12 flex items-center gap-2 mx-auto">
      {Array.from({ length: page }, (_, index) => (
        <ButtonPaginate key={index} value={index + 1} />
      ))}
    </div>
  );
};

export default ThreadSection;
