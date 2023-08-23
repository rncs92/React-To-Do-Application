import { React, useEffect, useRef, useState } from "react";
import NoTodos from "./components/NoTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import { TodosConext } from "./context/TodosContext";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const nameInputEl = useRef(null);
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [idForTodo, setIdForTodo] = useLocalStorage("id", 1);
  const [filter, setFilter] = useState("all");

  function todosFiltered() {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isCompleted);
    }
  }

  function handleNameInput(event) {
    setName(event.target.value);
  }

  useEffect(() => {
    nameInputEl.current.focus();
  }, []);

  return (
    <TodosConext.Provider
      value={{
        todos,
        setTodos,
        idForTodo,
        setIdForTodo,
        todosFiltered,
        filter,
        setFilter,
      }}
    >
      <div className="bg-gray-200 h-screen w-screen">
        <div className="w-2/4 p-4 m-auto text-gray-500">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="flex justify-center items-center p-4 text-xl text-black font-semibold">
              <h2>To Do List</h2>
            </div>
            <form action="#" className="flex justify-center items-center">
              <input
                type="text"
                className="mb-2 w-2/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                placeholder="What is your name?"
                ref={nameInputEl}
                value={name}
                onChange={handleNameInput}
                required
              />
            </form>
            {name ? (
              <p className="flex justify-center mb-4 mt-2 text-lg font-normal">
                Hello, {name}!
              </p>
            ) : (
              <p className="flex justify-center mb-4 mt-2 text-lg font-normal">
                Hello, Guest!
              </p>
            )}

            <TodoForm />

            {todos.length > 0 ? <TodoList /> : <NoTodos />}
          </div>
        </div>
      </div>
    </TodosConext.Provider>
  );
}

export default App;
