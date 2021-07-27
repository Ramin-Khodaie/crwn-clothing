import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import { persistReducer } from "redux-persist";
import userReducer from "./user/userReducer";
import shopReducer from "./shop/shopReducer";
import directoryReducer from "./directory/directoryReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitlist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
