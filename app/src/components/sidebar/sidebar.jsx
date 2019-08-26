import React from 'react';

import './sidebar.scss';
import SidebarSection from "../sidebar-section/sidebar-section";

const Sidebar = () => {
    return <div className={`sidebar`}>
        <SidebarSection/>
        <SidebarSection/>
        <SidebarSection/>
        <SidebarSection/>
        <SidebarSection/>
    </div>
};

export default Sidebar;