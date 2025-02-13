import { FaSearch } from 'react-icons/fa';

const HeroSectionFaq = () => {
  return (
    <section className="mt-16 relative bg-[url('/assets/faq-background-image.png')] h-[300px] bg-cover bg-center">
      <div className="absolute inset-x-0 inset-y-0 bg-black bg-opacity-30 text-white flex justify-center items-center flex-col">
        <h3 className="font-semibold text-lg sm:text-xl">Pertanyaan Umum</h3>
        <p className="font-normal text-xs sm:text-sm">
          Temukan jawaban atas pertanyaanmu disini
        </p>
        <div className="bg-white rounded-md py-2 px-4 w-[80%] flex items-center mt-4 sm:max-w-[700px]">
          <input
            type="text"
            className="focus:outline-none text-dark w-full"
            placeholder="Cari Pertanyaanmu disini"
          />
          <FaSearch className="text-dark" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFaq;
