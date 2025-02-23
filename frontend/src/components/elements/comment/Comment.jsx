import { BiDislike, BiLike } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { GoComment } from 'react-icons/go';

const Comment = () => {
  return (
    <div className="flex flex-col mt-8 border-b border-b-black pb-4">
      <CommentHeader />
      <CommentBody />
      <CommentFooter />
    </div>
  );
};

const CommentHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-center items-center w-10 h-10 bg-background rounded-full">
        <FaUser />
      </div>
      <h3 className="text-sm font-semibold text-primary">User</h3>
    </div>
  );
};

const CommentBody = () => {
  return (
    <div className="flex flex-col mt-4">
      <p className="text-xs text-dark text-justify lg:text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa
        ullam consequatur adipisci iusto odit ducimus maiores doloremque, amet
        veniam? Accusamus, cum possimus est eum provident officiis et commodi
        alias.
      </p>
    </div>
  );
};

const CommentFooter = () => {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <button className="flex items-center text-xs gap-2 cursor-pointer hover:text-blue-500">
            <GoComment className="text-lg" /> <span>3 balasan</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-xs cursor-pointer"
          >
            <BiLike className="text-lg" /> <span>10</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-xs cursor-pointer"
          >
            <BiDislike className="text-lg" /> <span>10</span>
          </button>
        </div>
      </div>
      <span className="flex items-center text-xs gap-1 text-black opacity-50">
        <FaClockRotateLeft />
        <p>30 menit yang lalu</p>
      </span>
    </div>
  );
};

export default Comment;
