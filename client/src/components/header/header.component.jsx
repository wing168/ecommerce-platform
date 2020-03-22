import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleHiddenSelector } from '../../redux/cart/cart.selectors';
import { currentUserSelector } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import ShoppingLogo from '../shopping-logo/shopping-logo.components';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './header.styles.scss';


const Header = ({ currentUser, hidden }) => (
    <div className='header-container'>
        <Link className='logo-container' to='/'>
            {/* <Logo className='logo'/> */}
            <span className='logo-name'>SOSA</span>
        </Link>

        <div className='nav-options'>
            <Link to='/shop' className='nav-link'>SHOP</Link>
            <Link to='/about' className='nav-link'>ABOUT US</Link>
            {currentUser 
            ? 
            <div className='signout' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/sign-in' className='nav-link'>SIGN IN</Link>
            }
            <ShoppingLogo />
            {hidden ? null : <CartDropdown />}
            

        </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: toggleHiddenSelector
});



export default connect(mapStateToProps)(Header);
