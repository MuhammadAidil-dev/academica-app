import { FaUser } from 'react-icons/fa';
import Editor from '../editor/Editor';
import CommentList from './CommentList';

const CommentSection = () => {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-10 h-10 bg-background rounded-full">
          <FaUser />
        </div>
        <h3 className="text-sm font-semibold text-primary">User</h3>
      </div>
      <div className="flex-1 mt-4">
        <Editor />
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="bg-primary p-2 flex justify-center items-center rounded-sm text-white text-xs font-semibold"
        >
          Komentar
        </button>
      </div>
      <CommentList />
    </div>
  );
};

export default CommentSection;
