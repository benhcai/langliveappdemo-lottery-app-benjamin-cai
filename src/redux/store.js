// Handle store and middleware
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
