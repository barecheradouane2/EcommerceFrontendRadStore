import { createContext, useState, useEffect, useContext } from "react";

const OrdersItemContext = createContext();

export const OrdersItemProvider = ({ children }) => {
  const [ordersItem, setOrdersItem] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ordersItem")) || [];
    setOrdersItem(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("ordersItem", JSON.stringify(ordersItem));
  }, [ordersItem]);


  const updateOrder = (newItem) => {
    setOrdersItem((prev) => {
      const index = prev.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );
  
      if (index !== -1) {
        // Update existing item
        const updated = [...prev];
        updated[index] = { ...updated[index], ...newItem };
        return updated;
      } else {
        // Add new item
        return [...prev, newItem];
      }
    });
  };
  

  const toggleOrder = (newItem) => {
    setOrdersItem((prev) => {
      const exists = prev.some(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color 
      );

      if (exists) {
        return prev.filter(
          (item) =>
            !(
              item.id === newItem.id &&
              item.size === newItem.size &&
              item.color === newItem.color 
            )
        );
      } else {
        return [...prev, newItem];
      }
    });
  };

  const deleteOrder = (targetItem) => {
    setOrdersItem((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === targetItem.id &&
            item.size === targetItem.size &&
            item.color === targetItem.color
          )
      )
    );
  };
  

  const isOrdered = (id, size, color) =>
    ordersItem.some(
      (item) => item.id === id && item.size === size && item.color === color
    );

  return (
    <OrdersItemContext.Provider value={{ ordersItem,updateOrder,deleteOrder, toggleOrder, isOrdered }}>
      {children}
    </OrdersItemContext.Provider>
  );
};

export const useOrdersItem = () => useContext(OrdersItemContext);
