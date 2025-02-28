  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  import { getFirestore, collection, doc, addDoc, getDoc, updateDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBAJUE3cUfuLevk0bva_53Q2NxibIgWEio",
    authDomain: "prueba-firebase-abc0f.firebaseapp.com",
    projectId: "prueba-firebase-abc0f",
    storageBucket: "prueba-firebase-abc0f.appspot.com",
    messagingSenderId: "969887729540",
    appId: "1:969887729540:web:117fc4705594afa531ffd1",
    measurementId: "G-MV1ZL707WS"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(); 

  // Funciones del CRUD
  export const createTask = (title, description)=> addDoc(collection(db,"tasks"),{title,description});

  export const getTask = id => getDoc(doc(db,"tasks",id));
//callback funcion que se pasa como parametro de otra funcion  //snapshot = cada que hay un cambio en la base de datos
  export const onGetTask = callback => onSnapshot(collection(db,"tasks"), callback); 
  
  export const updateTask = (id, newFields) => updateDoc(doc(db,"tasks",id), newFields);

  export const deleteTask = id => deleteDoc(doc(db,"tasks",id));
