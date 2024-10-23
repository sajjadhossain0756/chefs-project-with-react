import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Bannar from './components/bannar/Bannar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <Bannar></Bannar>
    </div>
  )
}

export default App
