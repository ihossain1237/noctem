import React from 'react';

import './sidebarSection.style.scss';
import {Link} from "react-router-dom";

const SidebarSection = () => {
    return <div className={'sidebarSection'}>
        <h3 className={`sidebar-section-heading`}>Clothing</h3>
        <Link to={`/products/men/shirts`} className={'sidebarSection-item'}>SHIRTS</Link>
        <Link to={'/products/men/tShirts'} className={'sidebarSection-item'}>T-SHIRTS</Link>
        <Link to={'/products/men/polos'} className={'sidebarSection-item'}>POLOS</Link>
        <span className={'sidebarSection-item'}>SWEATSHIRTS</span>
        <span className={'sidebarSection-item'}>SUITS</span>
        <span className={'sidebarSection-item'}>JACKETS</span>
    </div>
};

export default SidebarSection;
