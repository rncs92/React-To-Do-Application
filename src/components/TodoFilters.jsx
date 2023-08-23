import React, { useContext } from 'react'
import { TodosConext } from '../context/TodosContext'

function TodoFilters() {
    const { setFilter } = useContext(TodosConext);
    
  return (
    <div>
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
    </div>
  )
}

export default TodoFilters