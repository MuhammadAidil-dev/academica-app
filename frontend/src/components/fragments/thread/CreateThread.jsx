import Editor from '../editor/Editor';

const CreateThread = ({ isOpen, closeModal }) => {
  return (
    <div
      className={`fixed inset-y-0 inset-x-0 bg-black bg-opacity-50 z-50 justify-center items-center ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-white w-[80%] max-w-[700px] p-4 rounded-sm relative">
        <h3 className="text-lg font-semibold text-primary border-b border-b-black pb-2">
          Buat Diskusi Baru
        </h3>
        <Form closeModal={closeModal} />
      </div>
    </div>
  );
};

const Form = ({ closeModal }) => {
  return (
    <form className="flex flex-col gap-8 mt-4">
      <div className="flex-1 flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-semibold text-dark">
          Judul Pertanyaan
        </label>
        <input
          id="title"
          type="text"
          className="focus:outline-none border border-slate-300 py-2 px-4 text-sm text-dark focus:border-primary transition-colors"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <label htmlFor="editor" className="text-sm font-semibold text-dark">
          Uraian Pertanyaan
        </label>
        <Editor />
        <p className="text-[10px] text-dark">
          Uraikan lebih jelas pertanyaan anda pada kolom ini. Anda juga bisa
          menambahkan gambar, tautan, dan lain lain
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <label htmlFor="keyword" className="text-sm font-semibold text-dark">
          Kata Kunci
        </label>
        <input
          id="keyword"
          type="text"
          className="focus:outline-none border border-slate-300 py-2 px-4 text-sm text-dark focus:border-primary transition-colors"
        />
        <p className="text-[10px] text-dark">
          Anda bisa menambahkan kata kunci disini, gunakan koma sebagai tanda
          pemisah. Maksimal 6 kata kunci yang bisa ditambahkan
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="bg-primary text-white font-semibold text-xs py-2 px-4 w-32 cursor-pointer"
        >
          Buat Diskusi
        </button>
        <button
          onClick={closeModal}
          type="button"
          className="bg-red-700 text-white font-semibold text-xs py-2 px-4 w-32 cursor-pointer hover:bg-red-900 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default CreateThread;
