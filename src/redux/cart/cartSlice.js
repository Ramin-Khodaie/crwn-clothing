import { createSlice } from "@reduxjs/toolkit";
import { addItem2 } from "./cartAction";
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
            state.cartItem = addItem2(state.cartItem,action.payload)
        },
        accItems: (state,{payload})=>{
            state.accItem = payload;
        }
    }
})

export const {togglehidden,cartItems,accItems} = cartSlice.actions;
export default cartSlice.reducer
