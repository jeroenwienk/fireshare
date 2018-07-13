import firebase from '@firebase/app';
import '@firebase/firestore';

export default function initDatabase() {
  const firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
}
