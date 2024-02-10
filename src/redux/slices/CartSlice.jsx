import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";

// const [initialState, setInitialState] = useState([])

export const CartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers: {
        addToCart : (state, action) => {
            state.push(action.payload)
        },
        removeFromCart : (state, action) => {
            return state.filter((item) => item.id !== action.payload)
            // state.splice((item) => state.indexOf(item), 1), deletes from the front of the array..doesnt work properly
        }
    }
})
export const {addToCart, removeFromCart} = CartSlice.actions

export default CartSlice.reducer