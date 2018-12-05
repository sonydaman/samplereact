// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Button } from 'reactstrap';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Main />
        <Footer />
    </div>
    );
  }
}

export default App;
