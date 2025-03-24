import { useParams } from "react-router-dom";
import { useState } from "react";
import { Heart, Share2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useLikedProducts } from "../Context/LikedProductsContext";

function ProductDetails() {
  const Products = [
    {
      id: 1,
      name: "S-530",
      oldPrice: 3500,
      Newprice: 2800,
      images: ["/s530.png", "/s530back.png"],
      description:
        " The S-530 is a high-quality wireless earphone that is designed to provide you with the best audio experience. It has a long battery life and is compatible with all devices. It is perfect for listening to music, watching movies, or making calls. The S-530 is also sweatproof and waterproof, making it perfect for use during workouts or outdoor activities. It is available in a variety of colors and comes with a charging case and a USB cable. ",

      Couleur: ["Red", "Gris", "Blue"],
      Pointure: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    },
    {
      id: 2,
      name: "Germanglasses",
      oldPrice: 4000,
      Newprice: 3500,
      images: ["/glassesfront.png", "/glassesback.png"],
      description:
        "The German Glasses are a high-quality pair of sunglasses that are designed to provide you with the best protection from the sun. They are made from durable materials and have a stylish design that will make you stand out from the crowd. The German Glasses are ",

      Couleur: "",
      Pointure: "",
    },
    {
      id: 3,
      name: "Appel watch",
      oldPrice: 8500,
      Newprice: 6800,
      images: ["/watchappelfront.jpg", "/watchappelback.jpg"],
      description:
        "The Apple Watch is a smartwatch that is designed to work seamlessly with your iPhone. It has a sleek design and a range of features that make it the perfect accessory for your busy lifestyle. The Apple Watch is available in a variety of colors and styles, so you can choose the one that best suits your personal style. It is water-resistant and has a long battery life, so you can wear it all day without having to worry about charging it. The Apple Watch is perfect for tracking your fitness goals, staying connected with friends and family, and managing your schedule. ",
      Couleur: "",
      Pointure: "",
    },
    {
      id: 4,
      name: "Sprint jaket",
      oldPrice: 4500,
      Newprice: 3800,
      images: [
        "/sprintjaket1.png",
        "/sprintjaket2.png",
        "/sprintjaket3.png",
        "/sprintjaket4.jpg",
      ],
      description:
        "The Sprint Jacket is a high-quality jacket that is designed to keep you warm and dry in all weather conditions. It is made from durable materials and has a stylish design that will make you stand out from the crowd. The Sprint Jacket is perfect for outdoor activities such as hiking, camping, and skiing. It is available in a variety of colors and sizes, so you can choose the one that best suits your needs. The Sprint Jacket is also machine washable, making it easy to clean and maintain. ",
      Couleur: ["Red", "Gris", "Blue"],
      Pointure: ["M", "L", "XL", "XXL", "XXXL"],
    },
  ];

  const [count, setcount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

   const {  toggleLike, isLiked } = useLikedProducts();

  const { id } = useParams();

  const productDetails = Products.find(
    (product) => product.id === parseInt(id)
  );

  const [productimglist, setproductimglist] = useState(productDetails.images);

  const changeImage = (image) => {
    setproductimglist([
      image,
      ...productimglist.filter((img) => img !== image),
    ]);
  };

  const handleMinus =()=>{
    if(count>1){
      setcount(count-1)
    }
  }

  return (
    <div className="flex flex-col gap-10  justify-center mt-[70px]  ">
      <div className="flex flex-col md:flex-row gap-5  ">
        <div className="w-full md:w-1/2    ">
          <div className=" border h-[500px]">
            <img
              src={productimglist[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-5 border cursor-pointer">
            {productimglist.slice(1).map((image, index) => (
              <div key={index} className="w-1/4">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                  onClick={() => changeImage(image)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2  flex flex-col gap-5 ">
          <h3 className="text-2xl font-bold"> {productDetails.name} </h3>

          <div>
            <span className="text-gray-400 line-through">
              {productDetails.oldPrice} DZD
            </span>
            {"    "}
            <span className="text-xl font-bold text-third-100">
              {productDetails.Newprice} DZD
            </span>
          </div>

          <div>
            <h3 className="text-lg ">{productDetails.description}</h3>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Couleur</h3>
            <div className="flex gap-2">
           

              {
                productDetails.Couleur.map((color) => (
                  <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`py-2 px-3 w-15 h-10 flex justify-center items-center font-bold cursor-pointer 
                    ${selectedColor === color ? 'bg-third-100 text-white' : 'bg-gray-200 text-gray-700'}
                    hover:bg-third-100 hover:text-white`}
                  >
                    {color}
                  </div>
                ))
              }

            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Pointure</h3>
            <div className="flex gap-2">
              {productDetails.Pointure.map((size) => (
                <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 px-3 w-15 h-10 flex justify-center items-center font-bold cursor-pointer 
                  ${selectedSize === size ? 'bg-third-100 text-white' : 'bg-gray-200 text-gray-700'}
                  hover:bg-third-100 hover:text-white`}
              >
                {size}
              </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <span>

              {isLiked(productDetails.id) ? (
                <Heart className="text-third-100 cursor-pointer" onClick={() => toggleLike(productDetails.id)} />
              ) : (
                <Heart className="cursor-pointer" onClick={() => toggleLike(productDetails.id)} />
              )}
              
              
            </span>
            <span>Add to Favorites</span>
            <span>
              {" "}
              <Share2 className="cursor-pointer" />{" "}
            </span>
          </div>

          <div className=" flex gap-2">
            <button className="bg-gray-200 w-10 h-10 cursor-pointer flex justify-center items-center"
            
              onClick={()=> handleMinus()}
            >
              {" "}
              <Minus />
            </button>
            <button className=" ">{count}</button>
            <button
              className="bg-gray-200 w-10 h-10 cursor-pointer flex justify-center items-center"
              onClick={() => setcount(count + 1)}
            >
              {" "}
              <Plus />
            </button>
            <button className="border border-small-100 flex gap-2 cursor-pointer w-full justify-center  py-2 px-5 rounded-lg hover:bg-main-100 ">
              <ShoppingCart /> Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
