import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from "redux-logger";
import phonebookReducer from './phonebook/phonebook-reducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

// import { composeWithDevTools } from 'redux-devtools-extension';


const persistConfig = {
  key: 'contacts',
  storage,
}

const rootReduser = combineReducers({
    contacts: persistReducer(persistConfig, phonebookReducer),
});

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

// export default {store, persistor};



// const rootReduser = combineReducers({
//     contacts: phonebookReducer,
// });

// const store = createStore(rootReduser, composeWithDevTools());

