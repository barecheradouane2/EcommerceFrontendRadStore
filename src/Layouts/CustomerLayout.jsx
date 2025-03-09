
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const CustomerLayout = () => {
    return (
      <div className=" px-4 lg:px-16 ">
        <Navbar />
        <main className="container mx-auto ">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

export default CustomerLayout
