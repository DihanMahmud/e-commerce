import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"


export default function CartPage() {
  //state.cart(key) means initState hold the initialState of that slice
  //const initState = useSelector((state) => state.cart)

  //it means fetching the whole cart state, it gives warning in the log
  const {cart} = useSelector((state) => state)

  const [totalAmount, setTotalAmount] = useState(0)

  console.log(cart);

  useEffect(() => {
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0) )
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ? (
          <div className="cart">
            <div>
              {
                cart.map((item,indx) => {
                  return <CartItem key={indx} item={item}></CartItem>
                })
              }
            </div>
            <div className="yourCart">
              <h2>Your Cart</h2>
              <p>Summary</p>
              <p><span>Total Item: {cart.length}</span></p>
              <p>Total Amount: {totalAmount}</p>
              <button>Checkout</button>
            </div>
          </div>
        ) : (<div className="emptyCart">
          <h1>Cart Empty</h1> <Link to={'/'}><button className="shop now">Shop now</button></Link>
        </div>)
      }
    </div>
  )
}


