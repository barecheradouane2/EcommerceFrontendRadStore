import { useState } from "react";
import AdminPageHeader from "../components/AdminPageHeader";
import OrdersCards from "../components/OrdersCards";
import OrdersTable from "../components/OrdersTable";
import OrderCardInfo from "../components/OrderCardInfo";
function ManageOrders() {
  const [showModal, setShowModal] = useState(false);

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
    <>
      <AdminPageHeader
        Title="Order"
        setShowModal={setShowModal}
        ShowLengthButtonInfo={OrdersList.length}
        CreateButtonInfo="Create Order"
      />

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

      <div className="relative max-w-sm mt-5">
      <input type="date" className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500" />

      </div>

      <OrdersTable
        thlist={[
          "Order ID",
          "Customer Name",
          "Total Amount",
          "Status",
          "Delivery Date",
          "Shipping Address",
        ]}
        bodylist={OrdersList.map((order) => [
          order.OrderID,
          order.CustomerName,

          order.TotalAmount,
          order.Status,

          order.DeliveryDate,
          order.ShippingAddress,
        ])}
      />
    </>
  );
}

export default ManageOrders;
