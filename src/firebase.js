import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAddaXqmCB81rMLsQn-n9A3xFwLCGGc2oA",
    authDomain: "todo-crud-863a8.firebaseapp.com",
    projectId: "todo-crud-863a8",
    storageBucket: "todo-crud-863a8.appspot.com",
    messagingSenderId: "366862541195",
    appId: "1:366862541195:web:37969cd5a82134a42e8f8e"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };