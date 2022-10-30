import { useState } from 'react'
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import 'reset-css';
import './index.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  )
}

export default App
