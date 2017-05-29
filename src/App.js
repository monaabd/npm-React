import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './ovning13.js'
import Counter from './ovning13Counter.js'


class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>Salam Mona</h1>
		<Number />
        <Counter />
      </div>
		
    );
  }
}

export default App;
