import { SearchForum } from '../../../components/elements/search';
import Tag from '../../../components/elements/Tag';
import ThreadSection from './ThreadSection';

const ThreadContent = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:relative">
      <Sidebar />
      <ThreadSection />
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden p-4 flex-col lg:flex fixed left-0 z-10 bg-slate-100 w-[300px] h-screen shadow-sm xl:w-[400px]">
      <SearchForum />
      <div className="flex flex-col p-4 border border-black bg-white border-opacity-50 rounded-sm h-[300px] overflow-y-auto">
        <h4 className="text-base font-semibold text-primary border-b border-b-slate-300 pb-2">
          Kategori Populer
        </h4>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Tag label={'#forum'} />
          <Tag label={'#forum'} />
          <Tag label={'#forum'} />
        </div>
      </div>
    </aside>
  );
};

export default ThreadContent;
