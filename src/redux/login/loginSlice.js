import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuth:false,
}

const loginSlice = createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        loginsuccess:(state)=>{
            state.isAuth = true;
        }
    }
})

const {reducer,actions} = loginSlice;

export const {loginsuccess} = actions;
export default reducer