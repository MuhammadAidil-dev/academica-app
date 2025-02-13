const AuthenticateLayout = ({ children }) => {
  return (
    <div className="bg-primary w-full h-screen flex">
      <div className="flex-1 hidden lg:block">
        <img
          src="/assets/join-us-image.png"
          alt="join us image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-1 flex justify-center items-center px-8">
        {children}
      </div>
    </div>
  );
};

export default AuthenticateLayout;
