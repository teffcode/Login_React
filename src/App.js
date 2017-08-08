import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu.js';
import ButtonH from './components/buttonHome.js';
import ButtonCA from './components/buttonCreateAccount.js';
import PrincipalView from './components/principalView.js';

class App extends Component {

  render() {
    return (
      <div>
        <Menu>
          <ButtonH/>
          <ButtonCA/>
        </Menu>
        <PrincipalView/>
      </div>
    );
  }
}

export default App;
