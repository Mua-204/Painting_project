import { useState } from 'react'
import { BrowserRouter,Routes,Outlet,Link,Route} from "react-router-dom";
import './App.css'
import Home from './PAGES/HomePage.jsx';
import React from "react";
import About from './About.jsx';
import AboutPage from './PAGES/AboutUsPage.jsx';



function App() {

  return (
        <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/abou" element={<About/>}/>
          </Route>
        <Route path="/About" element={<AboutPage/>}/>
        </Routes>
          
      </BrowserRouter>
        </>
  );
}

export default App
