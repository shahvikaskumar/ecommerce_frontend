import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faMinus, faPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adjustqty, setadditem } from '../../../redux/slice/cartslice';

const Productcard = (props) => {
    const [product, setproduct] = useState([]);
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const {cartitem} = useSelector((state) => state.cart);
    const itemInCart = cartitem.find(item => item._id === product._id);
    
    useEffect(() => {
        if(props.product){
            setproduct(props.product);
        }else{
            setproduct(null);
        }
    },[props.product]);

    const goproductdetail = () => {
        navigate(`/productdetail/${product._id}`);
    };    

    const addtocart = () => {
        dispatch(setadditem(product));        
    }

    const handleincreaseqty = () => {
        
        if(itemInCart.qty >= 1){
            dispatch(adjustqty({id:product._id, qty:itemInCart.qty + 1}));
        }
    };

    const handledecreaseqty = () => {
        if(itemInCart.qty >= 1){
            dispatch(adjustqty({id:product._id, qty:itemInCart.qty - 1}));
        }else {
            dispatch(adjustqty({id:product._id, qty:0}));
        }


    };

    return (
        <>
        
        <div key={product._id} className="col-6 col-md-4 col-xxl-3 px-xxl-5 py-3 ">
            <div className="card text-center">
                <button className='border-0 bg-transparent p-0 pb-2 ' onClick={goproductdetail}>
                <div className="h-50 position-relative">
                    <img className="card-img-top img-fluid" src={product.imageurl} alt={product.pname} />
                    {product.pcountrating > 0 && (
                    <div className='position-absolute rounded-5 ms-5  bg-secondary start-0 bottom-0 translate-middle'>
                    <p className="px-2 mb-0 py-1 fs-6">{product.pavgrating}  <FontAwesomeIcon className="text-warning" icon={faStar} /> <span className='me-1'>|</span>{product.pcountrating}</p>
                    </div>
                    )}
                </div>
                <div className="card-body mt-2">
                    <h5 className="card-title text-truncate fs-4 fw-bold">{product.pname}</h5>
                    <h6 className="card-text text-truncate fs-5 fw-bold">₹ {product.price}</h6>
                    <p className="text-truncate mb-0">{product.pdesc}</p>
                </div>
                </button>
                <div className='d-flex w-100 justify-content-center mb-2'>
                {!itemInCart ? (
                   
                <button className="btn text-truncate btn-warning fw-bold rounded-4" onClick={addtocart}>
                        <FontAwesomeIcon className='cart me-2' icon={faCartShopping}/>
                        Add to Cart  
                </button>
                
                ) : (

                    <div className='w-50 d-flex justify-content-center'>
                    <button className="btn btn-warning px-3 me-2"
                                    onClick={handledecreaseqty}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <div className="form-outline">
                                    <span id="form1" min="0" name="quantity"
                                        value="1" type="number"
                                        className="form-control">
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
            </div>
        </div>
    
        </>
    );
};

export default Productcard;