import { useState } from 'react'
import { BrowserRouter,Routes,Outlet,Link,Route } from "react-router-dom";
import './App.css'
import Header from './Title.jsx'
import Navigation from './Nav.jsx'
import Hero from './Hero.jsx';


function App() {

  return (
    <BrowserRouter>
    
    <>
      {/* <Header /> */}
        <Navigation />
        <Hero/>
    </>
    </BrowserRouter>
  )
}

export default App
