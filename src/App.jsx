import { React, useState } from "react";
import NoTodos from "./components/NoTodos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Clean Room",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "Wash dishes",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 3,
      title: "Buy Products",
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [todoInput, setTodoInput] = useState("");
  const [idForTodo, setIdForTodo] = useState(4);

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

    setTodoInput("");
    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
  }

  function deleteTodo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  function handleInput(event) {
    setTodoInput(event.target.value);
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
    <div className="bg-gray-200 h-screen w-screen">
      <div className="w-2/4 p-4 m-auto text-gray-500">
        <div className="rounded-xl bg-white shadow-xl">
          <div className="flex justify-center items-center p-4 text-xl text-black font-semibold">
            <h2>To Do List</h2>
          </div>

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

          {todos.length > 0 ? (
            <ul className="justify-center items-center">
              {todos.map((todo, index) => (
                <div className="flex justify-center">
                  <li
                    key={todo.id}
                    className="w-2/4 justify-center border border-2 py-2 px-28 border-gray-400 mb-2 flex"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 w-5 h-5"
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
                        className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 p-2.5"
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
                        className="w-5 h-5 text-red-600"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            <NoTodos />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
