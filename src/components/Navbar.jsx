import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Search } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { CircleX } from "lucide-react";
import OrderItem from "../features/order/OrderItem";

const Navbar = ({likedProductsCount}) => {
  const [showMenu, setShowMenu] = useState(false);

  const [showcart, setshowcart] = useState(false);

  const navlinks = [
    {
      url: "/",

      lable: "Home",
    },
    {
      url: "/Categories",

      lable: "Categories",
    },
    {
      url: "/Ordertracking",

      lable: "Order tracking",
    },
  ];

  const Products = [
    {
      id: 1,
      name: "S-530",
      oldPrice: 3500,
      Newprice: 2800,
      image: "/s530.png",
      hoverImage: "/s530back.png",
    },
    {
      id: 1,
      name: "S-530",
      oldPrice: 3500,
      Newprice: 2800,
      image: "/s530.png",
      hoverImage: "/s530back.png",
    },
    {
      id: 1,
      name: "S-530",
      oldPrice: 3500,
      Newprice: 2800,
      image: "/s530.png",
      hoverImage: "/s530back.png",
    },
    {
      id: 1,
      name: "S-530",
      oldPrice: 3500,
      Newprice: 2800,
      image: "/s530.png",
      hoverImage: "/s530back.png",
    },
  ];

  const orders = [
    {
      id: 1,
      name: "S-530",
      Newprice: 2800,
      image: "/s530.png",

      quantity: 1,
    },

    {
      id: 1,
      name: "S-530",
      Newprice: 2800,
      image: "/s530.png",

      quantity: 1,
    },
    {
      id: 1,
      name: "S-530",
      Newprice: 2800,
      image: "/s530.png",

      quantity: 1,
    },
    {
      id: 1,
      name: "S-530",
      Newprice: 2800,
      image: "/s530.png",

      quantity: 1,
    },
  ];

  return (
    <nav className="  fixed top-0 left-0 w-full z-50 px-4   lg:px-30 flex justify-between items-center py-3 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">RadStore</h1>

      <div className=" flex gap-8 items-center max-sm:hidden max-md:show">
        {navlinks.map((link) => (
          <Link
            to={link.url}
            key={link.lable}
            className="flex items-center gap-4 uppercase"
          >
            <p>{link.lable}</p>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />

        <div className=" relative cursor-pointer">
          <Link  to='/whishlist'> <Heart /> </Link> 
          <div className="absolute  text-xs -top-3 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
            {likedProductsCount}
          </div>
        </div>

        <div className=" relative cursor-pointer">
          <ShoppingCart onClick={() => setshowcart(!showcart)} />
          <div className="absolute text-xs -top-3 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
            0
          </div>
        </div>

        <div className="md:hidden mx-4 cursor-pointer  ">
          <AlignJustify onClick={() => setShowMenu(!showMenu)} />

          {showMenu && (
            <div className=" flex flex-col items-center gap-10 w-screen h-screen  absolute top-18 right-0 bg-gray-200 shadow-xl p-4">
              {navlinks.map((link) => (
                <Link
                  to={link.url}
                  key={link.lable}
                  className="flex  items-start items-center gap-8 uppercase"
                >
                  <p>{link.lable}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {showcart && (
        <div
          className={`absolute top-0 right-0 w-[350px] h-[100vh] p-5 flex flex-col gap-4 bg-main-100 transition-all duration-500 ease-in-out ${
            showcart ? "right-0" : "right-[-350px]"
          }`}
        >
          <div className="flex justify-between items-center   border-b-1 border-black pb-1">
            <h3 className="text-xl  font-semibold">Your Cart</h3>
            <button className=" mb-2 cursor-pointer px-2 py-1 rounded mt-4">
              {" "}
              <CircleX onClick={() => setshowcart(!showcart)} />
            </button>
          </div>
          <div className="flex  flex-1 flex-col gap-3 overflow-y-auto">
            {orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </div>

          <div className="flex flex-col gap-2 border-t-1 border-black pt-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl  font-semibold">Total</h3>
              <strong>2800 DZD</strong>
            </div>

            <button className="bg-third-100 cursor-pointer text-white px-4 py-2 rounded animate-shake-x">
              Order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
