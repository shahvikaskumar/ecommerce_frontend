import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitem:[],
    countitem:0,
};

const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setclear(state,action){
            state.cartitem = [];
            state.countitem = 0;
        },

        setadditem(state,action){
            const existitem = state.cartitem.find(item => item._id === action.payload._id)
            if(existitem){
                existitem.quantity +=1;
            }else {
            state.cartitem.push({...action.payload, qty:1});
            state.countitem += 1;
            }
        },

        setremoveitem(state, action){
            state.cartitem = state.cartitem.filter(item => item._id !== action.payload._id);
            state.countitem -= 1;
        },

        adjustqty(state, action){
            const existitem = state.cartitem.find(item => item._id === action.payload.id);
            if(existitem){
                if(action.payload.qty > 0){
                existitem.qty = action.payload.qty;
                } else {
                    state.cartitem = state.cartitem.filter(item => item._id !== action.payload.id);
                    state.countitem -=1;
                }
            }
            
        },
    },



});

export const {setadditem, setclear, setremoveitem, adjustqty} = cartslice.actions;

export default cartslice.reducer;


