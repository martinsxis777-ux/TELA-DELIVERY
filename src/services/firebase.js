import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// A chave que você enviou é uma "Service Account" (usada para Back-end em Node.js/Python).
// Para o front-end em React, precisamos da configuração web (Web API Key).
// Substitua o 'sua_api_key_aqui' pela Web API Key real do seu projeto Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyCt4blW0Vf-REz8Y587SKEd0Otz_PGUvGw",
  authDomain: "trampo-tela.firebaseapp.com",
  projectId: "trampo-tela",
  storageBucket: "trampo-tela.firebasestorage.app",
  messagingSenderId: "891787716905",
  appId: "1:891787716905:web:f2be2badf1ca2c50daef38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
