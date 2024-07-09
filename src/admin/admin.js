import { Outlet} from "react-router-dom";
import Navbar from './component/navbar';
import './css/adminstyle.css';

const AdminMenu = () => {
    
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

export default AdminMenu;