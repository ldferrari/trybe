import React from 'react';

const Home = () => (
  <div>
    <h2> Home </h2>
    <p> My awesome Home component </p>

    <div>
      <p>Name</p>
      <input className="name" type="text"/>
      <p>Senha</p>
      <input className="senha" type="password" />
    </div>
  </div>
  
);

export default Home;