import React from 'react';
import './navbar.style.scss';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../redux/signIn/signIn.actions";
import CustomButton from "../custom-button/customButton.component";
import {ReactComponent as CartIcon} from "../../assets/shopping-bag.svg";
import onClickOutsideHOC from "react-onclickoutside";
class Navbar extends React.Component {

    state={
        visible:false,
        cartCount:0,

    };
    handleClickOutside = evt => {
        this.setState({visible:false});
    };
    componentDidMount() {
        const currentCartCount =this.props.cart.items.length>0? this.props.cart.items.map(item=>item.itemCount).reduce((a,c)=>a+c):0;
        this.setState({cartCount:currentCartCount,cartIconStyle:{animation: 'none'}});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevCartCount = prevProps.cart.items.length>0? prevProps.cart.items.map(item=>item.itemCount).reduce((a,c)=>a+c):0;
        const currentCartCount =this.props.cart.items.length>0? this.props.cart.items.map(item=>item.itemCount).reduce((a,c)=>a+c):0;
        if (prevCartCount!==currentCartCount){
            this.setState({cartCount:currentCartCount});
        }


    }


    render() {
        const signInOrOut = this.props.isSignedIn ?
            <span onClick={()=>this.props.signOut()}>SIGN OUT</span>

            :<Link className={`nav-expand-item nav-link`} to={'/signIn'}>SIGN IN</Link>;
        return  <div className={`nav`} >
                <Link className={`nav-brand`} to={`/`}>NOCTEM</Link>
                <div className={`nav-menu-desktop`}>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/men/jacket'}>MEN</NavLink>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/women/dress'}>WOMEN</NavLink>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/boy/coat'}>BOYS</NavLink>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/girl/legging'}>GIRLS</NavLink>
                </div>
                <div className={`nav-menu`}>
                    {signInOrOut}
                    <div className={`nav-menu-item`}>
                        <Link  to={'/cart'}><CartIcon key={this.state.cartCount} className={`nav-menu-cartIcon`} />
                                <span key={this.state.cartCount+1} className={`nav-menu-cartCount`}>{this.state.cartCount}</span>

                        </Link>

                    </div>

                    <CustomButton customStyle={'nav-toggle'} onClick={()=>this.setState({visible:!this.state.visible})}>
                        {this.state.visible? <span className={'nav-toggle-arrow'}> &#10094;</span>
                            :<span className={'nav-toggle-arrow'}>&#10095;</span>}
                    </CustomButton>
                </div>
                <div className={`nav-expand`} style={{display:this.state.visible?'flex':'none'}}>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/men/jacket'}>MEN</NavLink>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/women/dress'}>WOMEN</NavLink>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/boy/coat'}>BOYS</NavLink>
                    <NavLink className={`nav-expand-item nav-link`} activeClassName={`nav-link-active`} to={'/products/girl/legging'}>GIRLS</NavLink>
                </div>
            </div>}



}

const mapStateToProps = state=>{
  return{
      isSignedIn:state.signIn.isSignedIn,
      cart:state.cart
  }
};

export default connect(mapStateToProps,{signOut})(onClickOutsideHOC(Navbar));