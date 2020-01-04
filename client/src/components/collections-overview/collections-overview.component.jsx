import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { collectionsSelectorForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>

    {
        collections.map(({id, ...otherSectionProps}) => (
        <CollectionPreview key={id} {...otherSectionProps} />
        ))
    }

    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: collectionsSelectorForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);