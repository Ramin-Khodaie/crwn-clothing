import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hidden:false,
    cartItem:[]
}

const cartSlice = createSlice({
    name:"cartitem",
    initialState:initialState,
    reducers:{
        togglehidden : (state)=>{
            
            state.hidden = !state.hidden
        },
        addCartItem : (state,{payload})=>{
            
            state.cartItem = payload
        }
    }
})

export const {togglehidden,addCartItem} = cartSlice.actions;
export default cartSlice.reducer
