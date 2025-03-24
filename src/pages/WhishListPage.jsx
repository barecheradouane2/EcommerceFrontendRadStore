import React from "react";
import ProductCard from "../features/product/ProductCard";
import { useLikedProducts } from "../Context/LikedProductsContext";
function WhishListPage() {
  const { likedProducts, toggleLike, isLiked } = useLikedProducts();

  const Products=[
    {
      id:1,
      name:'S-530',
      oldPrice:3500,
      Newprice:2800,
      images:[
         "/s530.png",
        "/s530back.png"
      ]
      

    }, {
      id:2,
      name:'Germanglasses',
      oldPrice:4000,
      Newprice:3500,
      images:[
       "/glassesfront.png",
       "/glassesback.png"
      ]
    

    }, {
      id:3,
      name:'Appel watch',
      oldPrice:8500,
      Newprice:6800,
      images:[
       "/watchappelfront.jpg",
        "/watchappelback.jpg"
      ]
      

    }, {
      id:4,
      name:'Sprint jaket',
      oldPrice:4500,
      Newprice:3800,
      images:[
        "/sprintjaket1.png",
       "/sprintjaket2.png",
       "/sprintjaket3.png",
       "/sprintjaket4.png"
      ]

    }

  ]

  const ProductsLikes = Products.filter((product) =>
    likedProducts.includes(product.id)
  );

  return (
    <>
    {
      ProductsLikes.length===0 ? ( 
      <h1 className="text-4xl mt-[100px] font-bold mt-10">No Product Liked yet</h1>) :(

        <div className="flex  mt-[100px]  justify-between items-center flex-wrap gap-10">
        {ProductsLikes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

       )
    }
     
    </>
  );
}

export default WhishListPage;
