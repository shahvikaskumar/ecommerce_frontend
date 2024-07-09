import { useSelector , useDispatch} from "react-redux";
import Productcard from "./component/productcard";
import { useEffect} from "react";
import { setProducts} from "../../redux/slice/productslice";




const Allproduct = () => {
    const {products, pageproduct} = useSelector((state) => state.product);    
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
