// Importe as funções necessárias do Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase (use apenas uma configuração)
const firebaseConfig = {
  apiKey: "AIzaSyD_K7ESDO4c9ja_mFNF2RGjx7KOxWPzuXo",
  authDomain: "financas-8cf44.firebaseapp.com",
  projectId: "financas-8cf44",
  storageBucket: "financas-8cf44.appspot.com",
  messagingSenderId: "637122171830",
  appId: "1:637122171830:web:8c42d2169f6176cb0d6717",
  measurementId: "G-GZJSG5TMLS"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app); // Firebase Analytics (opcional)

// Exporte as funções necessárias
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    signOut,
    onAuthStateChanged,
    firestore,
    collection,
    addDoc,
    doc,
    setDoc,
    getDocs,
    analytics // Exporte o analytics se for usar
};