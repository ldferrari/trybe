import React, { Component } from 'react'

const StrictAccess = ({ Name }) => (

    <div>
      <h2> Users </h2>
      <p> 'Welcome', {Name} </p>
    </div>
  );
  
  /* const Users = ({ match }) => (
      <div>
          <h2>ID: {match.params.id}</h2>
      </div>
  ) */
  
  export default StrictAccess;
