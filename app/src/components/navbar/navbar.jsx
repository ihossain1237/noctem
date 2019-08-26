import React from 'react';

import './navbar.scss';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className={`navbar-left`}>
                <Link className={`navbar__item`} to={'/'}>NOCTEM</Link>
                <Link className={`navbar__item`} to={'/products/men/:item'}>MEN</Link>
                <Link className={`navbar__item`} to={'/women'}>WOMEN</Link>
                <Link className={`navbar__item`} to={'/'}>GIRLS</Link>
                <Link className={`navbar__item`} to={'/'}>BOYS</Link>
            </div>

            <div className={`navbar-right`}>

                <Link className={`navbar__item`} to={'/search'}>SEARCH</Link>
                <Link className={`navbar__item`} to={'/login'}>LOGIN</Link>
                <Link className={`navbar__item`} to={'/cart'}>CART</Link>
            </div>

        </div>
    );
};

export default Navbar;