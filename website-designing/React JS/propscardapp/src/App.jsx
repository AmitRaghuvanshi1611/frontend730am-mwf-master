import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycard from './components/Mycard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row">
        <Mycard title="Card 1" description="This is the first card." />
        <Mycard title="Card 2" description="This is the second card." />
        <Mycard title="Card 3" description="This is the third card." />
      </div>
      </div>
    </>
  )
}

export default App
