import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

export default function CartItem({item}) {

  const dispatch = useDispatch();

  const removeCart = () => {
    dispatch(removeFromCart(item.id))
    toast.error("Item removed")
  }
  return (
    <div>
        <div className='cartItem'>
            <div><img src={item.image} alt="" /></div>
            <div className='flex'>
                <p className='title'>{item.title.substring(0,30)+"..."}</p>
                <p className='des'>{item.description.substring(0,80)+"..."}</p>
                <div className='cartBotom'>
                    <p>${item.price}</p>
                    <div onClick={removeCart}><FcDeleteDatabase className='b'></FcDeleteDatabase></div>
                </div>
            </div>
        </div>
    </div>
  )
}
