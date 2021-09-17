import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import errorsReducer from "./errorsReducer"

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  erros: errorsReducer,
});
