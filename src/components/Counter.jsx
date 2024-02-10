import { useDispatch, useSelector } from "react-redux"
import { dec, inc } from "../redux/slices/CounterSlice"

export default function Counter() {

    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(dec())}>Dec</button>
        <button onClick={() => dispatch(inc())}>Inc</button>
    </div>
  )
}
