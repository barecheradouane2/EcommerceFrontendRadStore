import SellingInfoCover from "../components/SellingInfoCover";
import StorePieChart from "../components/StorePieChart";
import OrderCardInfo from "../components/OrderCardInfo";
import StoreBarChart from "../components/StoreBarChart";

const AdminDashboard = () => {
  const OrdersList = [
    {
      OrderID: 1,
      CustomerName: "John Doe",
      OrderDate: "2021-09-01",
      TotalAmount: 1000,
      Status: "Pending",
      PaymentMethod: "Cash",
      DeliveryDate: "2021-09-03",
      ShippingAddress: "123, ABC Street, XYZ City",
      OrderItems: [
        {
          ProductID: 1,
          ProductName: "polo",
          Quantity: 1,
          Price: 1000,
        },
      ],
    },
  ];
  return (
    <div className="flex justify-between gap-2 flex-wrap  ">
      <div className="flex-1">
        <SellingInfoCover />

        <div className=" flex justify-betwee mt-4">
          <div>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div></div>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <OrderCardInfo
            title="Total Products"
            Amount="100"
            quantity="35"
            state="plus"
          />
          <OrderCardInfo
            title="Revenue"
            Amount="13.456"
            quantity="35"
            state="plus"
          />
          <OrderCardInfo
            title="Total Orders"
            Amount={OrdersList.length}
            quantity="35"
            state="mins"
          />
        </div>

        <div  className="mt-8 w-full h-96">
        <StoreBarChart/>
        </div>


      </div>

      <div className="flex flex-col gap-2">
        <div className=" p-4 border border-gray-300 rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Top Categories</h1>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="w-full h-1 bg-gray-100"> </div>

            <div className="">
              <StorePieChart />
            </div>
          </div>

          <div></div>
        </div>

        <div className="flex flex-col items-center  gap-6 p-4 bg-main-100 rounded-xl">

          <div >
              <img src="../../public/townsvg.svg"  className="w-[200px]"/>
              
          </div>

          <h3 className="text-xl">Take your <strong className="text-second-100"> buisness </strong>to the next    <strong className="text-second-100 ">level</strong>    </h3> 
       
        

          <div>
          <img src="../../public/shoppingsvg.svg"  className="w-[200px]"/>
          </div>

          <button className="bg-brawn-100 text-white  cursor-pointer w-[200px] px-4 py-2">
            Visit Your Shop
          </button>



        </div>






      </div>
    </div>
  );
};

export default AdminDashboard;
