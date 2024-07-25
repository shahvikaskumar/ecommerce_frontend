import { NavLink} from 'react-router-dom';

const Menubar = () => {
    return (
        <nav className='nav d-none d-lg-flex nav-pills justify-content-center bg-body-secondary bg-opacity-75 px-4 py-0'>
            
            {/* Home link */}
            <li className='nav-item mx-1'>
                <NavLink id='homepage'
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    aria-current='page'
                    to='/home'>Home</NavLink>
            </li>
            
            {/* All Product link */}
            <li className='nav-item mx-1'>
                <NavLink id='allproduct'
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    aria-current='page'
                    to='/product/allproduct'>All Product</NavLink>
            </li>

            {/* Women dropdown menu */}
            <li className='nav-item dropdown mx-1'>
                <NavLink className='nav-link dropdown-toggle py-1 text-black fs-5 fw-bold' 
                to="" data-bs-toggle="dropdown" id="Women"
                aria-expanded='false' role='button'>Women
                </NavLink>

                <ul className='dropdown-menu fs-5 fw-bold' aria-labelledby='Women'>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="all_women" 
                            to="/product/women/all">All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="women_dresses" 
                            to="/product/women/dresses">Dresses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="women_pants" 
                            to="/product/women/pants">Pants
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="women_skirts" 
                            to="/product/women/skirts">Skirts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="women_gowns" 
                            to="product/women/gowns">Gowns
                        </NavLink>
                    </li>
                </ul>
            </li>

            {/* Men dropdown menu */}
            <li className='nav-item dropdown mx-1'>
                <NavLink className='nav-link dropdown-toggle py-1 text-black fs-5 fw-bold'
                    to="" data-bs-toggle="dropdown" id="Men"                   
                    aria-expanded='false' role='button'>Men
                </NavLink>

                <ul className='dropdown-menu fs-5 fw-bold' aria-labelledby='Men'>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="all_men" 
                            to="/product/men/all">All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="men_shirts" 
                            to="/product/men/shirts">Shirts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="men_pants" 
                            to="/product/men/pants">Pants
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="men_trousers" 
                            to="/product/men/trousers">Trousers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="men_jeans" 
                            to="/product/men/jeans">Jeans
                        </NavLink>
                    </li>
                </ul>
            </li>

            {/* Kids dropdown menu */}
            <li className='nav-item dropdown mx-1'>
                <NavLink className='nav-link dropdown-toggle py-1 text-black fs-5 fw-bold'
                    to="" data-bs-toggle="dropdown" id="Kids"
                    aria-expanded='false' role='button'>Kids
                </NavLink>

                <ul className='dropdown-menu fs-5 fw-bold' aria-labelledby='Kids'>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="all_kid" 
                            to="/product/kids/all">All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="kid_tops" 
                            to="/product/kids/tops">Tops
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="kid_bottoms" 
                            to="/product/kids/bottoms">Bottoms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="kid_onepcs" 
                            to="/product/kids/onepc">One Pieces
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="kid_inners" 
                            to="/product/kids/innerwear">Innerwears
                        </NavLink>
                    </li>
                </ul>
            </li>

            {/* Contact link */}
            <li className='nav-item mx-1'>
                <NavLink id='contactpage' 
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    to="/contactus">Contact</NavLink>
            </li>
        </nav>

    )
};

export default Menubar;