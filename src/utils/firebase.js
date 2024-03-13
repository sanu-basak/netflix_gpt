// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi-8NF6ziD79NAEO833oqi9bFQ5HT28p8",
  authDomain: "netflixgpt-46172.firebaseapp.com",
  projectId: "netflixgpt-46172",
  storageBucket: "netflixgpt-46172.appspot.com",
  messagingSenderId: "271901402491",
  appId: "1:271901402491:web:4a204124e21d1c19a089de",
  measurementId: "G-W48XVH1QC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth();

// firebase login
// firebase init
// firebase deploy
// firebase deploy --only hosting:netflixgpt2-1d469