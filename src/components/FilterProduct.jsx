function FilterProduct() {
  return (
    <div className="bg-main-100 mt-4 p-4   flex flex-wrap justify-between">
      <div className="max-w-full">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Category
        </label>

        <div className="inline-block relative w-70 ">
          <select className="block rounded-2xl appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>
              All Collection
            </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-full rounded-md ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Price
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl py-2 px-4 pr-19 mb-3 leading-tight focus:outline-none "
          id="grid-first-name"
          type="text"
          placeholder="Price"
        />
      </div>

      <div className="">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Stock
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-2xl py-2 px-4 pr-19 mb-3 leading-tight focus:outline-none "
          id="grid-first-name"
          type="text"
          placeholder="Stock"
        />
      </div>

      <div className="">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          More Filter
        </label>

        <div className="inline-block relative w-64">
          <select className="block   rounded-2xl appearance-none w-full bg-gray-200 text-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>
              All Collection
            </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative mt-4 w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full  px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Products "
          required
        />
      </div>
    </div>
  );
}

export default FilterProduct;
