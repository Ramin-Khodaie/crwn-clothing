import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const middleware = [];

if (process.env.node_env === "production") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistore = persistStore(store);
export { store, persistore };
