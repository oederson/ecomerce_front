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
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTransform } from 'redux-persist';

import CryptoJS from 'crypto-js';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [
    createTransform(
      // Função para transformar os dados antes de serem salvos
      (inboundState, key) => {
        const encryptionKey = 'sua-chave-de-criptografia-aqui';
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(inboundState), encryptionKey).toString();
        return encryptedData;
      },
      // Função para transformar os dados antes de serem carregados
      (outboundState, key) => {
        const encryptionKey = 'sua-chave-de-criptografia-aqui';
        const decryptedData = CryptoJS.AES.decrypt(outboundState, encryptionKey).toString(CryptoJS.enc.Utf8);
        const parsedData = JSON.parse(decryptedData);
        return parsedData;
      }
    ),
  ],
};

const rootReducer = combineReducers({ user: usuarioReducer, carrinho: carrinhoReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: false,
});

export const persistor = persistStore(store);
