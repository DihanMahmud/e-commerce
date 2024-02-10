import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Navbar() {

  const totalCart = useSelector((state) => state.cart)

  console.log(totalCart.length);

  return (
    <div id="nav">
        <div className="navbar">
            <NavLink className='underline' to='/'><h1>Oebic Store</h1></NavLink>
            <div className="navlink">
                <NavLink className='underline' to='/' ><p>Home</p></NavLink>            
                <NavLink className='underline' to='/cart'>
                  <div className="pos">
                      <FaShoppingCart className='b'></FaShoppingCart>
                    {
                      totalCart.length > 0 && <span id="total" className="a">{totalCart.length}</span>
                    }
                  </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
