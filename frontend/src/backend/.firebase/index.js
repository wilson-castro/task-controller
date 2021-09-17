import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8YKPm3jaO0PbeLhEyLom0mW47Jni24aM",
  authDomain: "tasks-controller.firebaseapp.com",
  projectId: "tasks-controller",
  storageBucket: "tasks-controller.appspot.com",
  messagingSenderId: "9414115228",
  appId: "1:9414115228:web:d20bf84dcfcf0799d21259"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase