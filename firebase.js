import {initializeApp} from 'firebase/app'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMGUv_juo6sWHVr_CK2MP_Pmy7pXvfk6I",
  authDomain: "auth-app-eedf1.firebaseapp.com",
  projectId: "auth-app-eedf1",
  storageBucket: "auth-app-eedf1.appspot.com",
  messagingSenderId: "393563458822",
  appId: "1:393563458822:web:77288a5fe0ed18af36e287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };