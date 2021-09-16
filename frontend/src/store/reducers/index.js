import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import listsReducer from "./listsReducer";
import errorsReducer from "./errorsReducer"

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  lists: listsReducer,
  erros: errorsReducer,
});
