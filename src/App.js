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
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALa', completed: false},
  { text: 'UPS', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
        <TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />  
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;