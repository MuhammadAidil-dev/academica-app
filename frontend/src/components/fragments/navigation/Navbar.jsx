import { useEffect, useState } from 'react';
import { FaHome, FaInfo, FaQuestion } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { MdForum } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 bg-white shadow-md py-3 px-[5%] z-50">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
};

const NavbarDesktop = () => {
  const activeLink = 'font-semibold text-primary text-base';
  const inactiveLink = 'font-semibold text-slate-300 text-sm';

  return (
    <nav className="hidden items-center justify-between sm:flex">
      <a href="/">
        <img
          src="/assets/logo-academica.png"
          alt="logo academica"
          className="w-12 lg:w-14"
        />
      </a>
      <div className="flex gap-2 items-center justify-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          About
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/forum"
          className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        >
          Forum
        </NavLink>
      </div>
      <div className="flex gap-2">
        <a
          href="/login"
          className="bg-primary font-semibold text-white text-xs py-2 flex justify-center items-center w-[80px] rounded-sm"
        >
          Sign In
        </a>
        <a
          href="/register"
          className="bg-white border border-primary font-semibold text-primary py-2 text-xs flex justify-center items-center w-[80px] rounded-sm"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeSidebar = (e) => {
      if (!e.target.closest('nav') && !e.target.closest('aside')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between sm:hidden">
        <a href="/">
          <img
            src="/assets/logo-academica.png"
            alt="logo academica"
            className="w-12"
          />
        </a>
        <div
          onClick={handleOpenSidebar}
          className="text-2xl hover:cursor-pointer"
        >
          <FiMenu />
        </div>
      </nav>

      {/* sidebar */}
      <Sidebar isOpen={isOpen} />
    </>
  );
};

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`bg-white absolute top-full w-[200px] h-screen shadow-md ${
        isOpen ? 'right-0' : '-right-full'
      } transition-all`}
    >
      <div className="flex flex-col p-4 gap-4">
        <a
          href="/"
          className="flex items-center gap-1 border-b border-b-slate-300 p-1 hover:text-primary transition-colors hover:bg-background rounded-sm"
        >
          <span>
            <FaHome />
          </span>{' '}
          Home
        </a>
        <a
          href="/about"
          className="flex items-center gap-1 border-b border-b-slate-300 p-1 hover:text-primary transition-colors hover:bg-background rounded-sm"
        >
          <span>
            <FaInfo />
          </span>{' '}
          About
        </a>
        <a
          href="/faq"
          className="flex items-center gap-1 border-b border-b-slate-300 p-1 hover:text-primary transition-colors hover:bg-background rounded-sm"
        >
          <span>
            <FaQuestion />
          </span>{' '}
          FAQ
        </a>
        <a
          href="/forum"
          className="flex items-center gap-1 border-b border-b-slate-300 p-1 hover:text-primary transition-colors hover:bg-background rounded-sm"
        >
          <span>
            <MdForum />
          </span>{' '}
          Forum
        </a>
      </div>
      <div className="flex flex-col p-4 items-center gap-4 mt-8">
        <a
          href="/login"
          className="bg-primary font-semibold text-white py-2 px-1 text-xs flex justify-center items-center w-[80px] rounded-sm"
        >
          Sign In
        </a>
        <a
          href="/register"
          className="bg-white border border-primary font-semibold text-primary py-2 px-1 text-xs flex justify-center items-center w-[80px] rounded-sm"
        >
          Sign Up
        </a>
      </div>
    </aside>
  );
};

export { Navbar };
