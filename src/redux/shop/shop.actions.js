import { shopActionTypes } from './shop.types';

import { firestore, transformFirebaseDataToUse } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionTransformed => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionTransformed
});

export const fetchCollectionFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        
        const collectionsRef = firestore.collection('collection');
        dispatch(fetchCollectionStart());
        
        collectionsRef.get()
        
        .then(snapshot => {
            const collectionTransformed = transformFirebaseDataToUse(snapshot);
            dispatch(fetchCollectionSuccess(collectionTransformed)); 
        })

        .catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
}