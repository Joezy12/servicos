import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './homepage'
import { Routes, Route } from 'react-router-dom'
import Validated from './validated'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Routes>
        <Route index element={<HomePage />} />
         <Route path='dadosDocumento' element={<Validated />} />
      </Routes>
    </section>
  )
}

export default App
