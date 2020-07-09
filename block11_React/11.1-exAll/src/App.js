import React from 'react';
import './App.css';

const value = ['VSCode', 'GitHub', 'HTML', 'CSS', 'JavaScript', 'React'];

function App() {
    
        const task = () => (<ul>{ value.map(val => <li>{val}</li>) }</ul>)
    return task
}

export default App;
