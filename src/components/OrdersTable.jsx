
function OrdersTable({ thlist, bodylist }) {
    return (
      <div className="overflow-auto">
        <table className="   border-collapse w-full mt-7">
          <thead>
            <tr className="bg-main-100 border-b border-gray-200">
              {thlist.map((th, index) => (
                <td key={index} className="px-2 py-2 text-small-100 font-bold  ">
                  {th}
                </td>
              ))}
  
              <th className="px-2 py-2 text-small-100 font-bold  ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bodylist.map((body, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                {
                   body.map((item, index) => (
                    <td key={index} className="px-4 py-2">
                      {item}
                    </td>
                   ))
                }
  
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
    );
  }
  
  export default OrdersTable
  
