import React from "react";

function TodoList(props) {
  return (
    <>
      <ul className="justify-center items-center">
        {props.todos.map((todo, index) => (
          <div className="flex justify-center">
            <li
              key={todo.id}
              className="w-2/4 justify-center border border-2 py-2 px-28 border-gray-400 mb-2 flex"
            >
              <input
                type="checkbox"
                className="mr-2 w-5 h-5"
                onChange={() => props.completeTodo(todo.id)}
                checked={todo.isCompleted ? true : false}
              />
              {!todo.isEditing ? (
                <span
                  className={`text-black ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                  onDoubleClick={() => props.editingTodo(todo.id)}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={(event) => props.updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      props.updateTodo(event, todo.id);
                    } else if (event.key === "Escape") {
                      props.editingTodo(todo.id);
                    }
                  }}
                  defaultValue={todo.title}
                  className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 p-2.5"
                  autoFocus
                />
              )}
              <button onClick={() => props.deleteTodo(todo.id)}>
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
      <div className="flex justify-center">
        <div className="w-2/4 p-4 flex px-6 justify-between mt-4 border-t-2 border-gray-400">
          <button className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">
            Check All
          </button>
          <span className="text-lg">3 items remaining</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/4 p-4 flex px-6 border-t-2 border-gray-400">
          <button className="mr-1 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">
            All
          </button>
          <button className="mr-1 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">
            Active
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">
            Completed
          </button>
          <button className="ml-12 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;