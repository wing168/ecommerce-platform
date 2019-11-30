import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



import CustomButton from '../custom-buttons/custom-button.components';
import CartItems from '../cart-items/cart-items.component';
import { cartItemsSelector } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
   
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length > 0 
                ? 
                cartItems.map(item => <CartItems key={item.id} item={item} />)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>

        {
            cartItems.length > 0
            ?
            <CustomButton onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT</CustomButton>
            :
            null
            }
        
    </div>
)};

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));