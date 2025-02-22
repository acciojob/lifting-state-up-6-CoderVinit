import React from 'react'

const TodoList = ({todos,handleComplete}) => {
  return (
    <div className='todo-list'>
      <h2>Child Component</h2>
      <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default TodoList