import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from "./components/Body.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div style={{
              width: '100%', display: "grid",
              placeItems: "center"
          }}>
              <Header></Header>
              <Body></Body>
          </div>
      </>
  )
}


//body{
//     background-image: linear-gradient(to right bottom, #FFFFFF, #D7D7D7);
//     width: 100%;
//     display: grid;
//     place-items: center;
// }
export default App
