import React from 'react';
import { connect } from 'react-redux';

import { removeItem, addItem, decreaseItem } from '../../redux/cart/cart.actions';


import './checkout-item.styles.scss';

const CheckOutItem = ({ item, removeItem, addItem, decreaseItem }) => {
    const { imageUrl, name, price, quantity } = item;
    console.log(item);
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <div className='name'>{name}</div>
        <div className='quantity'>
            <span className='add-decrease' onClick={() => decreaseItem(item)}>&#10094; </span>
            {quantity}
            <span className='add-decrease' onClick={() => addItem(item)}> &#10095;</span>
        </div>
        <div className='price'>${price}</div>
        <div className='remove-button' onClick={() => removeItem(item)}>&#10008;</div>

    </div>

    )};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);