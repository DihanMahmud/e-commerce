import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import CartSlice from "./slices/CartSlice";

export const Store = configureStore({
    reducer: {
        counter: CounterSlice, // counter[name(key)]
        cart: CartSlice
    },
})


