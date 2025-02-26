function AddCategorie() {
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="CategoryName"
            type="text"
            placeholder="Category Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Description"
            type="text"
            placeholder="Description"
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="bg-third-100  cursor-pointer text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
           + Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategorie;
