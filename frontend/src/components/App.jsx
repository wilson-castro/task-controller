import '../styles/App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import Footer from './Footer';
import Main from './Main';
import Header from './Header';


class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <Header />
        <Main lists={lists} />
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = state => ({ lists: state.lists })

export default connect(mapStateToProps)(App)
