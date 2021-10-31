import { createSlice } from "@reduxjs/toolkit";
import { addCartItem } from "./cartUtils";

const initialState = {
    hidden:false,
    cartItem:[],
    accItem:[]
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
            state.cartItem = action.payload
        },
        accItems: (state,{payload})=>{
            state.accItem = payload;
        }
    }
})

export const {togglehidden,cartItems,accItems} = cartSlice.actions;
export default cartSlice.reducer
