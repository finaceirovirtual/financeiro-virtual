// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // Adicionado onAuthStateChanged e signOut
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"; // Adicionado collection, getDocs e addDoc

const firebaseConfig = {
    apiKey: "AIzaSyD_K7ESDO4c9ja_mFNF2RGjx7KOxWPzuXo",
    authDomain: "financas-8cf44.firebaseapp.com",
    projectId: "financas-8cf44",
    storageBucket: "financas-8cf44.firebasestorage.app",
    messagingSenderId: "637122171830",
    appId: "1:637122171830:web:8c42d2169f6176cb0d6717",
    measurementId: "G-GZJSG5TMLS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Exporte tudo o que for necessário
export { 
    auth, 
    firestore, 
    onAuthStateChanged, 
    signOut, 
    collection, 
    getDocs, 
    addDoc 
};