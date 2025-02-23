import { useState } from 'react';
import { FaArrowLeftLong, FaUser } from 'react-icons/fa6';
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdNotificationsNone,
} from 'react-icons/md';

const ForumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed bg-white top-0 inset-x-0 p-4 px-[5%] z-50 shadow-md">
      <nav className="flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-semibold text-sm text-dark md:text-base"
        >
          <span>
            <FaArrowLeftLong />
          </span>{' '}
          Beranda
        </a>
        <div className="flex items-center gap-1">
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="flex items-center cursor-pointer"
          >
            <h3 className="font-semibold text-dark text-xs mr-2 md:text-sm">
              User
            </h3>
            <span className="bg-[#D9D9D9] flex items-center justify-center w-10 h-10 rounded-full cursor-pointer">
              <FaUser className="text-xs md:text-xs" />
            </span>
            {isOpen ? (
              <MdArrowDropUp className="text-3xl" />
            ) : (
              <MdArrowDropDown className="text-3xl" />
            )}
          </div>
          <MdNotificationsNone className="text-xl" />
        </div>
      </nav>
    </header>
  );
};

export default ForumNavbar;
