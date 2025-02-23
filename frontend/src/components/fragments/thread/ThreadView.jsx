import ThreadCard from '../cards/ThreadCard';
import CommentSection from './CommentSection';

const ThreadView = () => {
  return (
    <div className="flex flex-col w-full px-[5%]">
      <ThreadCard />
      <CommentSection />
    </div>
  );
};

export default ThreadView;
