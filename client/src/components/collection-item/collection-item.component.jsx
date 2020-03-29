import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-buttons/custom-button.components';
import { addItem } from '../../redux/cart/cart.actions'

import '../collection-item/collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {

    const { imageUrl, name, price } = item;
    return(
        <div className='collection-item'>
            <div className='image'
            style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
    
            <div className='collection-footer'>
                <span className='item-name'>{name}</span>
                <span className='price'>£{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);