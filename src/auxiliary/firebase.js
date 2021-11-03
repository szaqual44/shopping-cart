import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDo6Uzl9arGvsIrEzFDfYTLLGCufj29Z9Q",
    authDomain: "auth-project-dev-6405b.firebaseapp.com",
    projectId: "auth-project-dev-6405b",
    storageBucket: "auth-project-dev-6405b.appspot.com",
    messagingSenderId: "590835208360",
    appId: "1:590835208360:web:410c7510fe6cf7c5bdf29d",
    measurementId: "G-EHSE8YKCWP"
})


export const auth = app.auth()

export default app









