import React, { useContext } from "react";
import { TodosConext } from "../context/TodosContext";

function TodoItemsRemaining() {
  const { todos } = useContext(TodosConext);

  function remaining() {
    return todos.filter((todo) => !todo.isCompleted).length;
  }

  return <span className="text-lg">{remaining()} items remaining</span>;
}

export default TodoItemsRemaining;
