import React, {useState} from 'react';
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState('') 
  const [todos, setTodos] = useState([])

  const handleNewTodo = (e) => {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  const handleTodo = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={handleTodo} className="list">
        <input placeholder="your todo..."
          onChange={handleNewTodo} />
        />
          <ul>
            <li>Pay bills</li>
            <li>work out</li>
          </ul>
      </form>
    </div>
  );
}

export default App;
