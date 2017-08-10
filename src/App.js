import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu.js';
import Logo from './components/logo.js';
import ButtonCA from './components/buttonCreateAccount.js';
import Card from './components/cardLogin.js';

class App extends Component {

  render() {
    return (
      <div>
        <Menu>
          <Logo/>
          <ButtonCA white text="Login" />
          <ButtonCA style={{cursor: 'pointer'}}
          text="Create Account" />
        </Menu>
        <Card/>
      </div>
    );
  }
}

export default App;
