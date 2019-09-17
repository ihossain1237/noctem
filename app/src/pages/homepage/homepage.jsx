import React from 'react';
import {Link} from "react-router-dom";
import './homepage.scss';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-item">
                <Link to={'/products/men/:item'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1><span>SHOP MEN</span></h1>
                </Link>
            </div>
            <div className="homepage-item">
                <Link to={'/women'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1><span>SHOP WOMEN</span></h1>
                </Link>
            </div>
            <div className="homepage-item">
                <Link to={'/boys'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1><span>SHOP BOYS</span></h1>
                </Link>
            </div>
            <div className="homepage-item">
                <Link to={'/girls'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1><span>SHOP GIRLS</span></h1>
                </Link>
            </div>
            {/*<div className="item">*/}
            {/*    <Link to={'/login'} style={{textDecoration: 'none', color: '#fff'}}>*/}
            {/*        <h1><span>LOG IN</span></h1>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    );
};

export default Homepage;