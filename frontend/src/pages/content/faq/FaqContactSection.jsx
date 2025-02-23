import { FaRegQuestionCircle } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const FaqContactSection = () => {
  return (
    <section className="bg-background flex flex-col py-8 px-[5%]">
      <h3 className="text-lg font-semibold text-primary text-center lg:text-2xl">
        Hubungi kami jika perlu
      </h3>
      <p className="text-xs text-dark text-center mt-2 lg:text-sm">
        Belum menemukan jawaban yang anda cari? Hubung kami, kami siap membantu!
      </p>
      <div className="flex flex-col mt-8">
        <h4 className="font-semibold text-base text-primary border-b pb-2 border-b-slate-300 lg:text-xl">
          Bantuan & Dukungan
        </h4>
        <form className="flex flex-col mt-4 gap-8 w-full lg:max-w-[800px] lg:mx-auto">
          <div className="flex items-center border border-primary rounded-md py-2 px-4 gap-2">
            <MdOutlineEmail className="text-2xl" />
            <input
              type="text"
              className="focus:outline-none w-full bg-transparent text-xs text-dark"
              placeholder="Masukan email anda"
            />
          </div>
          <div className="flex items-center border border-primary rounded-md py-2 px-4 gap-2">
            <FaRegQuestionCircle className="text-2xl" />
            <input
              type="text"
              className="focus:outline-none w-full bg-transparent text-xs text-dark"
              placeholder="Subject anda"
            />
          </div>
          <div className="w-full border border-primary rounded-sm h-[200px] p-4">
            <textarea
              name="content"
              id="content"
              className="w-full bg-transparent text-dark text-xs h-full focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold text-xs rounded-sm py-2 px-4 cursor-pointer lg:w-[150px]"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export default FaqContactSection;
