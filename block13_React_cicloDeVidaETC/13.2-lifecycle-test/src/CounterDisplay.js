import React, { Component } from 'react'

export default class CounterDisplay extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value % 3 !== 0) return false;
        return true;
      }
    
      render() {
        return <div> counter: {this.props.value}</div>;
      }
}
