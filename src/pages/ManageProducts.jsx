import { useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";

import FilterProduct from "../components/FilterProduct";
import ProductTable from "../components/ProductTable";

function ManageProducts() {
  const [showModal, setShowModal] = useState(false);

  const ProductsList = [
    {
      ProductID: 1,
      Productname: "polo",
      Description: "Casual and comfortable T-shirts for everyday wear.",
      Price: 1000,
      Discount: 10,
      Stock: 10,
      createdAt: "2021-09-01",
      CategoryName: "T-shirts",
      images: [
        {
          ImageID: 1,
          ImageOrder: 0,
          imageUrl:
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
    },
        {
            
        ProductID: 2,
        Productname: "jeans",
        Description: "Stylish and durable ",
        Price: 5000,
        Discount: 10,
        Stock: 10,
        createdAt: "2021-09-01",
        CategoryName: "jeans",
        images: [
          {
            ImageID: 1,
            ImageOrder: 0,
            imageUrl:
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],

        }

   
  ];

  return (

    <>

    <AdminPageHeader Title='Products' setShowModal={setShowModal} 
    ShowLengthButtonInfo={ProductsList.length} CreateButtonInfo='Create Product'
    
    />

    <FilterProduct/>

    <ProductTable thlist={["Rank", "Product ",  "Price", "Category",  "Stock", "Date"]}
    bodylist={ProductsList}

   
    />

    </>

    
  
  );
}

export default ManageProducts;
