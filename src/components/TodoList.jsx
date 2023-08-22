import React, { useState } from "react";

function TodoList(props) {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <ul className="justify-center items-center">
        {props.todosFiltered(filter).map((todo, index) => (
          <div className="flex justify-center">
            <li
              key={todo.id}
              className="w-2/4 mb-2 py-2 flex justify-between border rounded-lg border-2 border-gray-300 shadow-md"
            >
              <input
                type="checkbox"
                className="ml-2 w-5 h-5"
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
                  className="w-4/5 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                  className="mr-2 w-5 h-5 text-red-600"
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
        <div className="w-2/4 p-4 flex justify-between mt-4 border-t-2 border-gray-300">
          <button
            onClick={props.completeAll}
            className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow"
          >
            Check All
          </button>
          <span className="text-lg">{props.remaining()} items remaining</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/4 p-4 flex border-t-2 border-gray-300">
          <button
            onClick={() => setFilter("all")}
            className="mr-1 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow focus:bg-gray-800 focus:text-white"
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className="mr-1 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow focus:bg-gray-800 focus:text-white"
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow focus:bg-gray-800 focus:text-white"
          >
            Completed
          </button>
          <button
            onClick={props.clearCompleted}
            className="ml-16 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-300 rounded shadow"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
