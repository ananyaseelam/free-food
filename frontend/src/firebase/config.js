import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFXZHsVhPGyOmtxW3FGIepaDJ6AVFkQqI',
  authDomain: 'free-food-b7929.firebaseapp.com',
  databaseURL: 'https://free-food-b7929.firebaseio.com',
  projectId: 'free-food-b7929',
  storageBucket: 'free-food-b7929.appspot.com',
  messagingSenderId: '519436485702',
  appId: '1:519436485702:android:df1e1cfcd7ccf4a3aab647',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
