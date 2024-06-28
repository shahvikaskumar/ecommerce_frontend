// import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userslice';
import toastReducer from './slice/toastslice';
import authReducer from './slice/authslice';

const store = configureStore({
    reducer:{
        user:userReducer,
        toast: toastReducer,
        auth:authReducer,
    }
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(),
    // devTools: process.env.NODE_ENV !== 'production',
});

export default store;