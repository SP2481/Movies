import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const FBprovider = new FacebookAuthProvider();

const provider = new GoogleAuthProvider();
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGGING_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

export function SignInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log("login");
    })
    .catch((err) => {
      console.log("goggle " + err);
    });
}

export function SignInWithGoogleRedirect() {
  signInWithRedirect(auth, provider)
    .then((res) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function SignInWithFacebook() {
  signInWithPopup(auth, FBprovider)
    .then((res) => {})
    .catch((err) => {
      console.log("facebook" + err);
    });
}
