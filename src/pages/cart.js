import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    return (
        <>
            {/* Container for the cart items */}
<div id="container" className="container-fluid container-xxl ">
    {/* Row containing cart items */}
    <div
        className="row my-5">
        {/* Column for cart item details */}
        <div className="col-lg-8 my-4">
            <div className="card">
                <div className="card-header py-2">
                    <h2 className="text-center bg-light">Items in Cart</h2>
                </div>
                <div className="card-body">
                    {/* Individual cart item */}
                    <div className="row align-items-center">

                        {/* Column for item image */}
                        <div
                            className=" col-md-3 text-center">
                            <img className="img-fluid" style={{maxheight:"230px"}}
                                src="/Images/Men/Shirts/4.jpg"
                                alt="logo" />

                        </div>

                        {/* Column for item details */}
                        <div className=" col-md-5 py-4 text-center">
                            <h4 className="py-3">Moda Rapido Shirt</h4>
                            <button type="button"
                                className="btn  btn-primary btn-sm me-1 mb-2"
                                data-mdb-toggle="tooltip"
                                title="Remove item">
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
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <div className="form-outline">
                                    <input id="form1" min="0" name="quantity"
                                        value="1" type="number"
                                        className="form-control" />
                                </div>

                                <button className="btn btn-primary px-3 ms-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
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
                            Cost<span>Rs. 450</span>
                        </li>
                        <li
                            className="list-group-item fs-5 d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Shiping<span>Rs. 50</span>
                        </li>
                        <hr />
                        <li
                            className="list-group-item fs-4 fw-bold d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Total<span>Rs. 500</span>
                        </li>
                    </ul>

                    {/* Checkout button */}
                    <button type="button"
                        className="btn btn-warning mt-4 fs-4 fw-bold btn-lg btn-block">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
};

export default Cart;