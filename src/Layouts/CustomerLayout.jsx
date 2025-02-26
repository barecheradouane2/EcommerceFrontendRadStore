
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const CustomerLayout = () => {
    return (
      <div>
        <Navbar />
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

export default CustomerLayout
