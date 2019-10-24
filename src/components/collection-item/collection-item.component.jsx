import React from 'react';

import '../collection-item/collection-item.styles.scss';

const CollectionItem = ({name, imageUrl, price}) => (
<div className='collection-item'>
    <div className='image'
        style={{backgroundImage: `url(${imageUrl})`}}
    >
    </div>
    <div className='collection-footer'>
        <span className='item-name'>{name}</span>
        <span className='price'>${price}</span>
    </div>
</div>
)

export default CollectionItem;