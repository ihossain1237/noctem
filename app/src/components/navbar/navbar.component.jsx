import React from 'react';
import './navbar.style.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../redux/signIn/signIn.actions";
import appData from "../../api/appData";
const Navbar = ({signOut,isSignedIn,cart}) => {

    const signInOrOut = isSignedIn? <span onClick={async ()=>{
        const {email,items} = cart;
        const body = JSON.stringify({email,items});
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        };
        const res = await appData.post('/cart/update',body,config);

        signOut();

    }}>SIGN OUT</span>:<Link className={`navbar__item`} to={'/signin'}>SIGN IN</Link>;
    return (
        <div className="navbar">
            <div className={`navbar-left`}>
                <Link className={`navbar__item`} to={'/'}>NOCTEM</Link>
                <Link className={`navbar__item`} to={'/products/men/:item'}>MEN</Link>
                <Link className={`navbar__item`} to={'/women'}>WOMEN</Link>
                <Link className={`navbar__item`} to={'/'}>GIRLS</Link>
                <Link className={`navbar__item`} to={'/'}>BOYS</Link>
            </div>

            <div className={`navbar-right`}>

                <Link className={`navbar__item`} to={'/search'}>SEARCH</Link>
                {signInOrOut}
                <Link className={`navbar__item`} to={'/cart'}>CART</Link>
            </div>

        </div>
    );
};

const mapStateToProps = state=>{
  return{
      isSignedIn:state.signIn.isSignedIn,
      cart:state.cart
  }
};

export default connect(mapStateToProps,{signOut})(Navbar);