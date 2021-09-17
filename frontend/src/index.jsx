import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import './styles/index.css'

import store from './store';
import firebase from "./backend/.firebase"
import App from './components/App';
import reportWebVitals from './reportWebVitals';


const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>

  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
