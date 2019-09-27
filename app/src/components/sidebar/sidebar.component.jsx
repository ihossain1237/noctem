import React from 'react';

import './sidebar.style.scss';
import SidebarSection from "./sidebarSection/sidebarSection.component";
import CustomButton from "../custom-button/customButton.component";


class Sidebar extends React.Component{

    state={
        visible:false,
        men:[
            {
                title:'JACKETS',
                des:'/products/men/jacket'
            },
            {
                title:'SHIRTS',
                des:'/products/men/shirt'
            },
            {
                title:'TROUSER',
                des:'/products/men/trouser'
            },
            {
                title:'T-SHIRTS',
                des:'/products/men/t-shirt'
            },
            {
                title:'JEANS',
                des:'/products/men/jeans'
            }
        ],
        women:[
            {
                title:"DRESSES",
                des:"/products/women/dress"
            },
            {
                title:"JACKETS",
                des:"/products/women/jacket"
            },
            {
                title:"JEANS",
                des:"/products/women/jeans"
            },
            {
                title:"SUITS",
                des:"/products/women/suit"
            },

        ],
        boy:[
            {
                title:"COATS",
                des:"/products/boy/coat"
            },
            {
                title:"JACKETS",
                des:"/products/boy/jacket"
            },
            {
                title:"SHIRTS",
                des:"/products/boy/shirt"
            },
            {
                title:"T-SHIRTS",
                des:"/products/boy/t-shirt"
            },

        ],
        girl:[
            {
                title:"LEGGINGS",
                des:"/products/girl/legging"
            },
            {
                title:"SHIRTS",
                des:"/products/girl/shirt"
            },
            {
                title:"JEANS",
                des:"/products/girl/jeans"
            },
            {
                title:"SKIRTS",
                des:"/products/girl/skirt"
            },
            {
                title:"T-SHIRTS",
                des:"/products/girl/t-shirt"
            },
        ]

    };
    
    handleClick=()=>{

        if (!this.state.visible){
            document.addEventListener('click', this.handleOutsideSidebar, false);
        }else {
            document.removeEventListener('click', this.handleOutsideSidebar, false);
        }
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };
    handleOutsideSidebar=(e)=> {
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    };

    render() {
        console.log(this.state[this.props.category]);
        return <div className={`sidebar`} style={{transform:!this.state.visible?'translateX(-100%)':'translateX(0%)'}} ref={node=>{this.node=node}}>
            <div className={`sections`}>
                <SidebarSection itemList={this.state[this.props.category]}/>
            </div>
            <CustomButton onClick={this.handleClick} customStyle={`sidebar-btn`}>{this.state.visible? <span> &#10094;</span>:<span> &#10095;</span>}</CustomButton>
        </div>
    };


}







export default Sidebar;