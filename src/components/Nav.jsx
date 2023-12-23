import { useContext } from "react"
import { itemContext } from "../store/ItemContext"

const Nav = ({showCartHandler}) => {
  const { items } = useContext(itemContext)
  const totalCart = items.reduce((currentVal,item)=> { 
    return currentVal + item.quantity
  },0)
  return (
    <nav className="nav">
      <h2>Quack Villa</h2>
      <button onClick={showCartHandler}>
        Cart <span>({totalCart})</span>
      </button>
    </nav>
  )
}

export default Nav