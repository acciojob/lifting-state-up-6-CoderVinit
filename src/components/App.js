
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deply the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
