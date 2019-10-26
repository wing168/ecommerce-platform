import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';


const Header = () => (
    <div className='header-container'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
            <span className='logo-name'>CRWN CLOTHING</span>
        </Link>

        <div className='nav-options'>
            <Link to='/shop' className='nav-link'>SHOP</Link>
            <Link to='/about' className='nav-link'>ABOUT US</Link>
            <Link to='/sign-in' className='nav-link'>SIGN IN</Link>

        </div>

    </div>
)

export default Header;
