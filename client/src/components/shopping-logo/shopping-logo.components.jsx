import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { itemCountSelector } from '../../redux/cart/cart.selectors';

import './shopping-logo.styles.scss';

const ShoppingLogo = ({ toggleCartHidden, itemCounter }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <CartLogo className='shopping-icon' />
        <span className='item-count'>{itemCounter}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCounter: itemCountSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLogo);