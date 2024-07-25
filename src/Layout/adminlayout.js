import { Outlet} from "react-router-dom";
import Navbar from '../admin/component/navbar';
import '../admin/css/adminstyle.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getalluser } from "../redux/slice/authslice";
import { Getallorder } from "../redux/slice/orderslice";

const Adminlayout = () => {
    
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        
        if(token){
        dispatch(Getalluser(token)); 
        dispatch(Getallorder(token));       
        }
        
    },[dispatch, token]);


    return(
        
        <>
        <div className="row m-0">
            <div className="col-12  col-lg-3 col-xl-2  p-0">
                <Navbar />
            </div>
            <div className="col-12 col-lg-9 col-xl-10 p-0">
                <Outlet />
            </div>
        </div>       
            
        </>
        
        
    )
};

export default Adminlayout;