import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducer/users'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  users: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
