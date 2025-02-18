import ForumNavbar from '../../fragments/navigation/forum/ForumNavbar';

const ForumLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <ForumNavbar />
      <main className="flex flex-col mt-20">{children}</main>
    </div>
  );
};

export default ForumLayout;
