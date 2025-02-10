const QuestionSection = () => {
  const listQuestion = [
    {
      title: 'Apa Itu Academica?',
      content:
        'Academia adalah platform forum diskusi online yang dirancang khusus untuk mahasiswa, dosen, dan akademisi lainnya. Tujuannya adalah memfasilitasi diskusi akademis yang terstruktur, interaktif, dan bermanfaat',
    },
    {
      title: 'Siapa saja yang bisa bergabung?',
      content:
        'Semua orang bisa bergabung, termasuk mahasiswa, dosen, alumni, dan bahkan pelajar SMA yang tertarik dengan pembelajaran akademis.',
    },
    {
      title: 'Kenapa harus Academia?',
      content:
        'Academia menyediakan forum diskusi terstruktur, jawaban terverifikasi oleh dosen, dan notifikasi real-time untuk memudahkan belajar, berdiskusi, dan berkembang bersama.',
    },
    {
      title: 'Apakah forum ini gratis?',
      content: 'Ya, forum ini sepenuhnya gratis untuk digunakan.',
    },
    {
      title: 'Apa saja fitur unggulan forum ini?',
      content:
        'Diskusi terstruktur berdasarkan kategori dan tag, Jawaban terverifikasi oleh dosen, Notifikasi real-time untuk aktivitas thread, Unggah materi pembelajaran resmi.',
    },
  ];

  const Accordion = ({ title, content }) => {
    return (
      <details className="p-2 border-b border-b-dark border-opacity-20">
        <summary className="text-sm font-semibold text-primary md:text-base lg:text-lg">
          {title}
        </summary>
        <p className="text-xs text-dark mt-2 text-justify lg:text-sm">
          {content}
        </p>
      </details>
    );
  };

  return (
    <div className="bg-background py-8 px-[5%] flex flex-col pb-10">
      <div className="flex flex-col gap-2 lg:mt-12">
        <h3 className="text-xl font-semibold text-primary text-center md:text-2xl lg:text-3xl">
          Kami Dengar Pertanyaanmu – Ini Jawabannya!
        </h3>
        <p className="text-sm text-dark text-center md:text-base lg:text-lg">
          Lihat daftar pertanyaan yang paling sering diajukan oleh pengguna lain
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:mt-12 md:items-center">
        <div className="flex-1 p-4">
          <img src="/assets/question-image.png" alt="question-image" />
        </div>
        <div className="flex-1 bg-white rounded-sm shadow-md p-4 flex flex-col gap-4 md:h-[90%]">
          {listQuestion.map((data, index) => {
            return (
              <Accordion
                key={index}
                title={data.title}
                content={data.content}
              />
            );
          })}
          <a
            href="/faq"
            className="text-xs text-primary flex justify-end cursor-pointer mt-2"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
