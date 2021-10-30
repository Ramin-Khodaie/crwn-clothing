import { createSlice } from "@reduxjs/toolkit";
import { addCartItem } from "./cartUtils";

const initialState = {
    hidden:false,
    cartItem:[],
    
}

const cartSlice = createSlice({
    name:"cartitem",
    initialState:initialState,
    reducers:{
        togglehidden : (state)=>{
            
            state.hidden = !state.hidden
        },
        cartItems : (state,action)=>{
            console.log(111,state.cartItem,action)
            state.cartItem = addCartItem(state.cartItem,action.payload)
        },
    
    }
})

export const {togglehidden,cartItems} = cartSlice.actions;
export default cartSlice.reducer
