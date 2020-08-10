import React from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App App-header">
      <Home />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
