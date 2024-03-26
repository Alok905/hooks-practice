import React, { useState } from "react";

export default function ProductCard({
  id,
  name,
  price,
  inCart,
  isWishlist,
  dispatch,
}) {
  const [add, setAdd] = useState({
    cart: true,
    wishlist: true,
  });
  const handleCart = (e) => {
    if (add.cart) {
      dispatch({
        type: "ADD_TO_CART",
        productId: id,
        productName: name,
        productPrice: price,
      });
      setAdd((prev) => ({ ...prev, cart: false }));
    } else {
      dispatch({ type: "REMOVE_FROM_CART", productId: id });
      setAdd((prev) => ({ ...prev, cart: true }));
    }
  };
  const handleWishlist = (e) => {
    if (add.wishlist) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        productId: id,
        productName: name,
        productPrice: price,
      });
      setAdd((prev) => ({ ...prev, wishlist: false }));
    } else {
      dispatch({ type: "REMOVE_FROM_WISHLIST", productId: id });
      setAdd((prev) => ({ ...prev, wishlist: true }));
    }
  };
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        display: "inline-flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid black",
      }}
    >
      <span>id: {id}</span>
      <span>name: {name}</span>
      <span>price: {price}</span>
      <span>cart: {add.cart ? "No" : "Yes"}</span>
      <span>wishlist : {add.wishlist ? "No" : "Yes"}</span>
      <button onClick={handleCart}>
        {add.cart ? "Add to cart" : "Remove from cart"}
      </button>
      <button onClick={handleWishlist}>
        {add.wishlist ? "Add to wishlist" : "Remove from wishlist"}
      </button>
    </div>
  );
}
