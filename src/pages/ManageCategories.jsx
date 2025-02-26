import { useState } from "react";
import Modal from "../components/Modal";
import AddCategorie from "../features/Categorie/AddCategorie";

function ManageCategories() {
  const [showModal, setShowModal] = useState(false);

  const categorieslist = [
    {
      id: 1,
      name: "T-shirts",
      description: "Casual and comfortable T-shirts for everyday wear.",
      products: [
        {
          id: 1,
          name: "Cotton T-shirt",
          image:
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
    },
    {
      id: 2,
      name: "Jeans",
      description: "Stylish and durable jeans for men and women.",
      products: [],
    },
    {
      id: 3,
      name: "Shoes",
      description: "Comfortable and trendy shoes for all occasions.",
      products: [
        {
          id: 1,
          name: "Running Shoes",
          image:
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
    },
  ];

  return (
    <div>
      <dir className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-semibold">Categories</h1>
          <button
            className=" cursor-pointer  bg-nine text-sm
 text-third-100 font-normal px-2 rounded-full " 
          >
            {categorieslist.length} category
          </button>
        </div>

        <div>
          <button
            onClick={() => setShowModal(true)}
            className=" cursor-pointer  bg-second-100 text-black font-semibold py-1 px-4 rounded-full"
          >
            + Category
          </button>
        </div>
      </dir>

      <div className="overflow-auto">
        <table className="   border-collapse w-full">
          <thead>
            <tr className="bg-main-100 border-b border-gray-200">
              <th className="px-4 py-2 text-small-100 ">Rank</th>
              <th className="px-4 py-2 text-small-100  ">Category</th>
              <th className="px-4 py-2 text-small-100  ">Products</th>
              <th className="px-4 py-2 text-small-100 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categorieslist.map((category, index) => (
              <tr
                key={category.id}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">
                  <ul className="list-disc  flex    items-center gap-2">
                    {
                      category.products.map((product) => (
                       
                        <img
                          key={product.id} // Move key to the outermost element
                          className="cursor-pointer inline-block size-10 rounded-full ring-2 ring-white"
                          src={product.image}
                          alt={product.name} // Add an alt text for accessibility
                        />
                       
                      )
                    )}

                    <div className=" bg-nine font-bold text-third-100 flex items-center justify-center cursor-pointer  size-10 rounded-full ring-2 ring-white">
                    {category.products.length}
                    </div>
                  </ul>
                </td>
                <td className="px-4 py-2 flex justify-end items-center  ">
                  <button className="bg-five-100 text-white cursor-pointer font-semibold py-1 px-7  rounded-lg mr-2">
                    View
                  </button>
                  <button className="bg-six-100 text-white  cursor-pointer font-semibold py-1 px-7 rounded-lg mr-2">
                    Edit
                  </button>
                  <button className="bg-seven-100 text-red-700  cursor-pointer font-semibold py-1 px-7 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center font-bold text-small-100 items-center mt-2">
        A list of your recent invoices.
      </div>

      {showModal && (
        <Modal
          isOpen={showModal} // Pass isOpen to control visibility
          onClose={() => setShowModal(false)}
          title="Add Category"
        >
          <AddCategorie />
        </Modal>
      )}
    </div>
  );
}

export default ManageCategories;
