import { FiArrowLeftCircle } from 'react-icons/fi';
import ThreadView from '../../../components/fragments/thread/ThreadView';

const ThreadDetail = () => {
  return (
    <div className="flex flex-col py-4 max-w-[1000px] mx-auto w-full">
      <span className="text-xl px-[5%] mb-8 cursor-pointer">
        <FiArrowLeftCircle />
      </span>
      <ThreadView />
    </div>
  );
};

export default ThreadDetail;
