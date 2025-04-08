import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; // Importa il modulo per il Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyAQ957uA02msXo6y8WAsQ9ulqujemhOOQs",
  authDomain: "il-capriccio-ccc27.firebaseapp.com",
  databaseURL: "https://il-capriccio-ccc27-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "il-capriccio-ccc27",
  storageBucket: "il-capriccio-ccc27.firebasestorage.app",
  messagingSenderId: "589937407473",
  appId: "1:589937407473:web:9ad5b2a8e1714276720050",
  measurementId: "G-4E081EM2FE"
};

// Inizializza Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Usa l'istanza esistente di Firebase
}

export const database = firebase.database(); // Esporta il database