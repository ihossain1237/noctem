import React from 'react';

import './sidebarSection.style.scss';
import {Link, NavLink} from "react-router-dom";

const
    SidebarSection = ({itemList}) => {
    return <div className={'sidebarSection'}>
        {
            itemList.map((item,i)=>{
                return <NavLink key={i} to={item.des} className={`sidebarSection-item nav-link`} activeClassName={`nav-link-active`}>{item.title}</NavLink>
            })
        }
    </div>
};

export default SidebarSection;
