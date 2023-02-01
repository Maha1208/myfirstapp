
import React from 'react'
import { Routes, Route } from "react-router-dom"
import HOC from './components/HOC'

const App = () => {
    return (
    <div>
      <Routes>
        <Route path='/' element={<HOC/>}/>
      </Routes>
    </div>
  )
}

export default App