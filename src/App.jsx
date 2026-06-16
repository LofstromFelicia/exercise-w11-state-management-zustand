import React from "react"
import { TodoList } from "./components/TodoList"

export const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Task Manager with Zustand</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}
