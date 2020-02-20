import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoAdd from './components/ToDoAdd/ToDoAdd';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {
  return (
    <div className="App">
      <h2>To do list</h2>
      <ToDoAdd />
      <ToDoList />
    </div>
  );
}

export default App;
