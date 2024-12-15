import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import { movieApi } from "../movieApi";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer
    },
    
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(movieApi.middleware)
    }
});


setupListeners(store.dispatch);