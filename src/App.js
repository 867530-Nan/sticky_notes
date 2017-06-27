import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickyForm from './StickyForm';
import StickyList from './StickyList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Footer />
        <StickyForm />
        <StickyList />

      </div>
    );
  }
}

export default App;
