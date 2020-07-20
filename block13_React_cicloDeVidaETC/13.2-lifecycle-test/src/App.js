import React from 'react';
import './App.css';
//import Counter from './Counter';
import CounterDisplay from './CounterDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  //renderisar o Counter.js
  /* render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
      </div>
    );
  } */


  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
      </div>
    );
  }
}

export default App