import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDKxpfRLMyIhDrXBOG1Qus8IxiJtaqLeOo",
 authDomain: "nicole-inventory-management.firebaseapp.com",
 projectId: "nicole-inventory-management",
 storageBucket: "nicole-inventory-management.appspot.com",
 messagingSenderId: "84920163290",
 appId: "1:84920163290:web:77282da204955fb913bee3"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };