// Importa o Firebase (se estiver usando módulos)
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_K7ESDO4c9ja_mFNF2RGjx7KOxWPzuXo",
    authDomain: "financas-8cf44.firebaseapp.com",
    projectId: "financas-8cf44",
    storageBucket: "financas-8cf44.appspot.com",
    messagingSenderId: "637122171830",
    appId: "1:637122171830:web:8c42d2169f6176cb0d6717",
    measurementId: "G-GZJSG5TMLS"
};

// Inicializa o Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Exporta as instâncias do Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const collection = firestore.collection;
export const addDoc = firestore.addDoc;