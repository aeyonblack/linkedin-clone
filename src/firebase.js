// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@firebase/storage';

import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxCafbt0MsOX2_ZnRbYDw741W4D86qIVg',
  authDomain: 'linkedin-clone-ae374.firebaseapp.com',
  projectId: 'linkedin-clone-ae374',
  storageBucket: 'linkedin-clone-ae374.appspot.com',
  messagingSenderId: '596902771050',
  appId: '1:596902771050:web:9d381cf7a9ddb7dfbb4d13',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get a reference to the app database
const db = getFirestore(app);

// get a referenece to the app storage
const storage = getStorage(app);

/* authentication */
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  storage,
  ref,
  uploadBytesResumable,
  signInWithPopup,
  getDownloadURL,
  collection,
  addDoc,
  query,
  getDocs,
};

export default db;
