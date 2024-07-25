import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchshow:false,
    usercanvasshow:false,
    menucanvasshow:false,
    filtershow:false,    
};

const headerslice = createSlice ({
    name:'header',
    initialState,
    reducers:{
        setsearchshow:(state, action) => {
            state.searchshow = action.payload;            
        },

        setusercanvas:(state, action) => {
            state.usercanvasshow = action.payload;
        },

        setmenucanvas:(state, action) => {
            state.menucanvasshow= action.payload;
        },

        setfiltershow:(state,action) => {
            state.filtershow = action.payload;
        },
        
    },    
});



export const { setsearchshow , setusercanvas, setmenucanvas, setfiltershow } = headerslice.actions;
export default headerslice.reducer;