import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading:false,
    shopitems:'',
    error:""
}

const shopItemSlice = new createSlice({
    name:'shopitem',
    initialState: initialState,
    reducers:{
        fetchShopitemLoading: (state) =>{
            state.isLoadin = true;
        },
        fetchShopItemSuccess: (state,{payload}) =>{
            state.isLoading = false;
            state.shopitems= payload;
        },
        fecthShopItemError: (state,{payload})=>{
            state.isLoading = false;
            state.error = payload;
        }
    }
})

const {reducer,actions} = shopItemSlice;

export const {fecthShopItemError,fetchShopitemLoading, fetchShopItemSuccess} = actions;


export default reducer;