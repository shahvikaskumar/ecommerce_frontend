// import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userslice';
import toastReducer from './slice/toastslice';
import authReducer from './slice/authslice';
import productReducer from './slice/productslice';
import cartReducer from './slice/cartslice';
import { loadstate, savestate} from './middleware/cartmiddleware';

const preloadedState= loadstate();

const store = configureStore({
    reducer:{
        user:userReducer,
        toast: toastReducer,
        auth:authReducer,
        product:productReducer,
        cart:cartReducer,
        
        
    },
    preloadedState,
});

store.subscribe(() => {
    savestate({
        cart:store.getState().cart
    });
});

export default store;