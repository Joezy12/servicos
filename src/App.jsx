import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './homepage'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </section>
  )
}

export default App
