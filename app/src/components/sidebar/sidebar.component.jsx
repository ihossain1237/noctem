import React from 'react';

import './sidebar.style.scss';
import SidebarSection from "./sidebarSection/sidebarSection.component";

const Sidebar = () => {
    return <div className={`sidebar`}>
        <SidebarSection/>
    </div>
};

export default Sidebar;