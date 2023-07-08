import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-mono text-4xl font-extrabold'>Vite + React</h1>
      <div className="card">
        <button className='px-5 py-2 rounded-xl border bg-blue-50 text-blue-600 active:scale-90 duration-300 hover:border-blue-600 select-none' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='py-5'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
