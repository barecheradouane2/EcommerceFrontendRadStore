import { LucideAArrowDown } from "lucide-react";
import { ChevronsUp } from "lucide-react";

import { LayoutDashboard } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Briefcase } from "lucide-react";
import { ChevronsDown } from "lucide-react";

function OrderCardInfo({ title, Amount, quantity,state}) {
  return (
    <div
      className={`flex  flex-1 min-w-[200px] justify-between 

         bg-linear-to-tl from-gray-200 
        ${
          title == "Total Products"
            ? "bg-vert-100 to-vert-100"
            : (title == "Total Orders"
            ? "bg-second-100 to-second-100"
            : "bg-brawn-100 to-second-100")
        }
        
      

        p-4 rounded-lg w-72
        
        `}
    >
      <div className="flex flex-col gap-2">
        <h3
          className={`text-base
            ${title == "Total Products" ? "text-white" : "text-black"}
            `}
        >
          {title}
        </h3>
        <div className="  flex gap-2">
          <span className="">
            {title == "Total Products" ? (
              <LayoutDashboard className="text-white text-[10px]" />
            ) : title == "Total Orders" ? (
              <Briefcase className="text-black" />
            ) : (
              <DollarSign className="text-black" />
            )}
          </span>

          <h1
            className={`text-4xl font-semibold
           ${title == "Total Products" ? "text-white" : "text-black"}
            
            `}
          >
            {Amount}
          </h1>
        </div>
        <p className="text-sm flex gap-1 font-semibold">
          {" "}
          <span className="flex gap-1 ">
            {
                state == "plus" ? (
                    <>
                    <ChevronsUp className="text-green-300" />
                    <span className="text-green-300">+ {quantity} %</span> 
                    </>

                ) :
                (
                    <>
                    <ChevronsDown  className="text-red-700" />
                    <span className="text-red-700"> +{quantity} %</span> 
                    </>


                )
                
                
            }
           
          
          </span>
          <span
            className={`
            ${title == "Total Products" ? "text-white" : "text-black"}`}
          >
            from the last month
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default OrderCardInfo;
