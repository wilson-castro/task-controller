import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/App.css';
import React, { Component } from 'react'

import Footer from './Footer';
import Main from './Main';
import Header from './Header';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default (App)
