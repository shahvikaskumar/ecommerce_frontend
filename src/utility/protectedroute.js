import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { setloading} from "../redux/slice/authslice";
import Loading from "../component/loading/loading";


export const ClientProtectedRoute = ({children}) => {

    const dispatch = useDispatch();
    const isauth = useSelector((state) => state.auth.isauth);
    const {loading} = useSelector((state) => state.auth);    
    const [redirectPath, setRedirectPath] = useState(null);
    
    useEffect(() => {
        dispatch(setloading(true));    
        if (!isauth) {
            setRedirectPath('/login');
        } 
        dispatch(setloading(false));
    }, [isauth, dispatch]);

    if (loading) {        
        return <Loading />;
    }

    if (redirectPath) {
        return <Navigate to={redirectPath} />;
    }
    return children;    
    
};

export const AdminProtectedRoute = ({children}) => {

    const dispatch = useDispatch();
    const isauth = useSelector((state) => state.auth.isauth);
    const {user, loading} = useSelector((state) => state.auth);    
    const [redirectPath, setRedirectPath] = useState(null);
    
    useEffect(() => {
        dispatch(setloading(true));    
        if (!isauth) {
            setRedirectPath('/admin/login');
        } else if (isauth && user['usertype'] !== 'admin') {
            setRedirectPath('/admin/login');
        }

        dispatch(setloading(false));
    }, [isauth, user, dispatch]);

    if (loading) {        
        return <Loading />;
    }

    if (redirectPath) {
        return <Navigate to={redirectPath} />;
    }

    return children;    
    
};
