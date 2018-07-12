import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Root from './Root';

const rootElement = document.getElementById('root');

firebase.initializeApp({
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET
});

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

firestore
  .collection('users')
  .add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  })
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });

render(<Root />, rootElement);
