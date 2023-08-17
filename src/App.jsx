import { React, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(prevCount => prevCount + 1);
  } 

  function decrement() {
    setCount(prevCount => prevCount - 1);
  } 

  return (
    <div className='bg-gray-300 min-h-screen'>
      <div className='flex justify-center items-center mt-20'>
        <span>{ count } </span>
        </div>
        <div className='flex justify-center items-center mt-2'>
        <button onClick={ increment } className='mr-2 bg-green-600 py-2 px-8 border-r-4 border-green-800 rounded-l-lg drop-shadow-xl hover:bg-green-800'>+</button>
        <button onClick={ decrement } className='mr-2 bg-red-500 py-2 px-8 border-l-4 border-red-800 rounded-r-lg drop-shadow-xl hover:bg-red-800'>-</button>
        </div>
  </div>
  );
}

export default App;
