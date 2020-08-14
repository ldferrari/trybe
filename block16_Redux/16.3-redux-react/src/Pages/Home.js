import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/login">login</Link>
        <h1>Formulário</h1>
      </div>
    )
  }
}