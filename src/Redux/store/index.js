import { createStore } from "redux";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const Store = createStore(persistedReducer);

const persistor = persistStore(Store);

export default Store;
export { persistor };
