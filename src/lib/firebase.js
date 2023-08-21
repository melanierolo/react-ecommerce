// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

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
/* idCat:
1: computers, 2: Peripherals 3: extra
*/

// collection ref
const colRef = collection(db, 'products');

// queries
const queryOrdenById = query(colRef, orderBy('id', 'asc'));

// database firestore - collection data
export const getProducts = async () => getDocs(queryOrdenById);

// Function that returns a whole category
export const getProductsByIdCategory = async (idCategory) => {
  const queryByIdCategory = query(
    colRef,
    where('idCategory', '==', idCategory)
  );
  return getDocs(queryByIdCategory);
};

// Function to get a single product
export const getOneProduct = (id) => {
  const productRef = doc(db, 'products', id);
  return getDoc(productRef);
};

// get URL of a image
export async function getUrlImage(fileLocation) {
  const storage = getStorage();
  const imageRef = ref(storage, fileLocation);
  const url = await getDownloadURL(imageRef);
  return url;
}
