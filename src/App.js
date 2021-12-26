import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([{ id: 0, task: "eat", done: false }, { id: 1, task: "sleep", done: false }, { id: 2, task: "repeat", done: false }])
  const [text, setText] = useState('')

  function Delete(id) {
    setTodo(todo.filter(el => el.id !== id))
  }
  function Done(id) {
    setTodo(todo.map(el => el.id === id ? { ...el, done: !el.done } : el))
  }
  function Add() {
    setTodo([...todo, { id: Math.random(), task: text, done: false }])
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <input type='text' onChange={(event) => setText(event.target.value)}></input>
      <button onClick={() => Add()}>Add</button>
      {todo.map(el => <div> <li key={el.id}>{el.task}</li>
        <button onClick={() => Delete(el.id)}>Delete</button>
        <button onClick={() => Done(el.id)}>Done</button></div>)}


    </div>

  );

}

export default App;
