import React, { useState } from 'react'; // import react library and useState hook to control state of components
import TodoList from './components/TodoList'; // component
import TodoForm from './components/TodoForm'; // component
import './App.css'; // css file inport 

function App() {
  const [todos, setTodos] = useState([]); // initiallize array to hold todo items. useState is used to modify the todos

  // adds  a new todo
  const addTodo = task => { // task is the text of the todo being added
    if (!task) return; // checks to make sure task is a string
    const newTodo = { id: Date.now(), task, completed: false }; // creates new todo item with unique id, task/text, and uncompleted boolean
    setTodos([...todos, newTodo]); // new todo to the todos array 
  };

  const toggleTodo = id => { // takes in id as parameter
    setTodos( // updating todos array 
      todos.map(todo => // iteration 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo // crates new array with updated toggle values for selected todo items
      )
    );
  };

  const deleteTodo = id => { // take in id as parameter 
    setTodos(todos.filter(todo => todo.id !== id)); // create a new array with todo items that don't match passed in id 
  };

  return (
    <div className="app"> 
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
