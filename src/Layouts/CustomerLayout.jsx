
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLikedProducts } from "../Context/LikedProductsContext";


const CustomerLayout = () => {
  const { likedProducts, toggleLike, isLiked } = useLikedProducts();
    return (
      <div className=" px-4 lg:px-30 ">
        <Navbar likedProductsCount={likedProducts.length} />
        <main className=" ">
          <Outlet className="" />
        </main>
        <Footer />
      </div>
    );
  };

export default CustomerLayout
