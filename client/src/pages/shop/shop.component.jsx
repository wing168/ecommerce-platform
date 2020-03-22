import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { isFetchingSelector, isCollectionLoadedSelector } from '../../redux/shop/shop.selectors';

import './shop.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
       const { fetchCollectionStartAsync } = this.props;
       
       fetchCollectionStartAsync();
    }

    render () {
        const { match, isFetching, isCollectionLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} /> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: isFetchingSelector,
    isCollectionLoaded: isCollectionLoadedSelector
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);