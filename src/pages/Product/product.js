import { useSelector , useDispatch} from "react-redux";
import Productcard from "./component/productcard";
import { useEffect} from "react";
import { setProducts} from "../../redux/slice/productslice";





const Product = (props) => {
    const {products, pageproduct} = useSelector((state) => state.product);    
    const dispatch = useDispatch();
    
    useEffect(() => {        
      
        
        const result = products.filter((product) => {
            return (
                product.pfeatured === "false" &&                 
              (props.cate === "All" ||  product.cate === props.cate) &&
              (props.subcate === "All" ||  product.subcate === props.subcate)   
            );     
        });
      
        dispatch(setProducts(result));               
        

        // eslint-disable-next-line

      },[products, dispatch, props.cate, props.subcate]);        

    
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

export default Product;
