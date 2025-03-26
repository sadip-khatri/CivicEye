import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Home/Navbar";
import { Footer } from "../../components/Home/Footer";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;