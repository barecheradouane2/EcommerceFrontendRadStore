import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Search } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4   lg:px-16 flex justify-between items-center py-3 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">RadStore</h1>

      <div className=" flex gap-8 items-center max-sm:hidden max-md:show">
      

        {
          navlinks.map((link) => (
            <Link
              to={link.url}
              key={link.lable}
              className="flex items-center gap-4 uppercase"
            >
              <p>{link.lable}</p>
            </Link>
          ))
        }



      </div>

      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />

        <div className=" relative cursor-pointer">
          <Heart />
          <div className="absolute  text-xs -top-3 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
            0
          </div>
        </div>

        <div className=" relative cursor-pointer">
          <ShoppingCart />
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
    </nav>
  );
};

export default Navbar;
