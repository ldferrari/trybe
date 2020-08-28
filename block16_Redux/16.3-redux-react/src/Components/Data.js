import React from 'react';
import { connect } from 'react-redux';
import NenhumCliente from './Nenhum_cliente';

  const NewDate = ({usuarios}) => {
    console.log(usuarios)
    if (!usuarios[0]) return <NenhumCliente />;
    return (
      <div>
        {usuarios.map(usuario => {
          const { name, email, cpf, endereço, cidade, estado, tipo, password, resumo, cargo, descrição } = usuario;
          return(
            <div className="stateSave">
              Nome: {name},
              Email: {email},
              CPF: {cpf},
              Endereço: {endereço},
              Cidade: {cidade},
              Estado: {estado},
              Tipo: {tipo},
              Senha: {password},
              Resumo: {resumo},
              Cargo: {cargo},
              Descrição: {descrição},
            </div>
          )
        })}
      </div>
    )
  }

const mapStateToProps = (state) => ({
  usuarios: state.usuarios,
});

/* const mapDispatchToProps = (dispatch) => ({
  addToCurriculo: curriculo => dispatch(addToCurriculo(curriculo))
}); */

export default connect(mapStateToProps)(NewDate);