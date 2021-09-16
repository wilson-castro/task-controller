import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";


import store from './store';
import firebase from "./backend/.firebase"
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './styles/global'

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
      <GlobalStyle />
    </ReactReduxFirebaseProvider>

  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
