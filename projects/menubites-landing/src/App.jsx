import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from "./components/Body.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div style={{
              backgroundImage: 'linear-gradient(to right bottom, #FFFFFF, #D7D7D7)',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center left',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              width: '100%', display: "grid",
              placeItems: "center"
          }}>
              <Header></Header>
              <Body></Body>
          </div>
      </>
  )
}

export default App
