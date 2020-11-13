import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnyMOdDNWv0MxqGl0VAAUocex_zsanwz8",
  authDomain: "clone-chllange.firebaseapp.com",
  databaseURL: "https://clone-chllange.firebaseio.com",
  projectId: "clone-chllange",
  storageBucket: "clone-chllange.appspot.com",
  messagingSenderId: "943974649034",
  appId: "1:943974649034:web:1266cd569e82faa3f67833",
  measurementId: "G-G5684MEXC7"
};

export default firebaseConfig;

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };