import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width: '100%', display:"grid", placeItems: "center"}}>
        <Header></Header>
      </div>
    </>
  )
}

export default App