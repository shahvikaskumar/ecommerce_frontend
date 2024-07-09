import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setpageproduct, setProductsPerPage } from "../../../redux/slice/productslice";
import { useEffect } from "react";
import { NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";


const Pagination = () => {

    const { filterproducts, currentpage, productperpage , sidefilter} =useSelector((state) => state.product);
    const dispatch= useDispatch();
    
    const indexOfLastProduct = currentpage * productperpage;
    const indexOfFirstProduct = indexOfLastProduct - productperpage;
    const currentpageno = filterproducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filterproducts.length / productperpage);
    


    useEffect(() => {
        
        dispatch(setpageproduct(currentpageno));
        // eslint-disable-next-line
    },[productperpage, currentpage , filterproducts, dispatch]);

    useEffect(() => {
        
        const currentpageside = sidefilter.slice(indexOfFirstProduct, indexOfLastProduct)
        dispatch(setpageproduct(currentpageside));
        // eslint-disable-next-line
    },[sidefilter, dispatch]);

    useEffect(() => {

        dispatch(setpageproduct(currentpageno));
        // eslint-disable-next-line
    },[dispatch]);


    const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));
    const goToFirstPage = () => dispatch(setCurrentPage(1));    
    const goToLastPage = () => dispatch(setCurrentPage(totalPages));
    
    const handlePerPageChange = (e) => {
        dispatch(setProductsPerPage(parseInt(e.target.value, 10)));
    };

    return (
    <nav className="my-4 pt-3">
        <ul className="pagination m-0  justify-content-center gap-3">
                               
                <li>
                    <div className="input-group">
                        <span className="input-group-text rounded-start-4 fs-5">Show Product per Page</span>    
                        <select className=" fs-5 ps-2 rounded-end-4 form-select form-select-sm" onChange={handlePerPageChange} value={productperpage}>
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </li>           
                
                
                <li className={`page-item ${currentpage === 1 ? 'disabled' : ''}`}>
                    <NavLink to={`?page=1`} onClick={goToFirstPage} className="page-link fs-5 rounded-3">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </NavLink>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                    <li key={index} className={`page-item ${index + 1 === currentpage ? 'active' : ''}`}>
                        <NavLink to={`?page=${index + 1}`} onClick={() => paginate(index + 1)} className="page-link fs-5 rounded-3" >
                            {index + 1}
                        </NavLink>
                    </li>
                ))}
                <li className={`page-item ${currentpage === totalPages ? 'disabled' : ''}`}>
                    <NavLink to={`?page=${totalPages}`} onClick={goToLastPage} className="page-link fs-5 rounded-3">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </NavLink>
                </li>
                
                
            </ul>
        </nav>
    )
};

export default Pagination;
