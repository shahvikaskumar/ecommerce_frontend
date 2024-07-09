import { useEffect, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


const ProductDetail = (props) => {
    
    const [product, setproduct] = useState([]);
        
    useEffect(() => {
        if(props.product){
            setproduct(props.product);
        }else{
            setproduct(null);
        }
    },[props.product]);  
    

    return (
        <>
        <div id="container" className="container">
            <div className="row m-0 my-5">
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid rounded-5" src={product.imageurl} alt={product.pname} />                    
                </div>
                <div className="col-sm-12 col-md-6">
                    <h1 className="display-1 mx-3 mt-4 mb-2 fw-bold">{product.pname}</h1>
                    <p className=" fs-4 mx-3 my-2">{product.pdesc}</p>
                    <p className="mx-3 my-2 fs-3">Rating</p>
                    <h2 className="mx-3 my-4 fw-bold">Price:- Rs. {product.price}/-</h2>
                    <div className="d-flex justify-content-center  mx-3 my-5">
                    <button className="btn btn-warning fs-2 fw-bold rounded-4">
                        <FontAwesomeIcon className='cart me-3' icon={faCartShopping}/>
                        Add to Cart  
                </button>
                </div>
                <h3 className="mx-3 my-4">Product Specification:- </h3>
                <table className="table-responsive gap-3 table-borderless table mx-3 my-2">
                   <tbody className="align-middle">
                    <tr className="fs-5">
                        <th>Brand</th>
                        <th>:-</th>
                        <td>{product.brand}
                        
                        </td>
                    </tr>
                    <tr className="fs-5">
                        <th>Color</th>
                        <th>:-</th>
                        <td>{product.color}</td>
                    </tr>
                    <tr className="fs-5">
                        <th className="w-25">Specification</th>
                        <th>:-</th>
                        <td>{product.pspeci}</td>
                    </tr>     
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </>
    )
};

export default ProductDetail;