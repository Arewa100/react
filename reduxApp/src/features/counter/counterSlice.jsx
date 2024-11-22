import { createSlice } from "@reduxjs/toolkit"

const initialState = {value: 0};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=> {
            state.value += 1; //immer libary helps to manipulate react state indirectly because in react its not good to manipulate a state directly
        },

        decrement: (state)=> {
            state.value -= 1
        }, 
        
        reset: (state)=> {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;