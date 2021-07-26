import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistore = persistStore(store);
export { store, persistore };
