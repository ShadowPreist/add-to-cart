import { useState } from "react"
import Backdrop from "../components/Backdrop"
import Body from "./Body"
import Header from "./Header"

const Main = () => {

  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <>
      <section className="main">
        <Header showCartHandler={showCartHandler} />
        <Body />
        <Backdrop showCart={showCart} hideCartHandler={hideCartHandler} />
      </section>
    </>
  );
}

export default Main