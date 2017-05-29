import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Number extends Component {
    constructor(props){
        super(props);
        this.state={value: 222};
    }
    
  render() {
    return (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
           
          <p>{this.state.value}</p>
              
      </div>
    );
  }
}

export default Number;
