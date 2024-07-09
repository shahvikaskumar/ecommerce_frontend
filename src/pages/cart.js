import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setremoveitem, adjustqty } from "../redux/slice/cartslice";

const Cart = () => {

    const {cartitem} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const updateqty = (_id, qty) => {
        if (qty < 1) {
            dispatch(setremoveitem({ _id }));
        } else {
            dispatch(adjustqty({ id:_id, qty }));
        }
    };

    const totalCost = cartitem.reduce((total, item) => total + item.price * item.qty, 0);
    const shipcost = Math.ceil(totalCost > 10000 ? 0: totalCost / 1500 * 50);

    return (
        <>
            {/* Container for the cart items */}
            <div id="container" className="container-fluid container-xxl ">
                {/* Row containing cart items */}
                <div className="row my-5">
                    {/* Column for cart item details */}
                    <div className="col-lg-8 my-4">
                        <div className="card">
                            <div className="card-header py-2">
                                <h2 className="text-center bg-light">Items in Cart</h2>
                            </div>
                            <div className="card-body">

                                {/* Individual cart item */}
                                {cartitem.map(item => (                                 
                                <div key={item._id} className="row align-items-center my-4">

                                        {/* Column for item image */}
                                        <div className=" col-md-3 text-center">
                                        <img className="img-fluid w-75" 
                                            src={item.imageurl}
                                alt="logo" />

                        </div>

                        {/* Column for item details */}
                        <div className=" col-md-5 py-4 text-center">
                            <h4 className="py-3">{item.pname}</h4>
                            <button type="button"
                                className="btn  btn-primary btn-sm me-1 mb-2"
                                data-mdb-toggle="tooltip"
                                title="Remove item" onClick={() => dispatch(setremoveitem({_id:item._id}))}>
                                    <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button type="button"
                                className="btn  btn-danger btn-sm mb-2"
                                data-mdb-toggle="tooltip"
                                title="Move to the wish list">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>

                        {/* Column for item quantity */}
                        <div className=" col-md-4">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary px-3 me-2"
                                    onClick={() => updateqty(item._id, item.qty - 1)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <div className="form-outline">
                                    <input id="form1" min="0" name="quantity"
                                        value={item.qty} readOnly type="number"
                                        className="form-control" />
                                </div>

                                <button className="btn btn-primary px-3 ms-2"
                                    onClick={() => updateqty(item._id, item.qty + 1)}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>

                            <p className="text-center mt-4 fs-4 fw-bold">Price:- {item.price}</p>
                        </div>
                    
                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Column for cart summary */}
        <div className="col-lg-4 my-4">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Summary</h2>
                </div>
                <div className="card-body justify-content-center text-center">
                    <ul className="list-group list-group-flush">
                        {/* Cart summary items */}
                        <li
                            className="list-group-item fs-5 d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Cost<span>Rs. {totalCost}</span>
                        </li>
                        <li
                            className="list-group-item fs-5 d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Shiping<span>Rs. {shipcost}</span>
                        </li>
                        <hr />
                        <li
                            className="list-group-item fs-4 fw-bold d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Total<span>Rs. {totalCost + shipcost}</span>
                        </li>
                    </ul>

                    {/* Checkout button */}
                    <button type="button"
                        className="btn btn-warning mt-4 fs-4 fw-bold btn-lg btn-block">Checkout</button>
                </div>
                <p className="text-danger mx-4">If order value is more then Rs.10,000 then no shiping cost charged.</p>
            </div>
        </div>
    </div>
</div>

        </>
    )
};

export default Cart;