import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: 'counter', //key
    initialState,
    reducers: {
        inc : (state) => {
            state.value += 1;
        },
        dec : (state) => {
            state.value -= 1;
        }
    }
})

export const {inc, dec} = CounterSlice.actions

export default CounterSlice.reducer 