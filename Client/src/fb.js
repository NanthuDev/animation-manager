// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfof5Hq90rJ5gAJRBz7DvD86yxe6jvs8k",
  authDomain: "animation-c05f7.firebaseapp.com",
  projectId: "animation-c05f7",
  storageBucket: "animation-c05f7.appspot.com",
  messagingSenderId: "132193804998",
  appId: "1:132193804998:web:daad9647e9e35df913edc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)