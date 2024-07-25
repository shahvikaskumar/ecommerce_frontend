import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        // Footer container with dark background and padding
        <div className="container-fluid bg-dark px-0 pb-5 pb-lg-0 px-lg-5 text-light">
            {/* Row containing links and information */}
            <div className="row mx-0 text-center justify-content-between p-2">
                
                {/* Column for Women's section */}
                <div className="col-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Women</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <NavLink to="/product/women/dresses" id="women_dresses"
                                className="text-decoration-none text-light fs-5">Dresses</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/women/pants" id="women_pants"
                                className="text-decoration-none text-light fs-5">Pants</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/women/skirts" id="women_skirts"
                                className="text-decoration-none text-light fs-5">Skirts</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/women/gowns" id="women_gowns"
                                className="text-decoration-none text-light fs-5">Gowns</NavLink>
                        </li>
                    </ul>
                </div>
                
                {/* Column for Men's section */}
                <div className="col-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Men</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <NavLink to="/product/men/shirts" id="men_shirts"
                                className="text-decoration-none text-light fs-5">Shirts</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/men/pants" id="men_pants"
                                className="text-decoration-none text-light fs-5">Pants</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/men/trousers" id="men_trousers"
                                className="text-decoration-none text-light fs-5">Trousers</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/men/jeans" id="men_jeans"
                                className="text-decoration-none text-light fs-5">Jeans</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Column for Kids section */}
                <div className="col-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Kids</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <NavLink to="/product/kids/tops" id="kid_tops"
                                className="text-decoration-none text-light fs-5">Tops</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/kids/bottoms" id="kid_bottoms"
                                className="text-decoration-none text-light fs-5">Bottoms</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/kids/onepc" id="kid_onepcs"
                                className="text-decoration-none text-light fs-5">One Pc</NavLink>
                        </li>
                        <li className="m-1">
                            <NavLink to="/product/kids/innerwear" id="kid_inners"
                                className="text-decoration-none text-light fs-5">Inners</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Column for Links section */}
                <div className="col-6 col-lg-3 p-4">
                    <h1 className="fs-2 fw-bold">Links</h1>
                    <ul className="list-unstyled m-3">
                        <li className="m-1">
                            <NavLink to="/home" id="homepage"
                                className="text-decoration-none text-light fs-5">Home</NavLink>
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

