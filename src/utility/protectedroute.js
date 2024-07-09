import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export const ClientProtectedRoute = ({children}) => {

    const isauth = useSelector((state) => state.auth.isauth);   
    
    // If user is not authenticated, navigate to the login page
    if(!isauth){
        return <Navigate to='/login' />
    }

    // If user is authenticated, render the child components
    return children;
};

export const AdminProtectedRoute = ({children}) => {

    const isauth = useSelector((state) => state.auth.isauth);   
    const user = useSelector((state) => state.auth.user);
    
    // If user is not admin, navigate to the admin login page
    
    if(isauth){
        if(user['usertype'] !== 'admin'){            
            return <Navigate to='/admin/login' />
         }        
    }else if(!isauth) {
        return <Navigate to='/admin/login' />
    }   
    

    // If user is authenticated, render the child components
    return children
        
    
};
