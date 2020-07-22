import React from 'react';
import {Link} from 'react-router-dom'


const Users = ({ greetingMessage = 'Hi There', users, match }) => {
  const id = match.params.id

  if (id) return <h2>ID: {id}</h2>

  return (
  <div>
    {console.log(users)}
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    {users.map(user => <Link to={`/users/${user}`}>{user}<br/></Link>)}
  </div>
  )
};

/* const Users = ({ match }) => (
    <div>
        <h2>ID: {match.params.id}</h2>
    </div>
)
 */
export default Users;