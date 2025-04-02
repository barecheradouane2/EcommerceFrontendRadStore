
import React from 'react'
import OrderItem from '../features/order/OrderItem'
import { CircleX } from "lucide-react";
import { useState } from "react";
import { ShoppingBag } from 'lucide-react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';




function OrderitemsCart({orders,showcart,setshowcart}) {
    
    //const Price = orders.reduce((acc, order) => acc + order.Newprice * order.quantity, 0);

    const [TotalPrice, setTotalPrice] = useState(orders.reduce((acc, order) => acc + order.Newprice * order.quantity, 0));


    useEffect(() => {
      const total = orders.reduce((acc, order) => acc + order.Newprice * order.quantity, 0);
      setTotalPrice(total);
    }, [orders]); // 👈 triggers when orders change
    

  //   const handletotalprice = () => {
  //       const Price = orders.reduce((acc, order) => acc + order.Newprice * order.quantity, 0);
  //         console.log(Price);
  //       setTotalPrice(orders.reduce((acc, order) => acc + order.Newprice * order.quantity, 0));
  //  }

  



    return (
        <div
        className={`absolute top-0 right-0 w-[350px] h-[100vh] p-5 flex flex-col gap-4 bg-main-100 transition-all duration-500 ease-in-out ${
          showcart ? "right-0" : "right-[-350px]"
        }`}
      >
        <div className="flex justify-between items-center   border-b-1 border-small-100 pb-1">
          <h3 className="text-xl  font-semibold">Your Cart</h3>
          <button className=" mb-2 cursor-pointer px-2 py-1 rounded mt-4">
            {" "}
            <X onClick={() => setshowcart(!showcart)} />
          </button>
        </div>
        <div className="flex  flex-1 flex-col gap-3 overflow-y-auto">
          {

            orders.length === 0 ? (
              <div className="flex flex-col justify-start items-center h-full gap-2">
                <ShoppingBag size={50} color=" #aba9a9"   />
                <h3 className="text-xl font-semibold text-small-100">Your Cart is empty</h3>
              </div>
            ) : (

              orders.map((order) => (
                <OrderItem key={order.id} order={order}  />
              ))

            )
          
          
          
          
          }
        </div>

        {
          orders.length !== 0 && (
            <div className="flex flex-col gap-2 border-t-1 border-small-100 pt-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xl  font-semibold">Total</h3>
            <strong>{TotalPrice} DZD</strong>
          </div>

          <Link  to="/checkout" className="bg-third-100  flex justify-center items-center  cursor-pointer text-white px-4 py-2 rounded animate-shake-x">
            

            
            Order
          </Link>
        </div>

          )
        }

        
      </div>
    )
}

export default OrderitemsCart
