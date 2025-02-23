const DecorativeElement = () => {
  return (
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
  );
};

export default DecorativeElement;
