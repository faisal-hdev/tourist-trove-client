import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div>
      {/* max-w-[1240px] mx-auto max-lg:px-5 */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
