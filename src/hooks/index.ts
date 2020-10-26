import firebase from 'firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore';

import {Item as ItemModel} from '../types';

export function useItems(uid: string) {
  firebase.firestore().collection('users').doc(uid).set({}, {merge: true});
  return useCollectionData<ItemModel>(firebase.firestore().collection('users').doc(uid).collection('pages'))
}