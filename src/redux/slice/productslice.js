import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { Base_URL } from "../../utility/config";
import {setmloader } from "./authslice";

const initialState = {
    products:[],
    filterproducts:[],
    sidefilter:[],
    singleproduct:[],
    pageproduct:[],
    loading:false,            
    showmodal:false,
    error:null,  
    filters: [],        
    sortby:'',
    currentpage:1,
    productperpage:8,
    minprice:0,
    maxprice:0,
    searchstr:'',
};

const productslice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setmodalshow(state, action){
            state.showmodal = action.payload;
        },

        setsearchstr(state,action){
            state.searchstr = action.payload;            
        },

        setsearchproduct(state, action){
            state.sidefilter=[];
            state.sidefilter=state.filterproducts.filter((product) => {
                return(
                    product.pname.toLowerCase().includes(action.payload.toLowerCase()) || 
                    product.pdesc.toLowerCase().includes(action.payload.toLowerCase())
                )
            })

            if (state.sidefilter.length === 0) {
                window.alert('No products found.');
            }
        },

        setallproduct(state, action){
            state.products=action.payload;
            const allprice = state.products.map(product => product.price);
            state.minprice=Math.floor(Math.min(...allprice) / 100) * 100;
            state.maxprice=Math.ceil(Math.max(...allprice) / 100) * 100;            
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
            state.sidefilter=[];
        },

        setsingleproduct(state,action) {
            state.singleproduct=action.payload;
        },

        applyFilters(state, action) {
            state.filters = action.payload; 
            console.log(action.payload);  
            state.sidefilter = state.filterproducts
                .filter(product => {  
                    
                    const iscate = state.filters.pcate !== "Select..." ? product.cate.toLowerCase().includes(state.filters.pcate.toLowerCase()) : false;
                    const issubcate =state.filters.psubcate !== "Select..." ? product.subcate.toLowerCase().includes(state.filters.psubcate.toLowerCase()) : false;
                    const pricerange = product.price >= state.filters.prange[0] && product.price <= state.filters.prange[1] ;                
                    const pavgrating = (product.pavgrating ?? 0) >= state.filters.rrange[0] && (product.pavgrating ?? 0) <= state.filters.rrange[1];

                    if (state.filters.pcate === "Select..." && state.filters.psubcate === "Select...") {
                        return pricerange && pavgrating;
                    }else if(state.filters.psubcate === "Select..."){
                        return iscate && pricerange && pavgrating;
                    }
                     else {
                        return iscate && issubcate && pricerange && pavgrating;
                    }
            
                    
                })
                .sort((a,b) => {
                    
                        if(state.filters.sbname === 'name-asc'){
                            return a.pname.localeCompare(b.pname);
                        }
                        else if(state.filters.sbname === 'name-dsc'){
                            return b.pname.localeCompare(a.pname);
                        }

                        if(state.filters.sbprice === 'price-asc'){
                            return a.price - b.price;
                        }
                        else if(state.filters.sbprice === 'price-dsc'){
                            return b.price - a.price;
                        }                        
                        return 0;
                    
                });
            
                if (state.sidefilter.length === 0) {
                    window.alert('No products found.\nFilter and Sorting only display product not all product.');
                }
            
            state.currentpage = 1; 
        }, 
        
        setCurrentPage(state, action) {
            state.currentpage = action.payload;
        },

        setProductsPerPage(state, action) {
            state.productperpage = action.payload;
            state.currentpage = 1; 
        },

        setsidefilter(state) {
            state.sidefilter = [];
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
        dispatch(setmloader(true)); 
        const response = await axios.get(`${Base_URL}product/all`);
        dispatch(setallproduct(response.data.success));        
      }
      catch(error){
        console.log(error);
      }
      finally{
        dispatch(setmloader(false));
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

export const Pratingsapply = createAsyncThunk('product/prating', async({pid, data ,token, showtoast},{dispatch}) => {
    try{
        dispatch(setploading(true));        
        const config = {
            headers:{                                  
              Authorization:`Bearer ${token}`
            }
          };          
        const response = await axios.put(`${Base_URL}product/rating/${pid}`,data, config);
        dispatch(showtoast({message:response.data.success, type:'success'}));          
        dispatch(setupdate(response.data.product));
    }
    catch(err){
        console.log(err.response.data);
        dispatch(showtoast({message:err.response?.data?.error || 'An error occured', type:'error'}));
    }
    finally{
        dispatch(setploading(false));
    }


});
export const {setmodalshow,setsearchstr, setsearchproduct ,setsidefilter ,setsingleproduct ,setpageproduct, setallproduct,setaddproduct, setupdate, setdelete, setploading, setProducts, applyFilters, applySorting, setCurrentPage, setProductsPerPage} = productslice.actions;

export default productslice.reducer;
