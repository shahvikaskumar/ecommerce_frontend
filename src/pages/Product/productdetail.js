import { useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faMinus, faPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import Rating from "./component/rating";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from 'react-router-dom';
import { Pratingsapply, setsingleproduct } from "../../redux/slice/productslice";
import { showtoast } from "../../redux/slice/toastslice";
import Loading from "../../component/loading/loading";
import { adjustqty, setadditem } from '../../redux/slice/cartslice';

const ProductDetail = () => {
    
    const {id} = useParams();
    const {singleproduct, loading, products} = useSelector((state) => state.product);    
    const {cartitem} = useSelector((state) => state.cart);
    const itemInCart = cartitem.find(item => item._id === singleproduct._id);
    const {isauth,user, token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    useEffect(() => {

        if (id) {
            const result = products.find((product) => product._id === id);
            if (result) {
                dispatch(setsingleproduct(result));
            }
        }

    },[id, products ,dispatch]);
    
    const addtocart = () => {
        dispatch(setadditem(singleproduct));        
    }

    const handleincreaseqty = () => {
        
        if(itemInCart.qty >= 1){
            dispatch(adjustqty({id:singleproduct._id, qty:itemInCart.qty + 1}));
        }
    };

    const handledecreaseqty = () => {
        if(itemInCart.qty >= 1){
            dispatch(adjustqty({id:singleproduct._id, qty:itemInCart.qty - 1}));
        }else {
            dispatch(adjustqty({id:singleproduct._id, qty:0}));
        }


    };
 

    

    
    
    const handleRating = (rating) => {
        const data = {
            uid:user._id,
            ratingno : rating
        };

        if (singleproduct) {
            dispatch(Pratingsapply({ pid: singleproduct._id, data: data, token: token, showtoast: showtoast }));
        }
    };

    

    if (!singleproduct) {
        return <div>Product not found</div>;
    }

    return (
        <>
        {loading &&  <Loading />}    
        <div id="container" className="container">
            <div className="row m-0 my-4">
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid rounded-5" src={singleproduct.imageurl} alt={singleproduct.pname} />                    
                </div>
                <div className="col-sm-12 col-md-6">
                    <h1 className="display-4 mx-3 mt-4 mb-2 fw-bold">{singleproduct.pname}</h1>
                    <p className=" fs-4 mx-3 my-2">{singleproduct.pdesc}</p>
                    {singleproduct.pcountrating > 0 && (
                    <div className="border mx-3 my-2 rounded-5 py-2 px-2  d-inline-block border-black">
                    <p className="mx-3 my-0 fs-5">{singleproduct.pavgrating} <FontAwesomeIcon className="text-warning" icon={faStar} /> |  {singleproduct.pcountrating} Rating</p>
                    </div>
                    )}
                    <h2 className="mx-3 my-3 fw-bold">Price:- Rs. {singleproduct.price}/-</h2>
                    <div className="d-flex justify-content-center  mx-3 my-4">
                    {!itemInCart ? (
                    <button className="btn btn-warning fs-3 fw-bold rounded-4" onClick={addtocart}>
                        <FontAwesomeIcon className='cart me-3' icon={faCartShopping}/>
                        Add to Cart  
                    </button>
                    ) : (

                        <div className='w-100 d-flex justify-content-center'>
                        <button className="btn btn-warning px-3 me-2"
                                        onClick={handledecreaseqty}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
    
                                    <div className="form-outline w-25 text-center">
                                        <span id="form1" min="0" name="quantity"
                                            value="1" type="number"
                                            className="form-control fs-4">
                                                {itemInCart.qty}
                                            </span>
                                    </div>
                                    <button className="btn btn-warning px-3 ms-2"
                                        onClick={handleincreaseqty} >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                        </div>
                    )}
                </div>
                <h3 className="mx-3 my-4">Product Specification:- </h3>
                <table className="table-responsive gap-3 table-borderless table mx-3 my-2">
                   <tbody className="align-middle">
                    <tr className="fs-5">
                        <th>Brand</th>
                        <th>:-</th>
                        <td>{singleproduct.brand}
                        
                        </td>
                    </tr>
                    <tr className="fs-5">
                        <th>Color</th>
                        <th>:-</th>
                        <td>{singleproduct.color}</td>
                    </tr>
                    <tr className="fs-5">
                        <th className="w-25">Specification</th>
                        <th>:-</th>
                        <td>{singleproduct.pspeci}</td>
                    </tr>     
                    </tbody>
                </table>
                
                {isauth && (
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <h2 className="mb-0 me-4">Rate this product :- </h2>
                    <Rating totalStars={5} onRating={handleRating} />
                </div>
            )}
                </div>
            </div>
        </div>
        </>
    )
};

export default ProductDetail;