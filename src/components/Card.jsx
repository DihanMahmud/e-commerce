import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

export default function Card({post}) {

  const addRemove = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const removeCart = () => {
    dispatch(removeFromCart(post.id))
    toast.error("Item removed from Cart")
  }

  const addCart = () => {
    dispatch(addToCart(post))
    toast.success("Item added to Cart")

  }

  return (
    <div className="card">
      <p className="title">{post.title.substring(0,20) + "..."}</p>
      <p className="des">{post.description.substring(0,50)+"..."}</p>
      <div><img src={post.image} alt="" /></div>
      <div className="botom">
        <p>${post.price}</p>
          {
            addRemove.some((p) => p.id === post.id) ? <button onClick={removeCart}>Remove Item</button> : <button onClick={addCart}>Add to Cart</button>
          }
      </div>
    </div>
  )
}
