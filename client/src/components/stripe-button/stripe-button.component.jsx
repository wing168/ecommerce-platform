import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_hVcB4fC3lMvEgQ8j6Uli7r8J00PM7VVg8q';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token 
            }
        }).then(response => {
            alert('Payment Successful');
            console.log(response);      
        }).catch(error => {
            console.log('Payment error: ', error)
            alert('There was an issue with your payment.')
        })
        
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='SOSA Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/JY5.svg'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency='gbp'        />
    )
};

export default StripeCheckOutButton;