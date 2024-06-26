import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        // Footer container with dark background and padding
        <div className="container-fluid bg-dark px-5 text-light">
            {/* Row containing links and information */}
            <div className="row text-center p-3">
                
                {/* Column for Women's section */}
                <div className="col-sm-12 col-md-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Women</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <a href="/" id="women_dresses"
                                className="text-decoration-none text-light fs-5">Dresses</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="women_pants"
                                className="text-decoration-none text-light fs-5">Pants</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="women_skirts"
                                className="text-decoration-none text-light fs-5">Skirts</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="women_gowns"
                                className="text-decoration-none text-light fs-5">Gowns</a>
                        </li>
                    </ul>
                </div>
                
                {/* Column for Men's section */}
                <div className="col-sm-12 col-md-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Men</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <a href="/" id="men_shirts"
                                className="text-decoration-none text-light fs-5">Shirts</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="men_pants"
                                className="text-decoration-none text-light fs-5">Pants</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="men_trousers"
                                className="text-decoration-none text-light fs-5">Trousers</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="men_jeans"
                                className="text-decoration-none text-light fs-5">Jeans</a>
                        </li>
                    </ul>
                </div>

                {/* Column for Kids section */}
                <div className="col-sm-12 col-md-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Kids</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <a href="/" id="kid_tops"
                                className="text-decoration-none text-light fs-5">Tops</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="kid_bottoms"
                                className="text-decoration-none text-light fs-5">Bottoms</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="kid_onepcs"
                                className="text-decoration-none text-light fs-5">One Pieces</a>
                        </li>
                        <li className="m-1">
                            <a href="/" id="kid_inners"
                                className="text-decoration-none text-light fs-5">Inners</a>
                        </li>
                    </ul>
                </div>

                {/* Column for Links section */}
                <div className="col-sm-12 col-md-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Links</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <a href="/" id="homepage"
                                className="text-decoration-none text-light fs-5">Home</a>
                        </li>
                        <li className="m-1">
                            <NavLink to="/login" id="loginpage"
                                className="text-decoration-none text-light fs-5">Login</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/contactus" id="contactpage"
                                className="text-decoration-none text-light fs-5">Contact</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/cart" id="cartpage"
                                className="text-decoration-none text-light fs-5">Cart</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Horizontal line separator */}
            <hr className="text-light m-0" />
            
            {/* Copyright information */}
            <p className="text-center fs-5 py-4 my-0">Copyright &copy; 2024 Arham Fashion</p>
        </div>
    );

}

export default Footer;

