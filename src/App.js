import React, { Component } from 'react';

import Main from './components/Main'
import Navigation from './components/Navigation'
import Contacts from './components/Contacts'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation></Navigation>
        <Contacts></Contacts>
        <Main></Main>
      </div>
    )
  }
}

export default App;
