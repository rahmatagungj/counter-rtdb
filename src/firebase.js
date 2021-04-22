import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6vfioCfXAThbzPEJbfZH0D37QrmAKffI",
  authDomain: "counter-rtdb.firebaseapp.com",
  databaseURL: "https://counter-rtdb-default-rtdb.firebaseio.com",
  projectId: "counter-rtdb",
  storageBucket: "counter-rtdb.appspot.com",
  messagingSenderId: "614905947290",
  appId: "1:614905947290:web:ef4902024276ec569fab23",
};

export default firebase.initializeApp(firebaseConfig);
