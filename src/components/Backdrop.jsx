import Cart from "./Cart";

const Backdrop = ({ showCart, hideCartHandler }) => {
  const handleClick = (event) => {

    if (
      event.target.closest(".cart-list")
    ) {
      return;
    }
    hideCartHandler();
  };

   if (showCart) {
     document.body.style.overflow = "hidden";
   } else {
     document.body.style.overflow = "auto";
   }

  return (
    <>
      {showCart && (
        <div className="backdrop" onClick={handleClick}>
          <Cart hideCartHandler={hideCartHandler}/>
        </div>
      )}
    </>
  );
};

export default Backdrop;
