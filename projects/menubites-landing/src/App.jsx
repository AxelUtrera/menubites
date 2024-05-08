import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import CallToAction from "./components/CallToAction.jsx";
import AviableOn from "./components/AviableOn.jsx";


export const homeRoute = '#home'
export const aboutRoute = '#about'
export const featureRoute = '#feature'
export const contactUsRoute = '#contact-us'


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
              <AviableOn/>
              <CallToAction/>
              <Footer></Footer>
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
