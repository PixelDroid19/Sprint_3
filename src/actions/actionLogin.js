import { types } from "../types/types";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { google, facebook, github } from "../firebase/firebaseConfig";

export const loginEmailAndPasworld = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log(user.uid);
        console.log("Bienvenid@");
      })
      .catch((e) => {
        console.log(e);
        console.log("El usuario no existe");
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginGithub = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, github)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginSincrono = (id, displayName) => {
  return {
    type: types.login,
    payload: {
      id,
      displayName,
    },
  };
};

//Logout
export const logout = () =>{
  return( dispatch ) =>{
    const auth = getAuth();

    signOut(auth)
    .then(user =>{
      dispatch(logoutSincrono())
    })
    .catch(error =>{
      console.log(error);
    })
  }
}

export const logoutSincrono = () =>{
  return{
    type: types.logout,
  }
}