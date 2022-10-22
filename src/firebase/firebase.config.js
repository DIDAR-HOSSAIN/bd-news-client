// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvCY8HNmQnmNd03AA14xxY8e5n3xBIBUM",
    authDomain: "bd-news-client.firebaseapp.com",
    projectId: "bd-news-client",
    storageBucket: "bd-news-client.appspot.com",
    messagingSenderId: "711401498388",
    appId: "1:711401498388:web:1e34dd2701d77c18134401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;