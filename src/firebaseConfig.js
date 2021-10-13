// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgqodSPUE3mzI_mxOcvnkM6dUZI_7MDIY",
  authDomain: "scl-017-burgen-queen.firebaseapp.com",
  databaseURL: "https://scl-017-burgen-queen-default-rtdb.firebaseio.com",
  projectId: "scl-017-burgen-queen",
  storageBucket: "scl-017-burgen-queen.appspot.com",
  messagingSenderId: "983827120233",
  appId: "1:983827120233:web:93d0becaefc8522a9f62f8",
  measurementId: "G-8DLP8MGMDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app 