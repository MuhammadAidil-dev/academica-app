import { CiLock } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';

const LoginSection = () => {
  return (
    <div className="bg-white p-6 flex flex-col rounded-sm items-center max-w-[450px]">
      <h3 className="text-lg font-semibold text-primary">Masuk Academica</h3>
      <p className="text-xs text-dark text-center mt-2">
        Lanjutkan perjalanan belajarmu dengan bergabung ke forum diskusi terbaik
      </p>
      <form className="flex flex-col w-full my-4 gap-4">
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
        <div className="flex items-center justify-between border-b border-b-slate-300 pb-4">
          <button
            type="submit"
            className="bg-primary py-2 px-4 font-semibold text-white text-xs rounded-sm cursor-pointer"
          >
            Masuk
          </button>
          <a
            href="/forgot-password"
            className="cursor-pointer text-xs text-dark"
          >
            Lupa Password?
          </a>
        </div>
      </form>
      <p className="text-xs text-dark">
        Belum punya akun? Daftar{' '}
        <a
          href="/register"
          className="text-primary cursor-pointer font-semibold"
        >
          disini
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
    </div>
  );
};

export default LoginSection;
