import Nav from "../components/Nav"
import Summary from "../components/Summary"

const Header = ({showCartHandler}) => {
  return (
    <> 
      <Nav showCartHandler={showCartHandler}/>
      <Summary />
    </>
  )
}

export default Header