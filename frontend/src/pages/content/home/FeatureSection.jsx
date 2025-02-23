const FeatureSection = () => {
  const CardFeature = ({ title, deskripsi }) => {
    return (
      <div className="flex flex-col justify-center bg-background rounded-sm p-4 shadow-md items-center w-[300px] sm:w-full h-full">
        <h4 className="text-lg font-semibold text-primary text-center">
          {title}
        </h4>
        <p className="text-xs text-dark text-center">{deskripsi}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col px-[5%] py-8 lg:flex-row-reverse lg:items-center mt-14">
      <div className="flex-1 px-8 flex justify-center">
        <img
          src="/assets/feature-vector.png"
          alt="feature vector"
          className="w-full"
        />
      </div>
      <div className="flex flex-col lg:flex-1">
        <h3 className="font-semibold text-xl text-primary lg:text-3xl">
          Tempat terbaik untuk Belajar, Berdiskusi, dan Berkembang bersama
        </h3>
        <p className="text-dark text-sm lg:text-lg mt-2">
          Dengan Academia, belajar jadi lebih mudah, diskusi lebih terarah, dan
          peluang berkembang semakin luas bersama komunitas akademis
        </p>
        <div className="grid grid-cols-1 place-items-center mt-8 gap-6 sm:grid-cols-2">
          <CardFeature
            title="Diskusi Terstruktur"
            deskripsi="Temukan kategori diskusi berdasarkan mata kuliah atau topik spesifik"
          />
          <CardFeature
            title="Jawaban Terverifikasi"
            deskripsi="Dosen dapat menandai jawaban sebagai 'Terverifikasi', memberikan kepastian kebenaran materi"
          />
          <CardFeature
            title="Notifikasi Real-Time"
            deskripsi="Dapatkan pemberitahuan langsung ketika thread Anda dibalas, di-mention (@nama), atau mendapatkan like"
          />
          <CardFeature
            title="Materi Pembelajaran Resmi"
            deskripsi="Dosen bisa mengunggah materi perkuliahan (PDF, video, slide) ke thread khusus"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
