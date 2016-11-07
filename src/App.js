import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Territories from './Territories';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Territories />
      </MuiThemeProvider>
    );
  }
}

export default App;
