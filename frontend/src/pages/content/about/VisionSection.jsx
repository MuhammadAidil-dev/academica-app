const VisionSection = () => {
  return (
    <section className="py-8 bg-decorative bg-cover bg-center w-full px-[5%] h-[600px] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-primary md:text-xl lg:text-2xl">
          Visi & Misi Academica
        </h3>
        <div className="grid grid-cols-1 mt-8 gap-4 sm:grid-cols-2 lg:h-[250px]">
          <VisiCard />
          <MisiCard />
        </div>
      </div>
    </section>
  );
};

const VisiCard = () => {
  return (
    <div className="bg-white max-w-[400px] flex flex-col h-full shadow-md border border-[#FFD700] items-center p-4 rounded-sm justify-center lg:max-w-[600px]">
      <h4 className="text-lg font-semibold text-primary lg:text-xl">Visi</h4>
      <p className="text-xs text-dark text-center lg:text-sm lg:w-[80%]">
        Menjadi platform diskusi akademik terdepan yang mendorong kolaborasi,
        pemahaman, dan pertumbuhan intelektual mahasiswa di berbagai bidang
        keilmuan
      </p>
    </div>
  );
};

const MisiCard = () => {
  return (
    <div className="bg-white max-w-[400px] flex flex-col h-full shadow-md border border-[#FFD700] items-center p-4 rounded-sm justify-center lg:max-w-[600px]">
      <h4 className="text-lg font-semibold text-primary lg:text-xl">Misi</h4>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2 text-xs lg:text-sm text-dark before:content-[''] before:block before:w-2 before:h-2 before:bg-primary before:rounded-full">
          Menyediakan Ruang Diskusi Interaktif
        </li>
        <li className="flex items-center gap-2 text-xs text-dark before:content-[''] before:block before:w-2 before:h-2 before:bg-primary before:rounded-full">
          Mendorong Pembelajaran Kolaboratif
        </li>
        <li className="flex items-center gap-2 text-xs text-dark before:content-[''] before:block before:w-2 before:h-2 before:bg-primary before:rounded-full">
          Menjaga Kualitas Konten dan Keamanan Diskusi
        </li>
        <li className="flex items-center gap-2 text-xs text-dark before:content-[''] before:block before:w-2 before:h-2 before:bg-primary before:rounded-full">
          Mendukung Inovasi dan Pengembangan Akademik
        </li>
      </ul>
    </div>
  );
};
export default VisionSection;
