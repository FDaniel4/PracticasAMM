// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb0azQdf-0JiRjuULh67oz-eYbiSx_PLw",
  authDomain: "fir-realtime-react-nativ-fbecb.firebaseapp.com",
  projectId: "fir-realtime-react-nativ-fbecb",
  storageBucket: "fir-realtime-react-nativ-fbecb.firebasestorage.app",
  messagingSenderId: "442815668194",
  appId: "1:442815668194:web:ee690584bee9d1afe963bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);