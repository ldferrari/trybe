import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Clientes from './Pages/Clientes_cadastrados';
import Cadastro from './Pages/Cadastro';
import Data from './Components/Data';

function App() {
  return (
    <div>
      <div className="App-header">
      <Link to="/"><button className="button2">Home</button></Link>
      </div>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/Data" component={Data} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
