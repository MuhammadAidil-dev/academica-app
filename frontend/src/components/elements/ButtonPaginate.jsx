const ButtonPaginate = ({ value }) => {
  return (
    <a
      href="/"
      className="bg-primary text-white text-xs font-semibold rounded-sm w-6 h-6 flex items-center justify-center cursor-pointer"
    >
      {value}
    </a>
  );
};

export default ButtonPaginate;
