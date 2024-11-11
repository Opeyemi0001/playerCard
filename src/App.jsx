import { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <PlayerList />
    </div>
      
    </>
  )
}

export default App
