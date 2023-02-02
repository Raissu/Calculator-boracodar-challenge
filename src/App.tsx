import { useState } from 'react'
import { Background } from './components/background'
import './style/global.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-b-180 bg-backgroundPurple">
      <Background />
    </div>
  )
}

