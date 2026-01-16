import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/student.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Amit" sub="ReactJS" age="21" />
    </>
  )
}

export default App
