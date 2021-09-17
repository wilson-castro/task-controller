import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "react-toastify/dist/ReactToastify.css";

import React, { Component } from 'react'
import { ToastContainer } from "react-toastify";
import "../styles/App.css"

import Main from './Main';
import Header from './Header';

class App extends Component {
  render() {

    return (
      <div className="App">
        <ToastContainer />
        <Header />
        <Main />
      </div>
    )
  }
}
export default (App)
