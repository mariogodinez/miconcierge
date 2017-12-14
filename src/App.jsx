import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Login className="app-box"></Login>
      </div>
    );
  }
}

export default App;
