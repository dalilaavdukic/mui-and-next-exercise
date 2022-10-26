import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import counterReducer from "./counterSlice";
import { jsonPlaceholderApi } from "../api/generated/api";

const rootReducer = combineReducers({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
