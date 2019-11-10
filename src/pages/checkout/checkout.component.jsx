import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckOut = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <span className='header-block'>Product</span>
            <span className='header-block'>Description</span>
            <span className='header-block'>Quantity</span>
            <span className='header-block'>Price</span>
            <span className='header-block'>Remove</span>
        </div>
        {
            cartItems.map(cartItem => <CheckOutItem key={cartItem.id} item={cartItem}/>)
        }
        <div className='total'>Total: ${cartTotal}</div>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    cartTotal: cartTotalSelector
});

export default connect(mapStateToProps)(CheckOut);
