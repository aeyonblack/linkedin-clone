import { auth, provider, signInWithPopup } from '../firebase';
import { SET_USER } from './actionType';

export const setUser = (user) => ({
  type: SET_USER,
  user,
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
