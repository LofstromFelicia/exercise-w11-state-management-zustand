# 🚀 React Task Manager – State Management with Zustand

A lightweight, high-performance task management application built with React and Vite. This project demonstrates modern global state management using **Zustand** as an alternative to the traditional React Context API or Redux.

## 🛠️ Tech Stack & Architecture

* **Framework:** React (Vite)
* **State Management:** Zustand
* **Styling:** Vanilla CSS (Custom dark theme)

### Why Zustand?
In this project, Zustand acts as a centralized, global store. Unlike the React Context API, Zustand allows components to subscribe to state slices directly without wrapping the application shell in heavy `Providers`, eliminating unnecessary re-renders and keeping the codebase clean and modular.

---

## 📦 Project Structure

The state management architecture is separated from the UI logic following clean folder structures:

* `src/store/useTodoStore.jsx` – Houses the global Zustand store, initializing the `todos` array and exporting core mutation functions (`addTodo`, `deleteTodo`, `completeTodo`).
* `src/components/TodoList.jsx` – The structural component handling form submission and rendering the list by subscribing directly to the store.
* `src/App.jsx` – The clean, provider-free main application wrapper.

---

## 🚀 Features & Implementation Details

- **Global Store Setup:** Created a global hook using Zustand's `create` function to manage data mutations safely.
- **Dynamic Todo Additions:** Generates unique tracking IDs using `Date.now()` to insert new tasks instantly.
- **State Toggling:** Toggles complete/incomplete styling states cleanly using conditional CSS array mappings.
- **Direct Filtering:** Removes targeted components natively from the state array on trash-icon trigger.

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install