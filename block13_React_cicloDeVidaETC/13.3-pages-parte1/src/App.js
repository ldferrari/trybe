import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/users"> Users </Link>
        
          <Switch>greetingMessage
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/users"><Users greetingMessage={"Good Morning"}></Users></Route> */}
            <Route path="/users/:id" component={Users} />
            <Route path="/users" render={(props) => <Users {...props} greetingMessage={"Good Morning"} users = {['1', '2', '3']} />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
