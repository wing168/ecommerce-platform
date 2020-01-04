import React from 'react';

import './cart-items.styles.scss';

const CartItems = ({item: { imageUrl, price, name, quantity }}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='cart-detail'>
            <p className='name'>{name}</p>
            <p className='price'>{quantity} x ${price}</p>
        </div>

    </div>

);

export default CartItems;