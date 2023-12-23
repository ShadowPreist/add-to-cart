import { useContext, useState } from "react"
import { itemContext } from "../store/ItemContext";

const Card = ({data}) => {
  const [currentAmount,setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;
  const {id,name,price,description} = data;
  const {addItem} = useContext(itemContext)
  const addCartHandler = () => {
    if(currentAmountNumber < 1 || currentAmountNumber > 5) {
      return;
    }
    addItem({
      id,
      price,
      name,
      quantity: currentAmountNumber,
    })
  }
  return (
    <div className="card-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <div className="qty-handler">
        <button
          className="decrement-button"
          onClick={() => {
            setCurrentAmount(currentAmount - 1);
          }}
          disabled={currentAmountNumber <= 1}
        >
          -
        </button>
        <input
          type="number"
          className="qty-input"
          name="qty"
          min={1}
          value={currentAmountNumber}
          readOnly
        />
        <button
          className="increment-button"
          onClick={() => {
            setCurrentAmount(currentAmount + 1);
          }}
        >
          +
        </button>
      </div>
      <button className="add-cart" onClick={addCartHandler}>Add to Cart</button>
    </div>
  );
}

export default Card