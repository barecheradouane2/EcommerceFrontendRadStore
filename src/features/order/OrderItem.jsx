import { Trash } from "lucide-react";
import { useState } from "react";
import { useOrdersItem } from "../../Context/OrdersItemContext";

function OrderItem({ order }) {
  const [count, setcount] = useState(1);

  const { ordersItem, toggleOrder,updateOrder  } = useOrdersItem();

  /* i should handle the max that can order ??*/ 
  const handleIncrement = () => {

   
   
    
    updateOrder({ ...order, quantity: count +1  });
  

    setcount(count + 1);

    
  };


  const handleDecrement = () => {
    if (count === 1) return;
   
    updateOrder({ ...order, quantity: count -1 });
    setcount(count - 1);
    
  };

  const handleDelete = () => {
  
    console.log({...order});

 //  ordersItem.filter((item) => item.id !== order.id);
    toggleOrder({...order});
    

  
  };



  return (
    <div className=" flex flex-col gap-2">
      <div className="flex gap-3  justify-between">
        <div className="h-[80px ] w-[80px] ">
          <img src={order.images[0]} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex-1 ">
          <h3 className="">{order.name}</h3>
          <span>
            Unit Price : <span className=" text-gray-800 font-semibold">{order.Newprice}.00 DZD</span>
          </span>
         
        </div>
        <div>
          <span className="font-semibold" >
            {count * order.Newprice}.00 DZD
          </span>
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
          <Trash className="text-red-700 "  onClick={()=>handleDelete()}  size={16} />
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
