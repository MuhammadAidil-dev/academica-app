const HeroSection = () => {
  return (
    <div className="relative items-center h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full h-full md:flex-row px-8 md:gap-8 lg:px-24">
        <div className="w-[80%] sm:w-[400px] lg:flex-1">
          <img
            src="/assets/hero-image.png"
            alt="hero image"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col mt-10 lg:flex-1 lg:pl-16">
          <h2 className="text-primary font-semibold text-xl lg:text-4xl">
            ACADEMICA
          </h2>
          <p className="text-dark text-sm lg:text-xl md:w-[80%] lg:mt-2">
            Berinteraksi, Belajar, dan Berkembang: Forum Belajar Mahasiswa
          </p>
          <a
            href="/login"
            className="bg-primary text-white text-xs mt-4 rounded-sm font-semibold py-2 flex justify-center items-center w-40"
          >
            Gabung Sekarang
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full lg:-bottom-8">
        <img
          src="/assets/vector-wave.png"
          alt="vektor"
          className="w-full object-cover lg:hidden"
        />
        <img
          src="/assets/Vector.png"
          alt="vektor"
          className="hidden w-full object-cover lg:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
