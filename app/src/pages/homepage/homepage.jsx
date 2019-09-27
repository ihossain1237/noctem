import React from 'react';
import {Link} from "react-router-dom";
import './homepage.scss';

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-item">
                <Link to={'/products/men/jacket'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1 className={`homepage-item-text`}><span> MEN</span></h1>
                </Link>
            </div>
            <div className="homepage-item">
                <Link to={'products/women/dress'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1 className={`homepage-item-text`}><span> WOMEN</span></h1>
                </Link>
            </div>
            <div className="homepage-item">
                <Link to={'products/boy/coat'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1 className={`homepage-item-text`}><span> BOYS</span></h1>
                </Link>
            </div>
            <div className="homepage-item">
                <Link to={'products/girl/legging'} style={{textDecoration: 'none', color: '#fff'}}>
                    <h1 className={`homepage-item-text`}><span> GIRLS</span></h1>
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