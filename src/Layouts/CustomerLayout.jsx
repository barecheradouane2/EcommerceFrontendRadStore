
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const CustomerLayout = () => {
    return (
      <div className=" px-4 lg:px-30 ">
        <Navbar />
        <main className=" ">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

export default CustomerLayout
