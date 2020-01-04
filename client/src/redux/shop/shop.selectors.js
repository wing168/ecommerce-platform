import { createSelector } from 'reselect';



const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);


export const collectionSelector = collectionUrlParam => createSelector(
    [collectionsSelector],
    collections => collections ? collections[collectionUrlParam] : null
);

export const collectionsSelectorForPreview = createSelector(
    [collectionsSelector],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const isFetchingSelector = createSelector(
    [shopSelector],
    shop => shop.isFetching
);

export const isCollectionLoadedSelector = createSelector(
    [shopSelector],
    shop => !!shop.collections
);