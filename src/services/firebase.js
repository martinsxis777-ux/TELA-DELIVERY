import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// A chave que você enviou é uma "Service Account" (usada para Back-end em Node.js/Python).
// Para o front-end em React, precisamos da configuração web (Web API Key).
// Substitua o 'sua_api_key_aqui' pela Web API Key real do seu projeto Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDxByd1WfVyGSVlwQbnvd05lTJ2AxixJ5w",
    authDomain: "cardapio-f5b6e.firebaseapp.com",
    projectId: "cardapio-f5b6e",
    storageBucket: "cardapio-f5b6e.firebasestorage.app",
    messagingSenderId: "889279350354",
    appId: "1:889279350354:web:e2b8eb0f38b3a55e15818b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
