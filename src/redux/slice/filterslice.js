import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pcate: 'Select...',
    psubcate: 'Select...',
    prange: [0, 100],
    rrange: [0, 5],
    sbname: 'Select...',
    sbprice: 'Select...',
    sbrating: 'Select...'
};

const filterslice = createSlice ({
    name:'filter',
    initialState,
    reducers:{
        setfilterinput:(state, action) => {
            const {name, value} = action.payload;
            state[name] =value;
        },

        setpricerange:(state, action) => {
            state.prange = action.payload;
        },

        setratingrange:(state, action) => {
            state.rrange = action.payload;
        },

        resetfilter: () => initialState,
        
    },    
});

export const { setfilterinput, setpricerange, setratingrange, resetfilter } = filterslice.actions;
export default filterslice.reducer;