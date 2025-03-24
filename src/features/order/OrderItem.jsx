import { Trash } from "lucide-react";
import { useState } from "react";

function OrderItem({ order }) {
  const [count, setcount] = useState(1);

  /* i should handle the max that can order ??*/ 
  const handleIncrement = () => {
    setcount(count + 1);
  };


  const handleDecrement = () => {
    if (count === 1) return;
    setcount(count - 1);
  };

  return (
    <div className=" flex flex-col gap-2">
      <div className="flex gap-3  justify-between">
        <div className="h-[80px ] w-[80px] ">
          <img src={order.image} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex-1 ">
          <h3 className="font-bold">{order.name}</h3>
          <span>
            Unit Price : <span className="font-bold">{order.Newprice}</span>
          </span>
         
        </div>
        <div>
          <strong >
            {count * order.Newprice}
          </strong>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button
           onClick={() => handleDecrement()}
            className=" cursor-pointer  rounded-sm   px-2 py-1 bg-gray-300 "
          >
            -
          </button>

          <span>{count}</span>

          <button
            onClick={() => handleIncrement()}
           
            className=" cursor-pointer   rounded-sm   px-2 py-1 bg-gray-300"
          >
            +
          </button>
        </div>
        <div className="bg-red-100 p-2 cursor-pointer rounded-lg ">
          <Trash className="text-red-700 " size={16} />
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
