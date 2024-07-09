import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { Base_URL } from "../../utility/config";





const initialState = {
    products:[],
    filterproducts:[],
    sidefilter:[],
    singleproduct:[],
    pageproduct:[],
    loading:false,            
    showmodal:false,
    error:null,  
    filters: {
        category: '',
        subcate: '',        
    }, 
    sortby:'',
    currentpage:1,
    productperpage:8,
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
        setupdate(state, action) {
            const updatedproduct = action.payload;
            const productindex = state.products.findIndex(product => product._id === updatedproduct._id);
            if (productindex !== -1) {
              state.products[productindex] = updatedproduct;
            }
          },
        setdelete(state,action){
            state.products = state.products.filter(product => product._id !== action.payload );
        },
        setploading(state, action){
            state.loading=action.payload;
        },
        setpageproduct(state,action){
            state.pageproduct=action.payload;
        },

        setProducts(state, action) {
            state.filterproducts = action.payload; 
        },
        setsingleproduct(state,action) {
            state.singleproduct=action.payload;
        },

        applyFilters(state, action) {
            state.filters = action.payload;            
            state.sidefilter = state.filterproducts.filter(product => {                
                return (
                    product.cate.toLowerCase().includes(state.filters.category.toLowerCase()) ||
                    product.subcate.toLowerCase().includes(state.filters.subcate.toLowerCase())                     
                );
            });
            state.currentpage = 1; 
        }, 

        applySorting(state, action) {
            state.sortby = action.payload;
            // Apply sorting
            switch (state.sortby) {
                case 'price-asc':
                    state.filterproducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    state.filterproducts.sort((a, b) => b.price - a.price);
                    break;
                // Add more sorting options based on your requirements
                default:
                    break;
            }
        },

        setCurrentPage(state, action) {
            state.currentpage = action.payload;
        },

        setProductsPerPage(state, action) {
            state.productperpage = action.payload;
            state.currentpage = 1; // Reset current page to 1 after changing products per page
        },

    },    
});



export const Createproduct = createAsyncThunk('product/create', async({data, token, showtoast, modalclose},{dispatch}) => {
    
    try{
        dispatch(setploading(true));        
        const config = {
            headers:{      
              'Content-Type':'multipart/form-data',              
              Authorization:`Bearer ${token}`
            }
          };
          
        const response = await axios.post(`${Base_URL}product/create`,data, config);
        dispatch(showtoast({message:response.data.success, type:'success'}));          
        dispatch(setaddproduct(response.data.product));
          
    }
    catch(err){
        console.log(err.response.data);
        dispatch(showtoast({message:err.response?.data?.error || 'An error occured', type:'error'}));
        
    }

    finally{
        dispatch(setploading(false));
        modalclose();
    }

});

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


export const Updateproduct = createAsyncThunk('product/update', async({data, pid, token, showtoast, modalclose},{dispatch}) => {
    
    try{
        dispatch(setploading(true));        
        const config = {
            headers:{      
              'Content-Type':'multipart/form-data',              
              Authorization:`Bearer ${token}`
            }
          };
          
        const response = await axios.put(`${Base_URL}product/update/${pid}`,data, config);
        dispatch(showtoast({message:response.data.success, type:'success'}));          
        dispatch(setupdate(response.data.product));
          
    }
    catch(err){
        console.log(err.response.data);
        dispatch(showtoast({message:err.response?.data?.error || 'An error occured', type:'error'}));
        
    }

    finally{
        dispatch(setploading(false));
        modalclose();
    }

});


export const {setmodalshow, setsingleproduct ,setpageproduct, setallproduct,setaddproduct, setupdate, setdelete, setploading, setProducts, applyFilters, applySorting, setCurrentPage, setProductsPerPage} = productslice.actions;

export default productslice.reducer;
