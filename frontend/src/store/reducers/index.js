import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import errorsReducer from "./errorsReducer"
import listsReducers from "./listsReducers";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  erros: errorsReducer,
  lists: listsReducers
});
