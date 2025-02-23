import DecorativeElement from '../../../components/elements/DecorativeElement';

const AboutSection = () => {
  return (
    <section className="relative h-screen flex items-center w-full">
      <div className="flex flex-col px-[5%] sm:flex-row">
        <div className="flex-1">
          <img
            src="/assets/academica.png"
            alt="academica logo"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <h3 className="text-xl font-semibold text-primary lg:text-3xl">
            Tentang Academica
          </h3>
          <p className="text-sm text-dark lg:text-base">
            <span className="font-semibold text-primary">Academica</span> adalah
            platform forum diskusi online yang dirancang khusus untuk mahasiswa,
            dosen, dan akademisi. Dengan fitur-fitur seperti diskusi
            terstruktur, jawaban terverifikasi oleh dosen, dan notifikasi
            real-time, Academica memudahkan pengguna untuk belajar, berdiskusi,
            dan berkembang bersama.
          </p>
          <h4 className="text-xl font-semibold text-primary lg:text-3xl">
            Mengapa Memilih Academica?
          </h4>
          <ul className="flex flex-col">
            <li className="flex gap-2 items-center text-sm before:content-[''] before:w-2 before:h-2 before:bg-primary before:block before:rounded-full lg:text-base">
              <span className="font-semibold text-primary">Terpercaya: </span>
              Jawaban diverifikasi oleh ahli
            </li>
            <li className="flex gap-2 items-center text-sm before:content-[''] before:w-2 before:h-2 before:bg-primary before:block before:rounded-full lg:text-base">
              <span className="font-semibold text-primary">
                Mudah digunakan:{' '}
              </span>
              Antarmuka ramah pengguna
            </li>
            <li className="flex gap-2 items-center text-sm before:content-[''] before:w-2 before:h-2 before:bg-primary before:block before:rounded-full lg:text-base">
              <span className="font-semibold text-primary">Gratis: </span>Akses
              penuh tanpa biaya
            </li>
          </ul>
        </div>
      </div>

      <DecorativeElement />
    </section>
  );
};

export default AboutSection;
