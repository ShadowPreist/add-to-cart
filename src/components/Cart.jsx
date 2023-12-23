import { itemContext } from "../store/ItemContext";
import CartItem from "./CartItem";
import { useState, useEffect, useContext } from "react";



const Cart = ({hideCartHandler}) => {
  const {items,totalAmount} = useContext(itemContext);
  const [totalPrice, setTotalPrice] = useState(totalAmount);

  const updateTotalPrice = (total) => {
    setTotalPrice((prevTotal) => prevTotal + total);
  };

  // useEffect(() => {
  //   const initialTotal = fruits.reduce((total, fruit) => {
  //     return total + fruit.quantity * fruit.price;
  //   }, 0);

  //   setTotalPrice(initialTotal);
  // }, []); 

  return (
    <div className="cart-list">
      <h2 className="text-center">Your Shopping Cart</h2>
      <hr />
      {items.map((fruit) => (
        <CartItem
          key={fruit.id}
          fruit={fruit}
          updateTotalPrice={updateTotalPrice}
        />
      ))}
      <hr />
      <p>Total Cost: ${totalPrice}</p>
      <div className="btns">
        <button className="close-btn" onClick={hideCartHandler}>Close</button>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default Cart;
