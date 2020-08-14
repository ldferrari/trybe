import React, { Component } from 'react';   
import { Link } from 'react-router-dom'
import Nenhumcliente from '../Components/Nenhum_cliente';
import Data from '../Components/Data';

export default class Clientes_cadastrados extends Component {
    render() {
        return (
            <div>
                <Link to="/cadastro"><button className="button1">Cadastrar novo Currículo</button></Link>
                <Nenhumcliente />
                <Data />
            </div>
        )
    }
}
