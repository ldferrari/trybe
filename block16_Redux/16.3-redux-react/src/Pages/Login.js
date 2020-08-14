import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {

  render() {
    return (
      <div>
      <h1>Login</h1>
        <div>
          <p>Email:</p> 
          <input className="text-input" type="email" name="email" value={'email'}
          onChange={this.trocarInput} maxLength="50" required/>
          <p>Senha:</p> 
          <input className="text-input" type="password" name="password" value={'password'}
          onChange={this.trocarInput} maxLength="50" required/><br />
          <Link to="/clientes"><button className="button">login</button></Link>
          <Link to="/Data"><button className="button">Dados</button></Link>
        </div>
      </div>
    )
  }
}
