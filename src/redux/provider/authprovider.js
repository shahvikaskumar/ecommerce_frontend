import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { verifytoken } from "../slice/authslice";
import { useNavigate} from "react-router-dom";


const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
      
    useEffect(() => {
             
        const token = localStorage.getItem('token');
        
        if(token){
            dispatch(verifytoken(token, navigate));
        } 
        
        // eslint-disable-next-line
    },[]);

    return (
        <>
            {children}
        </>       
    ) 
    
};

export default AuthProvider;

