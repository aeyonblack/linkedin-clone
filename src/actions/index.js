import {
  auth,
  provider,
  signInWithPopup,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  collection,
  addDoc,
  query,
  getDocs,
} from '../firebase';

import db from '../firebase';

import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from './actionType';
import { orderBy } from '@firebase/firestore';

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user));
      })
      .catch((error) =>
        alert(`Auth failed with the following error:${error.message}`)
      );
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) =>
        alert(`Signout failed with the following error: ${error.message}`)
      );
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image) {
      const imageRef = ref(storage, `images/${payload.image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, payload.image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Uploading: ${progress}%`);
          switch (snapshot.state) {
            case 'running':
              console.log('Upload is running');
              break;
            case 'paused':
              console.log('Upload is paused');
              break;
            default:
              console.log('not running or uploading');
              break;
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          try {
            const docRef = await addDoc(collection(db, 'articles'), {
              user: {
                email: payload.user.email,
                name: payload.user.displayName,
                date: payload.timestamp,
                photo: payload.user.photoURL,
              },
              video: payload.video,
              sharedImg: downloadURL,
              comments: 0,
              description: payload.description,
            });
            console.log(`Document written with id: ${docRef.id}`);
          } catch (e) {
            console.error(`error loading document, ${e}`);
          } finally {
            dispatch(setLoading(false));
          }
        }
      );
    } else if (payload.video) {
      try {
        const docRef = addDoc(collection(db, 'articles'), {
          user: {
            email: payload.user.email,
            name: payload.user.displayName,
            date: payload.timestamp,
            photo: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: payload.image,
          comments: 0,
          description: payload.description,
        });
      } catch (e) {
        console.error(`error loading document: ${e}`);
      } finally {
        setTimeout(() => dispatch(setLoading(false)), 2000);
      }
    }
  };
}

export function getArticlesAPI() {
  return async (dispatch) => {
    let payload = [];
    const q = query(collection(db, 'articles'), orderBy('user.date', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      payload.push(doc.data());
    });
    dispatch(getArticles(payload));
  };
}
