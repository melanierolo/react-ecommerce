// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'e-commerce-coderhouse-89f26.firebaseapp.com',
  projectId: 'e-commerce-coderhouse-89f26',
  storageBucket: 'e-commerce-coderhouse-89f26.appspot.com',
  messagingSenderId: '215143990276',
  appId: '1:215143990276:web:92ab6bfb27bbfa5a22a151',
  measurementId: 'G-4DCF13S0N4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// init services
const db = getFirestore();

/* ------------Products-------------*/
// collection ref
const colRef = collection(db, 'products');

// queries
const queryOrdenById = query(colRef, orderBy('id', 'asc'));

// database firestore - collection data
export const getProducts = async () => getDocs(queryOrdenById);

export const getProductsByCategory = async (idCategory) => {
  const queryByIdCategory = query(
    colRef,
    where('idCategory', '==', idCategory)
  );
  return getDocs(queryByIdCategory);
};
