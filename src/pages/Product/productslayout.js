import { Outlet } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Pagination from "./component/pagination";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setpricerange } from "../../redux/slice/filterslice";

const ProductLayout = () => {
    const dispatch = useDispatch();
    const {minprice, maxprice } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(setpricerange([minprice, maxprice]));
    },[minprice, maxprice, dispatch]);


    return (
        <>        
        <Pagination />       
        <div id="container" className="container-fluid px-0 mx-0">
            <div className="row m-0">
                <div className="d-none d-lg-block col-lg-3 col-xxl-2 p-0">
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