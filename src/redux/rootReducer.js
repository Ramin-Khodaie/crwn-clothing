import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import { persistReducer } from "redux-persist";
import userReducer from "./user/userReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitlist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
