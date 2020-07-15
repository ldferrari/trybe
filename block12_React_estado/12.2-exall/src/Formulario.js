import React from "react";

const states = [
    ["ESTADO"],
    ["Acre"],
    ["Alagoas"],
    ["Amapá"],
    ["Amazonas"],
    ["Bahia"],
    ["Ceará"],
    ["Distrito Federal"],
    ["Espírito Santo"],
    ["Goiás"],
    ["Maranhão"],
    ["Mato Grosso"],
    ["Mato Grosso do Sul"],
    ["Minas Gerais"],
    ["Pará"],
    ["Paraíba"],
    ["Paraná"],
    ["Pernambuco"],
    ["Piauí"],
    ["Rio de Janeiro"],
    ["Rio Grande do Norte"],
    ["Rio Grande do Sul"],
    ["Rondônia"],
    ["Roraima"],
    ["Santa Catarina"],
    ["São Paulo"],
    ["Sergipe"],
    ["Tocantins"]
  ];

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            cpf:'',
            endereço:'',
            cidade:'',
            estado:'',
            tipo:'',
            resumo:'',
            cargo:'',
            descrição:'',
            ativo: false
        }
    }

    trocarInput = event => {
        const { name, value } = event.target;
        this.setState((state) =>({
          [name]: value,
        }))
    }

    renderInfo = () => {
        if (this.state.ativo) {
        return (
            <div className="stateSave">
                Nome: {this.state.name},<br></br>
                Email: {this.state.email},<br></br>
                CPF: {this.state.cpf},<br></br>
                Endereço: {this.state.endereço},<br></br>
                Cidade: {this.state.cidade},<br></br>
                Estado: {this.state.estado},<br></br>
                Tipo: {this.state.tipo},<br></br>
                Resumo: {this.state.resumo},<br></br>
                Cargo: {this.state.cargo},<br></br>
                Descrição: {this.state.descrição},<br></br>
            </div>
            )
        }    
    }


    render() {
        return (
            <div>
                <h1>Cadastro de Currículo</h1>
                <h2>Dados Pessoais</h2>
                <div>
                    <p>Nome completo:</p> 
                    <input className="text-input" type="text" name="name" value={this.state.name}
                    onChange={this.trocarInput} maxLength="40" style={{ textTransform: 'uppercase'}} required/>
                    <p>Email:</p> 
                    <input className="text-input" type="email" name="email" value={this.state.email}
                    onChange={this.trocarInput} maxLength="50" required/>
                    <p>CPF:</p> 
                    <input className="text-input" type="text" name="cpf" value={this.state.cpf}
                    onChange={this.trocarInput} maxLength="11" required/>
                    <p>Endereço:</p> 
                    <input className="text-input" type="text" name="endereço" value={this.state.endereço}
                    onChange={this.trocarInput} maxLength="200" required/>
                    <p>Cidade:</p> 
                    <input className="text-input" type="text" name="cidade" value={this.state.cidade}
                    onChange={this.trocarInput} maxLength="28" required/>
                    <p>Estado:</p> 
                    <select className="text-input" type="ComboBox" name="estado" value={this.state.estado}
                    onChange={this.trocarInput} required>
                        {states.map((value, key) => <option key={key}>{value}</option>)}
                    </select>
                    <p>Casa: <input type="radio" name="tipo" value={this.state.casa}
                    onChange={this.trocarInput} required/>
                    Apartamento: <input type="radio" name="tipo" value={this.state.Apartamento}
                    onChange={this.trocarInput} required/> </p>
                </div>
                <br></br>
                <h2>Dados do seu último emprego</h2>
                <div>
                    <p>Resumo do Currículo:</p>
                    <textarea className="resumo" type="text" name="resumo" value={this.state.resumo}
                    onChange={this.trocarInput} maxLength="1000" required/> 
                    <p>Cargo:</p>
                    <input className="text-input" type="text" name="cargo" value={this.state.cargo}
                    onChange={this.trocarInput} maxLength="40" required/> 
                    <p>Descrição do cargo:</p> 
                    <textarea className="text-input" type="text" name="descrição" value={this.state.descrição}
                    onChange={this.trocarInput} maxLength="500" required/>
                </div>
                <button className="button" onClick={() => this.setState((state) =>({
                    ativo: true,}))}>Salvar</button>
                <div>
                    {this.renderInfo()}
                </div>
            </div>
        );
    }
}

export default Formulario