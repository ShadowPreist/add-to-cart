import React, { useState } from "react";

const CartItem = ({ fruit, updateTotalPrice }) => {
  const [count, setCount] = useState(fruit.quantity);

  const increaseQty = () => {
    setCount((prevCount) => prevCount + 1);
    updateTotalPrice(fruit.price);
  };

  const decreaseQty = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      updateTotalPrice(-fruit.price);
    }
  };

  const eachTotalPrice = count * fruit.price;

  return (
    <div>
      <div className="each-cart-item">
        <p>{fruit.name}</p>
        <span>Total purchased: </span>
        <div className="qty-control">
          <button className="qty-btn" onClick={decreaseQty}>
            -
          </button>
          <p>{count}</p>
          <button className="qty-btn" onClick={increaseQty}>
            +
          </button>
        </div>
        <p>Each item cost: ${fruit.price} </p>
        <p>Total cost for this item: ${eachTotalPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
