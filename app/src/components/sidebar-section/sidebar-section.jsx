import React from 'react';

import './sidebar-section.scss';
import {Link} from "react-router-dom";

const SidebarSection = () => {
    return <div className={'sidebar-section'}>
        <h3 className={`sidebar-section-heading`}>Clothing</h3>
        <Link to={`/products/men/shirts`} className={'sidebar-section-item'}>SHIRTS</Link>
        <Link to={'/products/men/tShirts'} className={'sidebar-section-item'}>T-SHIRTS</Link>
        <Link to={'/products/men/polos'} className={'sidebar-section-item'}>POLOS</Link>
        <span className={'sidebar-section-item'}>SWEATSHIRTS</span>
        <span className={'sidebar-section-item'}>SUITS</span>
        <span className={'sidebar-section-item'}>JACKETS</span>
    </div>
};

export default SidebarSection;
