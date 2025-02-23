import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactSection = () => {
  return (
    <section className="bg-background flex justify-center items-center py-16 px-[5%]">
      <div className="bg-white rounded-sm shadow-md flex-1 p-4 flex flex-col gap-2 sm:flex-row lg:max-w-[1200px]">
        <ContactInfo />
        <ContactImageIlustration />
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex-1 flex flex-col lg:pt-8 lg:pl-12">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-primary lg:text-2xl">
          Hubungi Kami
        </h3>
        <p className="text-xs texdark mt-2 lg:text-sm lg:w-[90%]">
          Jika Anda memiliki pertanyaan, masukan, atau membutuhkan bantuan,
          jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan
          senang hati
        </p>
        <ul className="flex flex-col gap-2 mt-4">
          <li className="flex items-center text-sm gap-2">
            <span>
              <FaLocationDot />
            </span>{' '}
            JL Pendidikan, Tembilahan, Indonesia
          </li>
          <li className="flex items-center text-sm gap-2">
            <span>
              <MdEmail />
            </span>{' '}
            academica.support@gmail.com
          </li>
          <li className="flex items-center text-sm gap-2">
            <span>
              <FaPhoneAlt />
            </span>{' '}
            +628-1234-5678
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-6">
        <h3 className="text-lg font-semibold text-primary lg:text-2xl">
          Mari Berteman
        </h3>
        <div className="flex mt-2 items-center gap-4">
          <a href="/instagram" className="text-primary text-xl">
            <FaInstagram />
          </a>
          <a href="/facebook" className="text-primary text-xl">
            <FaFacebook />
          </a>
          <a href="/twitter" className="text-primary text-xl">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactImageIlustration = () => {
  return (
    <div className="flex-1 p-4 flex justify-center items-center">
      <img
        src="/assets/kontak-image-ilustration.png"
        alt="contact image ilustration"
        className="w-full max-w-[300px]"
      />
    </div>
  );
};

export default ContactSection;
