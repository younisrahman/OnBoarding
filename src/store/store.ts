import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
  ThunkDispatch,
  // StoreEnhancer,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Auth'],
  // blacklist: [],
};

const middleware = [
  ...(__DEV__ ? [logger] : []),
  ...getDefaultMiddleware({serializableCheck: false}),
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: __DEV__,
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<AppDispatch, void, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export {store, persistor};
