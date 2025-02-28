import Avatar from "./Avatar";

function OrderBreifTable({ thlist, bodylist }) {
  return (
    <div className="overflow-auto">
      <table className="border-collapse w-full mt-7">
        <thead>
          <tr className="bg-main-100 border-b border-gray-200">
            {thlist.map((th, index) => (
              <td key={index} className=" py-2 text-small-100 font-bold">
                {th}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodylist.map((body, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 border-b border-gray-200">
              <td className=" py-2"># {body.OrderID}</td>

              <td className="py-2 flex flex-wrap items-center gap-2">
                {body.OrderItems.map((item) => (
                  <Avatar 
                    key={item.ProductID} 
                    id={item.ProductID} 
                    url={item.images[0]?.url} 
                    name={item.ProductName} 
                  />
                ))}
              </td>

              <td className=" py-2">{body.CustomerName}</td>
              <td className=" py-2">{body.OrderDate}</td>
              <td className="py-2">{body.OrderItems.length}</td>
              <td className="= py-2">${body.TotalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderBreifTable;
