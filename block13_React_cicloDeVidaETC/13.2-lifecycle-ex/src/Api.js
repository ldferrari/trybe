import React, { Component } from 'react';
import './Api.css';

export default class Api extends Component {
    constructor() {
        super()
            this.state = {
                dog: "",
                name: "",
                array: []
            };
        this.NewDog = this.NewDog.bind(this)
        this.saveData = this.saveData.bind(this);
    }

    componentDidMount () {
        if(localStorage.URL){
            const storageParse = JSON.parse(localStorage.URL);
            const lestStorage = storageParse[storageParse.length - 1]
            return this.setState({ dog: lestStorage })
        }
        this.NewDog();
    }

    NewDog () {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(result => this.setState({ dog: result }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.dog.message.includes("terrier")) {
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dog !== this.state.dog) {
          return alert(this.state.dog.message.split("/")[4]);
        }
        localStorage.setItem("URL", JSON.stringify(this.state.array));
    }

    saveData() {
        const {
          dog: { message },
          name,
          array
        } = this.state;
        const dogData = { message, name };
        const newArray = [...array, dogData];
        this.setState({ array: newArray });
        this.setState({ name: "" });
      }

    render() {
        if (this.state.dog === "") return <div>login...</div>
        return (
            <div>
                <div>
                    <img className="img" src={this.state.dog.message} alt={this.state.dog.message} />
                </div>
                <button onClick={this.NewDog.bind(this)} >Mudar Doguinho</button>
                <button onClick={this.saveData}>Salvar doguinho!</button>
            </div>
        )
    }
}
