import React, { useContext } from "react";
import { TodosConext } from "../context/TodosContext";

function TodoCompleteAllTodos() {
  const { todos, setTodos } = useContext(TodosConext);

  function completeAll() {
    const updatedTodos = todos.map((todo) => {
      if (!todo.isCompleted) {
        todo.isCompleted = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <button
      onClick={completeAll}
      className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow"
    >
      Check All
    </button>
  );
}

export default TodoCompleteAllTodos;
