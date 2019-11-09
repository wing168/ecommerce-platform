import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-buttons/custom-button.components';
import CartItems from '../cart-items/cart-items.component';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => <CartItems key={item.id} item={item} />)
            }
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>
        
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);