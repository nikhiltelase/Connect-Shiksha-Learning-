import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { showToast } from "../utils/toastUtils";

export const contextData = createContext(null);

function ContextApi(props) {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  async function getData() {
    const { data } = await axios.get("/data.json");
    setItems(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const addToCart = (item) => {
    let existingItem = cart.some((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      setCart([...cart, { ...item, quantity: 1 }]);
      showToast(`Successfully added ${item.name}`)
    }
    
  };

  const isItemInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  const contextValue = {
    items,
    cart,
    setCart,
    addToCart,
    isItemInCart,
  };

  return (
    <contextData.Provider value={contextValue}>
      {props.children}
    </contextData.Provider>
  );
}

export default ContextApi;
