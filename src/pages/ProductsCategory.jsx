import { ListFilter } from "lucide-react";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import ProductCard from "../features/product/ProductCard";

function ProductsCategory() {
  const [showFilter, setShowFilter] = useState(false);

  const [checked, setchecked] = useState("All");

  const Categories = [
    {
      id: 1,
      name: "Mode Homme",

      Products: [
        {
          id: 1,
          name: "S-530",
          oldPrice: 3500,
          Newprice: 2800,
          images: ["/s530.png", "/s530back.png"],
        },
      ],
    },
    {
      id: 2,
      name: "Accessoires",
      Products: [
        {
          id: 2,
          name: "Germanglasses",
          oldPrice: 4000,
          Newprice: 3500,
          images: ["/glassesfront.png", "/glassesback.png"],
        },
      ],
    },
    {
      id: 3,
      name: "Accessoires",
      Products: [
        {
          id: 3,
          name: "Appel watch",
          oldPrice: 8500,
          Newprice: 6800,
          images: ["/watchappelfront.jpg", "/watchappelback.jpg"],
        },
      ],
    },
    {
      id: 4,
      name: "Jaket",
      Products: [
        {
          id: 4,
          name: "Sprint jaket",
          oldPrice: 4500,
          Newprice: 3800,
          images: [
            "/sprintjaket1.png",
            "/sprintjaket2.png",
            "/sprintjaket3.png",
            "/sprintjaket4.png",
          ],
        },
      ],
    },
  ];

  const allproducts = Categories.map((category) => {
    return category.Products.map((product) => {
      console.log(product);
      return product;
    });
  });

  const [allcategoriesproducts, setcategoriesproducts] = useState(Categories);

  return (
    <div className="mt-[100px] flex flex-col md:flex-row  gap-10 justify-between">
      <div className=" w-full md:w-[300px]  h-fit shadow-md">
        <div className="flex justify-between py-4 px-4 bg-main-100 items-center">
          <div className="flex items-center justify-between gap-2 ">
            <ListFilter />

            <span className="text-sm font-semibold">Filter</span>
          </div>

          <div className="cursor-pointer">
            <ChevronDown onClick={() => setShowFilter(!showFilter)} />
          </div>
        </div>

        {showFilter && (
          <div className="flex   pb-4  px-4 flex-col gap-2 mt-2">
            <h3
              className="text-lg border-b-1 py-4 border-small-100
                  "
            >
              Categories
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-semibold">Sort By:</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                onChange={(e) => {
                  const sortBy = e.target.value;

                  if (sortBy === "price_low_to_high") {
                    const ascendingorder = allcategoriesproducts.sort(
                      (a, b) => {
                        const maxPriceA = Math.max(
                          ...a.Products.map((product) => product.Newprice)
                        );
                        const maxPriceB = Math.max(
                          ...b.Products.map((product) => product.Newprice)
                        );

                        return maxPriceA - maxPriceB; // Sorting in descending order
                      }
                    );

                    setcategoriesproducts([...ascendingorder]);
                  } else if (sortBy === "price_high_to_low") {
                    const descendingorder = allcategoriesproducts.sort(
                      (a, b) => {
                        const maxPriceA = Math.max(
                          ...a.Products.map((product) => product.Newprice)
                        );
                        const maxPriceB = Math.max(
                          ...b.Products.map((product) => product.Newprice)
                        );

                        return maxPriceB - maxPriceA; // Sorting in descending order
                      }
                    );

                    setcategoriesproducts([...descendingorder]);
                  } else if (sortBy === "newest") {
                    const NewestProducts = allcategoriesproducts.sort(
                      (a, b) => {
                        const maxPriceA = Math.max(
                          ...a.Products.map((product) => product.id)
                        );
                        const maxPriceB = Math.max(
                          ...b.Products.map((product) => product.id)
                        );

                        return maxPriceA - maxPriceB;
                      }
                    );

                    setcategoriesproducts([...NewestProducts]);
                  }
                }}
              >
                <option value="popularity">Popularity</option>
                <option value="price_low_to_high">Price: Low to High</option>
                <option value="price_high_to_low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                id="All"
                type="radio"
                name="category"
                className="w-[20px] h-[20px] "
                value="All"
                checked={checked === "All"}
                onChange={() => {

               
                  setchecked("All");

                  setcategoriesproducts(Categories);
                }
                }
              />
              <label
                htmlFor="All"
                className="text-sm font-semibold hover:underline cursor-pointer"
              >
                ALL
              </label>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                id="PROMO"
                type="radio"
                name="category"
                className="w-[20px] h-[20px] "
                value="PROMO"
                checked={checked === "PROMO"}
                onChange={() => {
                  setchecked("PROMO");

                  const filteredProducts = Categories.filter((category) =>
                    category.Products.some(
                      (product) => product.Newprice - product.oldPrice < 0
                    )
                  );
                  setcategoriesproducts([...filteredProducts]);
                }}
              />
              <label
                htmlFor="PROMO"
                className="text-sm font-semibold hover:underline cursor-pointer"
              >
                PROMO
              </label>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                id="MODEHOMME"
                type="radio"
                name="category"
                className="w-[20px] h-[20px] "
                value="MODE HOMME"
                checked={checked === "Mode Homme"}
                onChange={() => {
                  setchecked("Mode Homme");

                  const filteredProducts = Categories.filter(
                    (category) => category.name === "Mode Homme"
                  );
                  setcategoriesproducts([...filteredProducts]);
                }}
              />
              <label
                htmlFor="MODEHOMME"
                className="text-sm font-semibold hover:underline cursor-pointer"
              >
                MODE HOMME
              </label>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                id="MODEFEMME"
                type="radio"
                name="category"
                className="w-[20px] h-[20px] "
                value="MODE FEMME"
                checked={checked === "Mode Femme"}
                onChange={() => {
                  setchecked("Mode Femme");

                  const filteredProducts = Categories.filter(
                    (category) => category.name === "Mode Femme"
                  );
                  setcategoriesproducts([...filteredProducts]);
                }}
              />
              <label
                htmlFor="MODEFEMME"
                className="text-sm font-semibold hover:underline cursor-pointer"
              >
                MODE FEMME
              </label>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                id="Accessoires"
                type="radio"
                name="category"
                className="w-[20px] h-[20px] "
                value="Accessoires"
                checked={checked === "Accessoires"}
                onChange={() => {
                  setchecked("Accessoires");

                  const filteredProducts = Categories.filter(
                    (category) => category.name === "Accessoires"
                  );
                  setcategoriesproducts(filteredProducts);
                }}
              />
              <label
                htmlFor="Accessoires"
                className="text-sm font-semibold hover:underline cursor-pointer"
              >
                Accessoires
              </label>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                id="MinPrice"
                type="text"
                placeholder="Max Price"
                className="border outline-none w-[100px] focus:border-third-100 px-2 py-2 text-sm "
                onChange={(e) => {
                  const minPrice = e.target.value;
                  const filteredProducts = Categories.filter((category) =>
                    category.Products.some(
                      (product) => product.Newprice >= minPrice
                    )
                  );
                  setcategoriesproducts(filteredProducts);
                }}
              />
              <input
                id="MaxPrice"
                type="text"
                placeholder="Max Price"
                className="border outline-none w-[100px] focus:border-third-100 px-2 py-2 text-sm "
                onChange={(e) => {
                  const maxPrice = e.target.value;
                  const filteredProducts = Categories.filter((category) =>
                    category.Products.some(
                      (product) => product.Newprice <= maxPrice
                    )
                  );
                  setcategoriesproducts(filteredProducts);
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex-1 md:w-2/3 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 mt-4 px-4">
        {allcategoriesproducts.map((category) => {
          return category.Products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          });
        })}
      </div>
    </div>
  );
}

export default ProductsCategory;
