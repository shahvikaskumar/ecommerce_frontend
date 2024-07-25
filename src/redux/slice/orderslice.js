import {createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { Base_URL, Rakeyid } from "../../utility/config";
import {setloading } from "./authslice";
import { setclear } from "./cartslice";


const initialState = {
    userorder:[],
    allorder:[],
    
};

const orderslice = createSlice({
    name:'order',
    initialState,
    reducers:{
        
        setgetorder(state,action){
            state.userorder = action.payload;
        },

        setgetallorder(state,action){
          state.allorder = action.payload;
        },

        setaddorder(state,action){
            state.userorder.push(action.payload);
            if(state.allorder.length>0){
              state.allorder.push(action.payload);
            }            
        },

        

    },
});


export const Getallorder = (token) => async(dispatch) => {
  try{
      dispatch(setloading(true));
      const config = {
          headers:{                                  
            Authorization:`Bearer ${token}`
          }
        };
        
       const response = await axios.get(`${Base_URL}/order/getallorder`,config);
       dispatch(setgetallorder(response.data.data));
        
    }
    catch(err){
      console.log(err);
  }
  finally{
    dispatch(setloading(false));
  }
};



export const Getuserorder = (token,uid) => async(dispatch) => {
    try{
      dispatch(setloading(true));
        const config = {
            headers:{                                  
              Authorization:`Bearer ${token}`
            }
          };

         const response = await axios.get(`${Base_URL}/order/getorder/${uid}`,config);
         dispatch(setgetorder(response.data.data)); 
          
          
        

    }catch(err){
        console.log(err);
    }
    finally{
      dispatch(setloading(false));
    }
};

const Createorder = (token, response, orderdata, showtoast, navigate) => async(dispatch) => {
try{
  dispatch(setloading(true));
    const data={
        ...orderdata, 
        payid:response.razorpay_payment_id,
        payorderid:response.razorpay_order_id,
        paysignature:response.razorpay_signature,
        paystatus:"Paid"
    };
    const config = {
        headers:{                                  
          Authorization:`Bearer ${token}`
        }
      };      
    
    const responsedata = await axios.post(`${Base_URL}order/createorder`,data,config);
    dispatch(setaddorder(responsedata.data.data));     
    dispatch(setclear());
    dispatch(showtoast({message:responsedata.data.success,type:"success"}));    
    navigate('/');
}
catch(err){
    console.log(err);
    dispatch(showtoast({message:err.responsedata?.data?.error || "An error occured", type:"error"}));
}
finally{
  dispatch(setloading(false));
}

};


export const Createpayment = (token,user,orderdata,showtoast, navigate) => async(dispatch) => {
    try{
      dispatch(setloading(true))
    const config = {
        headers:{                                  
          Authorization:`Bearer ${token}`
        }
      };      
    
    const response = await axios.post(`${Base_URL}payment/createorder`, { amount:orderdata.totalamount}, config);
    const data = response.data.order;
    const options = {
      key: Rakeyid,
      amount: data.amount,
      currency: data.currency,
      name: 'Arham Fashion',
      description: 'Test Transaction',
      image:"https://res.cloudinary.com/dp0wfs6kx/image/upload/v1721829784/logo_7-Photoroom.png-Photoroom_dhszid.png",          
      order_id: data.id,
      handler: function (response) {
        dispatch(Createorder(token,response,orderdata, showtoast, navigate));
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.mobileno
      },
      notes: {
        address: 'surat'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp1 = new window.Razorpay(options);    
    rzp1.open();

    }
    catch(err){
        console.log(err);
        
    }
    finally{
      dispatch(setloading(false));
    }
};



export const {setgetorder,setgetallorder , setaddorder, setpayresponse} = orderslice.actions;

export default orderslice.reducer;