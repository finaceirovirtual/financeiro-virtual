// Importe o Firebase usando o CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider, // Adicionado para suporte ao Google
    signInWithPopup // Adicionado para suporte ao Google
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_K7ESDO4c9ja_mFNF2RGjx7KOxWPzuXo",
    authDomain: "financas-8cf44.firebaseapp.com",
    projectId: "financas-8cf44",
    storageBucket: "financas-8cf44.firebasestorage.app",
    messagingSenderId: "637122171830",
    appId: "1:637122171830:web:06c3539aa3cf20780d6717",
    measurementId: "G-MQDBZHZ9N5"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta as funcionalidades necessárias
export { 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider, // Exportado para uso no login com Google
    signInWithPopup, // Exportado para uso no login com Google
    db
};