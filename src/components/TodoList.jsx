import React, { useContext, useState } from "react";
import TodoCompleteAllTodos from "./TodoCompleteAllTodos";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoClearCompleted from "./TodoClearCompleted";
import { TodosConext } from "../context/TodosContext";
import TodoFilters from "./TodoFilters";
import { CSSTransition } from "react-transition-group";
import '../App.css';

function TodoList() {
  const { todos, setTodos, todosFiltered } = useContext(TodosConext);
  const[showComponent, setShowComponent] = useState(true);
  const[showComponentTwo, setShowComponentTwo] = useState(true);

  function deleteTodo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  function completeTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function editingTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }

        todo.title = event.target.value;
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }


  return (
    <>
      <ul className="justify-center items-center">
        {todosFiltered().map((todo, index) => (
          <div className="flex justify-center">
            <li
              key={todo.id}
              className="w-2/4 mb-2 py-2 flex justify-between border rounded-lg border-2 border-gray-300 shadow-md"
            >
              <input
                type="checkbox"
                className="ml-2 w-5 h-5"
                onChange={() => completeTodo(todo.id)}
                checked={todo.isCompleted ? true : false}
              />
              {!todo.isEditing ? (
                <span
                  className={`text-black ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                  onDoubleClick={() => editingTodo(todo.id)}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={(event) => updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      updateTodo(event, todo.id);
                    } else if (event.key === "Escape") {
                      editingTodo(todo.id);
                    }
                  }}
                  defaultValue={todo.title}
                  className="w-4/5 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  autoFocus
                />
              )}
              <button onClick={() => deleteTodo(todo.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 w-5 h-5 text-red-600"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </li>
          </div>
        ))}
        <div className="flex justify-start ml-56 py-2">
        <button onClick={() => setShowComponent(!showComponent)} className="mr-2 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow">
        Toggle Features
      </button>
      <button onClick={() => setShowComponentTwo(!showComponentTwo)} className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow">
        Toggle Features Two
        </button>
      </div>
      </ul>
      <CSSTransition
        in={showComponent}
        timeout={300}
        classNames='slide-vertical'
        unmountOnExit
        >
      <div className="flex justify-center">
        <div className="w-2/4 p-4 flex justify-between mt-2 border-t-2 border-gray-300">
          <TodoCompleteAllTodos />
          <TodoItemsRemaining />
        </div>
      </div>
      </CSSTransition>
      <CSSTransition
        in={showComponentTwo}
        timeout={300}
        classNames='slide-vertical'
        unmountOnExit
        >
      <div className="flex justify-center">
        <div className="w-2/4 p-4 flex border-t-2 border-gray-300">
          <TodoFilters />
          <TodoClearCompleted />
        </div>
      </div>
      </CSSTransition>
    </>
  );
}

export default TodoList;
