import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Props and Tailwind</h1>
     <Card cardName="Card 1"/>
     <Card cardName="Card 2"/>
    </>
  )
}

export default App
