import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de Intro a React.js', completed: false},
]

function App() {
  return (
    <React.Fragment>
  <h1>Bienvenido a mi aplicación de tareas!</h1>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
        <TodoItem />  
        ))}
        {[]}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;