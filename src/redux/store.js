import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carrinhoReducer from "./carrinhoRedux";
import usuarioReducer from "./userReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({user:usuarioReducer, carrinho:carrinhoReducer})

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore ({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      devTools: false,
    }),
});

export const persistor = persistStore(store);
