import React from 'react';

import './sidebarSection.style.scss';
import {Link} from "react-router-dom";

const
    SidebarSection = ({itemList}) => {
    return <div className={'sidebarSection'}>
        {
            itemList.map((item,i)=>{
                return <Link key={i} to={item.des} className={`sidebarSection-item`}>{item.title}</Link>
            })
        }
    </div>
};

export default SidebarSection;
