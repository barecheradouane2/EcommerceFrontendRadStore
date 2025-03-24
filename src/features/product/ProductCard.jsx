import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from "react";
import { useLikedProducts } from "../../Context/LikedProductsContext";

function ProductCard({ product }) {

  const {  toggleLike, isLiked } = useLikedProducts();

 // const [isliked, setIsLiked] = useState(false);


  return (
    <div  className="bg-red-500 overflow-hidden group relative  min-w-[250px] flex-1">
      <div className="bg-white shadow h-[380px] rounded-lg overflow-hidden relative">
        
        {/* First Image (Default) */}

        <Link to={`/product/${product.id}`} className="w-full" >
        <img
          src={product.images[0]}
          alt="product"
          className=" w-full h-[250px] object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />

        {/* Second Image (Shown on Hover) */}
        <img
          src={product.images[1]}
          alt="product-hover"
          className="w-full h-[250px] object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
        />

        </Link>

        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-gray-500 text-xl font-medium flex justify-center">
            {product.name}
          </h3>

          <div className="flex items-center justify-center gap-2">
            <span className="line-through font-medium text-small-100">
              {product.oldPrice} DZD
            </span>
            <span className="font-medium text-third-100">
              {product.Newprice} DZD
            </span>
          </div>

          <button className="ml-auto w-full hover:bg-third-100 transition duration-500 cursor-pointer text-black group-hover:bg-gray-800 group-hover:text-white px-2 py-1 rounded">
            Buy
          </button>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 z-10 left-2 bg-third-100 text-white px-2 py-1 rounded-full">
          {Math.round(((product.oldPrice - product.Newprice) / product.oldPrice) * 100)} %
        </div>

        {/* Action Buttons */}


        {
          isLiked (product.id) ? (
            <div className="absolute top-3 z-10 right-2 bg-white cursor-pointer p-2 rounded-full flex items-center justify-center">
              <Heart className="text-third-100" onClick={() => toggleLike(product.id)} />
            </div>
          )  :(
            <div className="absolute top-3 z-10 right-[-70px] group-hover:right-2 transition-all duration-500 ease-in-out flex flex-col gap-2">
            <div className="bg-white cursor-pointer p-2 rounded-full flex items-center justify-center">
              <Heart className="hover:text-third-100 "  onClick={()=>toggleLike(product.id)}/>
            </div>
            <div className="bg-white cursor-pointer p-2 rounded-full flex items-center justify-center">
              <ShoppingCart className="hover:text-third-100" />
            </div>
          </div>

          )
        }




      

      </div>
    </div>
  );
}

export default ProductCard;
