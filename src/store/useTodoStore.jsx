import { create } from "zustand"

export const useTodoStore = create((set) => ({
  todos: [],

  // add new todo to list 
  addTodo: (text) => {
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }]
    }))
  },

  // remove todo based on id
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    }))
  },

  // check off / activate a todo based on id
  completeTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }))
  },
}))
