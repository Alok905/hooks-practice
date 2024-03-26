import { useReducer, useState } from "react";
import "./App.css";
import data from "./config/data";
import ProductCard from "./components/productCards";

function App() {
  function productReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        const { productId, productName, productPrice } = action;

        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: productId,
              name: productName,
              price: productPrice,
            },
          ],
        };
      }

      case "REMOVE_FROM_CART": {
        const { productId } = action;

        return {
          ...state,
          cart: state.cart.filter((cart) => cart.id !== productId),
        };
      }

      case "ADD_TO_WISHLIST": {
        const { productId, productName, productPrice } = action;

        return {
          ...state,
          wishlist: [
            ...state.wishlist,
            {
              id: productId,
              name: productName,
              price: productPrice,
            },
          ],
        };
      }
      case "REMOVE_FROM_WISHLIST": {
        const { productId } = action;

        return {
          ...state,
          wishlist: state.wishlist.filter(
            (wishlist) => wishlist.id !== productId
          ),
        };
      }
    }
  }
  const [state, dispatch] = useReducer(productReducer, {}, () => ({
    products: data,
    cart: [],
    wishlist: [],
  }));

  return (
    <>
      {state.products &&
        state.products.map(({ id, name, price, inCart, isWishlist }, i) => (
          <ProductCard
            key={i}
            id={id}
            name={name}
            price={price}
            inCart={inCart}
            isWishlist={isWishlist}
            dispatch={dispatch}
          />
        ))}
    </>
  );
}

export default App;
