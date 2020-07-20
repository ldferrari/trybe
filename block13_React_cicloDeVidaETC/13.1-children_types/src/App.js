import React, { Component } from 'react';
/* import MyList from "./MyList"; */

import Button from './Button';
import Alert from './Alert';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisableButton: !state.isDisableButton
      }
    ))
  }

  render() {
    return (

      /* // comentado test my list
      <div className='main'>
        <MyList>
          <li>Supimpa</li>
          <li>De Mais</li>
          SUPIMPA 2.0 - Melhor palavra!
          <button type="button" onClick={() => alert('show')} >test</button>
        </MyList>
      </div> */


      <div className='main'>
        <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Alert
            hideComponent={this.changeShowComponent}
            contentTitle="Modal"
            content="Coloque qualquer coisa aqui."
          />}
      </div>
    )
  }
}

export default App;