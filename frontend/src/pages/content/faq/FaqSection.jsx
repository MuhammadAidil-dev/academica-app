import Accordion from '../../../components/elements/Accordion';

const FaqSection = () => {
  return (
    <section className="bg-white flex flex-col py-6 px-[5%]">
      <KategoriSection />
      <QuestionSection />
    </section>
  );
};

const KategoriSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold text-primary border-b border-b-slate-300 w-full text-center pb-1">
        Kategori Pertanyaan
      </h3>
      <div className="grid grid-cols-1 mt-4 gap-4 w-full place-items-center md:grid-cols-3">
        <button
          type="button"
          className="bg-white rounded-sm shadow-md flex justify-center items-center p-4 text-sm font-semibold text-dark cursor-pointer w-[80%] md:w-full"
        >
          Registrasi & akun
        </button>
        <button
          type="button"
          className="bg-white rounded-sm shadow-md flex justify-center items-center p-4 text-sm font-semibold text-dark cursor-pointer w-[80%] md:w-full"
        >
          Fitur & Penggunaan
        </button>
        <button
          type="button"
          className="bg-white rounded-sm shadow-md flex justify-center items-center p-4 text-sm font-semibold text-dark cursor-pointer w-[80%] md:w-full"
        >
          Keamanan & Privasi
        </button>
      </div>
    </div>
  );
};

const QuestionSection = () => {
  const listCommonQuestion = [
    {
      title: 'Bagaimana cara membuat thread baru?',
      content:
        'Setelah login, klik tombol "Buat Thread" di halaman kategori yang sesuai, isi judul dan konten, lalu pilih tag yang relevan',
    },
    {
      title: 'Bagaimana cara mendaftar di Academia?',
      content:
        'Klik tombol "Daftar", isi formulir registrasi, dan verifikasi email kamu',
    },
    {
      title: 'Apa itu "Jawaban Terverifikasi"?',
      content:
        'Jawaban yang telah ditandai oleh dosen sebagai akurat dan bisa diandalkan.',
    },
    {
      title: 'Apa saja fitur unggulan Academia?',
      content:
        'Diskusi terstruktur, Jawaban terverifikasi oleh dosen, Notifikasi real-time, Unggah materi pembelajaran resmi',
    },
  ];

  return (
    <div className="flex flex-col mt-12">
      <h3 className="text-lg font-semibold text-primary border-b border-b-slate-300 w-full text-center pb-1">
        Pertanyaan Umum
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        {listCommonQuestion.map((data, index) => {
          return (
            <Accordion key={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
