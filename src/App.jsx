import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-10 bg-purple-500 px-8 py-8 flex">
      <h1 className="text-3xl font-bold text-red-400 underline grid">
        Hello world! Tailwindcss
      </h1>
      <p>Css Beinner class</p>
    </div>
  );
}

export default App
