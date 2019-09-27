import React from 'react';
import './navbar.style.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../redux/signIn/signIn.actions";
import CustomButton from "../custom-button/customButton.component";
import {ReactComponent as CartIcon} from "../../assets/shopping-bag.svg";

class Navbar extends React.Component {

    state={
        visible:false,


    };
    handleClick=()=>{

        if (!this.state.visible){
            document.addEventListener('click', this.handleOutsideNavbar, false);
        }else {
            document.removeEventListener('click', this.handleOutsideNavbar, false);
        }
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };
    handleOutsideNavbar=(e)=> {
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    };

    render() {

        const signInOrOut = this.props.isSignedIn ?<span onClick={()=>this.props.signOut()}>SIGN OUT</span> :<Link className={`nav-menu-item`} to={'/signIn'}>SIGN IN</Link>;



        return  <div className={`nav`}  ref={node => { this.node = node; }}>
                <Link className={`nav-brand`} to={`/`}>NOCTEM</Link>
                <div className={`nav-menu-desktop`}>
                    <Link className={`nav-expand-item`} to={'/products/men/:item'}>MEN</Link>
                    <Link className={`nav-expand-item`} to={'/products/women/:item'}>WOMEN</Link>
                    <Link className={`nav-expand-item`} to={'/products/girls/:item'}>GIRLS</Link>
                    <Link className={`nav-expand-item`} to={'/products/boys/:item'}>BOYS</Link>
                </div>
                <div className={`nav-menu`}>
                    {signInOrOut}
                    <Link className={`nav-menu-item`} to={'/cart'}><CartIcon className={`nav-menu-cartIcon`}/></Link>
                    <CustomButton customStyle={'nav-toggle'} onClick={this.handleClick}>{this.state.visible? <span className={'nav-toggle-arrow'}> &#10094;</span>:<span className={'nav-toggle-arrow'}>&#10095;</span>}</CustomButton>
                </div>
                <div className={`nav-expand`} style={{marginTop:this.state.visible?'0':'-1000%'}}>
                    <Link className={`nav-expand-item`} to={'/products/men/:item'}>MEN</Link>
                    <Link className={`nav-expand-item`} to={'/products/women/:item'}>WOMEN</Link>
                    <Link className={`nav-expand-item`} to={'/products/girls/:item'}>GIRLS</Link>
                    <Link className={`nav-expand-item`} to={'/products/boys/:item'}>BOYS</Link>
                </div>
            </div>}



}

const mapStateToProps = state=>{
  return{
      isSignedIn:state.signIn.isSignedIn,
      cart:state.cart
  }
};

export default connect(mapStateToProps,{signOut})(Navbar);