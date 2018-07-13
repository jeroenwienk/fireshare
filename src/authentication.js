import firebase from '@firebase/app';
import '@firebase/auth';

import authenticate from './actions/auth/authenticate';
import unauthenticate from './actions/auth/unauthenticate';

class Authentication {
  constructor() {
    this.store = null;
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.googleProvider.setCustomParameters({ prompt: 'select_account' });
  }

  setStore(store) {
    this.store = store;
  }

  setListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.store.dispatch(authenticate(user));
      } else {
        this.store.dispatch(unauthenticate());
      }
    });
  }

  authenticateWithGoogle() {
    return firebase.auth().signInWithPopup(this.googleProvider);
  }

  unauthenticate() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  }
}

export default new Authentication();
