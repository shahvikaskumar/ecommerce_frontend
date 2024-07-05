import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { Base_URL } from "../../utility/config";





const initialState = {
    products:[],
    loading:false,            
    showmodal:false,
    error:null,   
};

const productslice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setmodalshow(state, action){
            state.showmodal = action.payload;
        },
        setallproduct(state, action){
            state.products=action.payload;
        },
        setaddproduct(state, action){
            state.products = [action.payload, ...state.products];
        },
        setdelete(state,action){
            state.products = state.products.filter(product => product._id !== action.payload );
        },
        setploading(state, action){
            state.loading=action.payload;
        }       
    },    
});



export const Createproduct = (data, token,showtoast,close) => async (dispatch) => {
    
    try{
        dispatch(setploading(true));
        
        const config = {
            headers:{      
              'Content-Type':'multipart/form-data',
              'cate':data.cate,
              'subcate':data.subcate,
              Authorization:`Bearer ${token}`
            }
          };
          
        const response = await axios.post(`${Base_URL}product/create`,data,config);
        dispatch(showtoast({message:response.data.success, type:'success'}));          
        dispatch(setaddproduct(response.data.product));

    }
    catch(err){
        console.log(err.message);
        dispatch(showtoast({message:err.response?.data?.error || 'An error occured', type:'error'}));
        
    }

    finally{
        dispatch(setploading(false));
        close();
    }

};

export const Getallproduct = () => async (dispatch) => {
    try{
        dispatch(setploading(true));  
        const response = await axios.get(`${Base_URL}product/all`);
        dispatch(setallproduct(response.data.success));        
      }
      catch(error){
        console.log(error);
      }
      finally{
        dispatch(setploading(false));
      }

};


export const Deleteproduct = createAsyncThunk('product/delete',async ({pid, token,showtoast},  {dispatch}) => {
    try{
        dispatch(setploading(true));        
        const config = {
            headers:{      
              Authorization:`Bearer ${token}`,
            }
          };        
        const response = await axios.delete(`${Base_URL}product/delete/${pid}`,config);
        dispatch(showtoast({message:response.data.success, type:'success'}));
        dispatch(setdelete(pid));      
    }
    catch(error){
        dispatch(showtoast({message:error.response?.data?.error,type:'error'}));
    }
    finally{
        dispatch(setploading(false));
    }
});


export const {setmodalshow, setallproduct,setaddproduct, setdelete, setploading} = productslice.actions;

export default productslice.reducer;
