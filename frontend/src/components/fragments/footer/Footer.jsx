import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col py-8 px-[5%] bg-primary text-white">
      <div className="flex flex-col border-b pb-4 sm:flex-row">
        <div className="flex flex-col px-2 sm:flex-1">
          <h3 className="flex items-center text-lg lg:text-xl">
            <img
              src="/assets/logo-academica.png"
              alt="logo academica"
              className="w-16"
            />
            ACADEMICA
          </h3>
          <p className="text-xs w-[80%] mt-4 lg:text-sm">
            Belajar, Berdiskusi, Berkembang Bersama – Hanya di Academia!
          </p>
          <div className="flex mt-4 gap-4 items-center">
            <a href="/instagram" className="cursor-pointer">
              <FaInstagram className="lg:text-xl" />
            </a>
            <a href="/facebook" className="cursor-pointer">
              <FaFacebook className="lg:text-xl" />
            </a>
            <a href="/twitter" className="cursor-pointer">
              <FaTwitter className="lg:text-xl" />
            </a>
          </div>
        </div>
        <div className="flex mt-8 items-center sm:flex-1">
          <div className="flex-1 flex flex-col items-center gap-4">
            <a href="/" className="text-sm">
              Home
            </a>
            <a href="/about" className="text-sm">
              About
            </a>
            <a href="/faq" className="text-sm">
              FAQ
            </a>
            <a href="/forum" className="text-sm">
              Forum
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4 sm:ml-[50%]">
            <a href="/terms" className="text-sm">
              Terms
            </a>
            <a href="/privacy" className="text-sm">
              Privacy
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-center mt-4">
        &copy; Academica | Forum Diskusi, Belajar, dan Berkembang
      </p>
    </footer>
  );
};

export default Footer;
