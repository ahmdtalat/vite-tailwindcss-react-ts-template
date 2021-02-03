import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen w-full  justify-center bg-gray-700 '>
      <header className='flex flex-col items-center '>
        <img src={logo} className='h-80 w-80 mt-16   animate-pulse' alt='logo' />
        <p className='text-3xl text-gray-400'>Hello Vite + React + tailwindcss</p>
        <p className='my-4'>
          <button
            className='bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-4  rounded-md font-semibold text-gray-100'
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>

        <p className='my-4'>
          <a
            className='text-lg text-gray-300 font-mono '
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='text-lg text-gray-300 font-mono '
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className='text-lg text-gray-300 font-mono '
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn TailwindCss
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
