import { CiLock } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const RegisterSection = () => {
  return (
    <div className="bg-white p-6 flex flex-col rounded-sm items-center max-w-[450px]">
      <h3 className="text-lg font-semibold text-primary">
        Daftar Ke Academica
      </h3>
      <p className="text-xs text-dark text-center mt-2">
        Bergabunglah dengan mahasiswa lainnya dan dosen dalam forum diskusi
        terbaik
      </p>
      <form className="flex flex-col w-full my-4 gap-4">
        <div className="flex w-full bg-background shadow-md py-2 px-4 items-center gap-2">
          <FaRegUser className="text-xl opacity-50" />
          <input
            type="text"
            className="focus:outline-none bg-transparent text-xs text-primary w-full"
            placeholder="Nama Lengkap"
            autoComplete="off"
          />
        </div>
        <div className="flex w-full bg-background shadow-md py-2 px-4 items-center gap-2">
          <MdOutlineEmail className="text-xl opacity-50" />
          <input
            type="email"
            className="focus:outline-none bg-transparent text-xs text-primary w-full"
            placeholder="Email Anda"
            autoComplete="off"
          />
        </div>
        <div className="flex w-full bg-background shadow-md py-2 px-4 items-center gap-2">
          <CiLock className="text-xl opacity-50" />
          <input
            type="password"
            className="focus:outline-none bg-transparent text-xs text-primary w-full"
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <div className="flex w-full bg-background shadow-md py-2 px-4 items-center gap-2">
          <CiLock className="text-xl opacity-50" />
          <input
            type="password"
            className="focus:outline-none bg-transparent text-xs text-primary w-full"
            placeholder="Confirm Password"
            autoComplete="off"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="text-xs text-dark">
            Saya menyetujui Syarat & Ketentuan
          </label>
        </div>
        <button
          type="submit"
          className="text-start w-20 flex justify-center items-center bg-primary py-2 px-4 font-semibold text-white text-xs rounded-sm cursor-pointer"
        >
          Daftar
        </button>
        <hr />
        <p className="text-xs text-dark text-center">
          Sudah punya akun? Masuk{' '}
          <a
            href="/login"
            className="text-primary cursor-pointer font-semibold"
          >
            Disini
          </a>
        </p>
        <div className="flex items-center w-full mt-4 gap-4">
          <a
            href="/kebijakan-privasi"
            className="text-[10px] text-dark cursor-pointer"
          >
            Kebijakan Privasi
          </a>
          <a
            href="/kebijakan-privasi"
            className="text-[10px] text-dark cursor-pointer"
          >
            Syarat & Ketentuan
          </a>
          <a href="/" className="text-[10px] text-dark cursor-pointer">
            Beranda
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterSection;
