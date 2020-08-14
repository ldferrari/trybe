import React from 'react';
import { connect } from 'react-redux';
//import NenhumCliente from './Nenhum_cliente';

  const NewDate = (usuarios) => {
    //const { usuarios } = this.props;
    console.log(usuarios)
    /* const usuarioS = usuarios.usuarios.usuarios;
    console.log({...usuarioS})
    for (let i = 0; i < {...usuarioS}; i++){
    console.log(i);
    }; */
    return (
      <div className="stateSave">
        Nome: {usuarios.usuarios.usuarios.name},
        Email: {usuarios.email},
        CPF: {usuarios.cpf},
        Endereço: {usuarios.endereço},
        Cidade: {usuarios.cidade},
        Estado: {usuarios.estado},
        Tipo: {usuarios.tipo},
        Senha: {usuarios.tipo},
        Resumo: {usuarios.resumo},
        Cargo: {usuarios.cargo},
        Descrição: {usuarios.descrição},
      </div>
    )
  }

const mapStateToProps = (state) => ({
  usuarios: state,
});

/* const mapDispatchToProps = (dispatch) => ({
  addToCurriculo: curriculo => dispatch(addToCurriculo(curriculo))
}); */

export default connect(mapStateToProps)(NewDate);