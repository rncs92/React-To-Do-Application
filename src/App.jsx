import { React, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Clean Room",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Wash dishes",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Buy Products",
      isCompleted: false,
    },
  ]);

  const [todoInput, setTodoInput] = useState("");
  const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(event) {
    event.preventDefault();

    if(todoInput.trim().length === 0) {
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
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-center text-gray-500">
        <div className="w-2/4 mt-6">
          <div class="rounded-xl bg-white shadow-xl">
            <div className="flex justify-center items-center p-4 text-xl text-black font-semibold">
              <h2>To Do List</h2>
            </div>
            <div className="w-3/4 flex justify-center">
              <ul>
                <form action="#" onSubmit={addTodo}>
                  <input
                    type="text"
                    value={todoInput}
                    onChange={handleInput}
                    id="todo"
                    className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full   focus:border-blue-500 p-2.5"
                    placeholder="What do you need to do?"
                    required
                  />
                </form>
                {todos.map((todo, index) => (
                  <li
                    key={todo.id}
                    className="border border-2 py-2 px-28 border-gray-400 mb-2 flex"
                  >
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2 w-5 h-5" />
                    </div>
                    {todo.title}
                    {todo.isCompleted}
                    <button>
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
