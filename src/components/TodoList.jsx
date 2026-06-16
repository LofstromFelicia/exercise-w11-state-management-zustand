import React, { useState } from "react"
import { useTodoStore } from "../store/useTodoStore"

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("")

  // fetch everything from zustand store
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return //dont send empty lines

    addTodo(inputValue)
    setInputValue("")
  }

  return (
    <div className="todo-container">
      <h2>Min Att Göra-Lista</h2>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Skriv en ny uppgift..."
        />
        <button type="submit" className="add-btn">Lägg till</button>
      </form>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">Inga uppgifter inlagda. Njut av dagen! ☀️</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
              <span onClick={() => completeTodo(todo.id)} className="todo-text">
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
