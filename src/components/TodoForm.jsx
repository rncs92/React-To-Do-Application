import React, { useContext, useState } from "react";
import { TodosConext } from "../context/TodosContext";

function TodoForm() {
  const {todos, setTodos, idForTodo, setIdForTodo} = useContext(TodosConext);
  const [todoInput, setTodoInput] = useState("");

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isCompleted: false,
      },
    ]);

    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);

    setTodoInput("");
  }

  return (
    <form
      action="#"
      onSubmit={addTodo}
      className="flex justify-center items-center"
    >
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        id="todo"
        className="mb-2 w-2/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        placeholder="What do you need to do?"
        required
      />
    </form>
  );
}

export default TodoForm;
