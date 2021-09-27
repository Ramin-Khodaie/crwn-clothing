import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSlice from "../redux/shop/productSlice";
import collectionSlice from "../redux/collection/collectionSlice";
import newUserSlice from "../redux/user/newUserSlice";
import userSlice from "../redux/user/userSlice";
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
  },
});
// const store = createStore(rootReducer, applyMiddleware(...middleware));

// const persistore = persistStore(store);
export { store };
