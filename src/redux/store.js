import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/shop/productSlice";
import collectionSlice from "../redux/collection/collectionSlice";
import newUserSlice from "../redux/user/newUserSlice";
import userSlice from "../redux/user/userSlice";
import loginSlice from "./login/loginSlice";
import cartSlice from "./cart/cartSlice";


const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    products: productSlice,
    collection: collectionSlice,
    newUser: newUserSlice,
    currentUser: userSlice,
    cartitem: cartSlice,
    isAuth: loginSlice,
  },
});

export { store };
