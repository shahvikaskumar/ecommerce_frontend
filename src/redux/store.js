import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './slice/toastslice';
import authReducer from './slice/authslice';
import productReducer from './slice/productslice';
import cartReducer from './slice/cartslice';
import headerReducer from './slice/headerslice';
import { loadstate, savestate} from './middleware/cartmiddleware';
import filterReducer from './slice/filterslice';
import orderReducer from './slice/orderslice';
const preloadedState= loadstate();

const store = configureStore({
    reducer:{
        
        toast: toastReducer,
        auth:authReducer,
        product:productReducer,
        cart:cartReducer,
        header:headerReducer,
        filter:filterReducer,
        order:orderReducer,
        
    },
    preloadedState,
});

store.subscribe(() => {
    savestate({
        cart:store.getState().cart
    });
});

export default store;