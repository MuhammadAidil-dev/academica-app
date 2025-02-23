import { Navbar } from '../fragments/navigation/Navbar';
import Footer from '../fragments/footer/Footer';
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
