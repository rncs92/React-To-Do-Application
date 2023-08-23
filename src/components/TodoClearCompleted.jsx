import React, { useContext } from "react";
import { TodosConext } from "../context/TodosContext";

function TodoClearCompleted() {
  const { todos, setTodos } = useContext(TodosConext);

  function clearCompleted() {
    setTodos([...todos].filter((todo) => !todo.isCompleted));
  }

  return (
    <button
      onClick={clearCompleted}
      className="ml-16 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow"
    >
      Clear Completed
    </button>
  );
}

export default TodoClearCompleted;
