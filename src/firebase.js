// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM51zcqPvaJEc9Wyt3MhTaXDx4UqvYMnI",
  authDomain: "it-insights.firebaseapp.com",
  databaseURL: "https://it-insights-default-rtdb.firebaseio.com",
  projectId: "it-insights",
  storageBucket: "it-insights.appspot.com",
  messagingSenderId: "406741128878",
  appId: "1:406741128878:web:448f2b2d3238d36a4c3f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);