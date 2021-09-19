import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import listsReducers from "./listsReducers";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  lists: listsReducers
});
