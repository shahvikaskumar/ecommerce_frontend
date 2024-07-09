import { Outlet } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Pagination from "./component/pagination";

const ProductLayout = () => {
    

    return (
        <>
        <Pagination />
        <div id="container" className="container-fluid my-4  px-5 mx-0">
            <div className="row m-0">
                <div className="col-12  col-lg-3 col-xxl-2 p-0">
                    <Sidebar />
                </div>
                <div className="col-12 col-lg-9 col-xxl-10 p-0  ">
                    <Outlet />
                </div>
            </div>       
        </div>
        <Pagination />
       
        </>
    )
};

export default ProductLayout;