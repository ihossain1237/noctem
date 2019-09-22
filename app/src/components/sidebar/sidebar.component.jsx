import React from 'react';

import './sidebar.style.scss';
import SidebarSection from "./sidebarSection/sidebarSection.component";
import CustomButton from "../custom-button/customButton.component";


class Sidebar extends React.Component{

    state={
        visible:false,

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
        console.log(this.state.visible);
        return <div className={`sidebar`} style={{transform:!this.state.visible?'translateX(-100%)':'translateX(0%)'}} ref={node=>{this.node=node}}>
            <div className={`sections`}>
                <SidebarSection/>
            </div>
            <CustomButton onClick={this.handleClick} customStyle={`sidebar-btn`}>{this.state.visible? <span> &#10094;</span>:<span>&#10095;</span>}</CustomButton>
        </div>
    };


}






export default Sidebar;