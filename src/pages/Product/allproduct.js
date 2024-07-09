import { useSelector , useDispatch} from "react-redux";
import Productcard from "./component/productcard";
import { useEffect, useState} from "react";
import { setCurrentPage, setpageproduct, setProducts, setProductsPerPage } from "../../redux/slice/productslice";
import Pagination from "./component/pagination";



const Allproduct = () => {
    const {products, filterproducts, pageproduct} = useSelector((state) => state.product);    
    const dispatch = useDispatch();

    useEffect(() => {        
      
        const result = products.filter((product) => {
            return (
              product.pfeatured === "false"    
            );     
        });
      
        dispatch(setProducts(result));
        
      },[products, dispatch]);     

    
    return (
        <>
                
        <div className="row mx-0">
        {pageproduct.map(product => (
            <Productcard key={product._id} product={product} />
        ))}
        </div>
        </>    
    )

};

export default Allproduct;
