import React from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  {
    /* <p className="text-center">© 2021 All rights reserved</p> */
  }
  return (
    <div>
      <div className=" border-t-1 border-black flex  flex-wrap mt-10  py-4 justify-between gap-10 ">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-black">RadStore</h1>
          <div className="text-black flex gap-0.5">
            {" "}
            <MapPin /> city soummame Alger{" "}
          </div>
          <div className="text-black flex gap-0.5">
            {" "}
            <Phone /> +231657130994{" "}
          </div>
          <div className="text-black flex gap-2">
            <Link to="https://www.facebook.com/">
              <Facebook />
            </Link>
            <Link to="https://www.instagram.com/">
              <Instagram />
            </Link>
            <Link to="https://www.gmail.com/">
              <Mail />
            </Link>
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <h1 className="text-xl font-bold text-black">Links</h1>
          <div className="text-black">Home</div>
          <div className="text-black">Shop</div>
          <div className="text-black">About</div>
          <div className="text-black">Contact</div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-black">Categories</h1>
          <div className="text-black">Clothes</div>
          <div className="text-black">Shoes</div>
          <div className="text-black">Accessories</div>
          <div className="text-black">Electronics</div>
        </div>
      </div>

      <div>
        <p className="text-center text-black">© 2021 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
