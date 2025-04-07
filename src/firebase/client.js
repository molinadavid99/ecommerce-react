import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyBL4T3tRPYYKrtlD31MIsmUPmkVBvFFW9Q",
    authDomain: "planet-fcf62.firebaseapp.com",
    projectId: "planet-fcf62",
    storageBucket: "planet-fcf62.firebasestorage.app",
    messagingSenderId: "319393061904",
    appId: "1:319393061904:web:e169c43f6a888fa5d07e95"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
