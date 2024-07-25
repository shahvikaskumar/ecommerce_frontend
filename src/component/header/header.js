import React from 'react';
import './header.css';
import SearchModal from './elements/searchmodal';
import Bottommenu from './elements/bottommenu';
import Usercanvas from './elements/usercanvas';
import Menucanvas from './elements/menucanvas';
import Menubar from './elements/menubar';
import Navbarheader from './elements/navbarheader';
import Filtermodal from './elements/filtermodal';

const Header = () => {
    

    return(

        <div className='sticky-top'>
        <Navbarheader />
        <Menubar />
        <Menucanvas />
        <Usercanvas />
        <Bottommenu />
        <SearchModal /> 
        <Filtermodal />       
        </div>        
    );
}

export default Header;