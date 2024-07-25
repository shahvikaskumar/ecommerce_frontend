import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-responsive-pagination";
import { setCurrentPage, setpageproduct, setProductsPerPage } from "../../../redux/slice/productslice";

const PaginationComponent = () => {
    const { filterproducts, currentpage, productperpage, sidefilter } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    
    const indexOfLastProduct = currentpage * productperpage;
    const indexOfFirstProduct = indexOfLastProduct - productperpage;
    const currentpageno = sidefilter.length > 0 ? sidefilter.slice(indexOfFirstProduct, indexOfLastProduct) : filterproducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sidefilter.length >0 ? sidefilter.length / productperpage : filterproducts.length / productperpage);
    

    useEffect(() => {
        dispatch(setpageproduct(currentpageno));

        // eslint-disable-next-line
    }, [productperpage, currentpage, filterproducts, sidefilter , dispatch]);
    
    const handlePageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    const handlePerPageChange = (e) => {
        dispatch(setProductsPerPage(parseInt(e.target.value, 10)));
    };

    return (
        <nav className="row mx-0 my-2 justify-content-center align-items-center">
            <div className="p-0 d-none d-lg-flex justify-content-center" style={{maxWidth:"210px"}}>
                <div className="input-group mx-1">
                    <span className="input-group-text rounded-start-4 fs-6" >Item per page</span>    
                    <select className=" fs-6 ps-1 rounded-end-4 form-select form-select-sm" onChange={handlePerPageChange} value={productperpage}>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className=" mx-2 p-0 w-auto">
            
            <Pagination 
                extraClassName="mb-0"               
                current={currentpage}
                total={totalPages}
                onPageChange={handlePageChange}  
                labels={{
                    first: <span>First</span>,
                    last: <span>Last</span>,
                    previous: <span>Previous</span>,
                    next: <span>Next</span>,
                }}              
                maxWidth={10} 
            />
            </div>
        </nav>
    );
};

export default PaginationComponent;
