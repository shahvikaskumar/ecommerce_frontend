import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice ({
    name:'user',
    initialState:{
        loading:false,
        user:null,
        error:null,
    },

    reducers:{
        registerequest:(state) => {
            state.loading = true;
            state.error = null;
        },
        
        registersuccess:(state,action) => {
            state.loading = false;
            state.error = action.payload;
        },

        registerfailure:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },    
});

export const { registerequest, registersuccess, registerfailure } = userslice.actions;
export default userslice.reducer;