import { FaUser } from 'react-icons/fa';
import { FaClockRotateLeft, FaRegCircleCheck } from 'react-icons/fa6';
import Tag from '../../elements/Tag';
import { GoComment } from 'react-icons/go';
import { BiDislike, BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ThreadCard = () => {
  return (
    <div className="flex flex-col border-b border-b-slate-500 pb-4">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};

const CardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-background w-10 h-10 rounded-full flex justify-center items-center">
          <FaUser />
        </div>
        <h3 className="text-sm font-semibold text-primary">User</h3>
      </div>

      {/* status */}
      <div className="flex items-center gap-2">
        <span className="text-primary">
          <FaRegCircleCheck />
        </span>
        <p className="text-xs bg-green-700 font-semibold text-white py-1 px-2 rounded-sm">
          selesai
        </p>
      </div>
    </div>
  );
};

const CardBody = () => {
  return (
    <div className="flex flex-col mt-4 gap-2">
      <Link
        to="/forum/slug/apakah-academica-merupakan-forum-diskusi-akademik-yang-bagus"
        className="line-clamp-2 text-lg font-semibold text-primary"
      >
        Apakah academica merupakan forum diskusi akademik yang bagus?
      </Link>
      <p className="text-sm text-dark line-clamp-2">
        Bagaimana menurut kalian teman teman, silahkan tuliskan pendapat kalian
        di komentar yak!
      </p>
    </div>
  );
};

const CardFooter = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex items-center gap-2">
        <Tag label="#forum" />
      </div>
      <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center text-xs gap-2 cursor-pointer hover:text-blue-500"
          >
            <GoComment className="text-lg" /> <span>3 pembahasan</span>
          </Link>
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
        <span className="flex items-center text-xs gap-1 text-black opacity-50">
          <FaClockRotateLeft />
          <p>30 menit yang lalu</p>
        </span>
      </div>
    </div>
  );
};
export default ThreadCard;
