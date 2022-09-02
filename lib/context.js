import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantitites] = useState(0);

  //Increase Product quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease Product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 0;
      return prevQty - 1;
    });
  };

  //Add Product To Cart
  const onAdd = (product, quantity) => {
    //Total Price
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.attributes.price * quantity
    );

    //Increase total quantity
    setTotalQuantitites(
      (prevTotalQuantities) => prevTotalQuantities + quantity
    );

    //Check if product is in the cart
    const exist = cartItems.find(
      (item) => item.attributes.slug === product.attributes.slug
    );
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.attributes.slug === product.attributes.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove product
  const onRemove = (product) => {
    //Set Total Price
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - product.attributes.price
    );

    //Remove from total quantities
    setTotalQuantitites((prevTotalQuantities) => prevTotalQuantities - 1);

    //Check if product exists
    const exist = cartItems.find(
      (item) => item.attributes.slug === product.attributes.slug
    );
    if (exist.quantity === 1) {
      setCartItems(
        cartItems.filter(
          (item) => item.attributes.slug !== product.attributes.slug
        )
      );
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.attributes.slug === product.attributes.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        onAdd,
        setCartItems,
        cartItems,
        onRemove,
        totalQuantities,
        totalPrice,
        setQty,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
