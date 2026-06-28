import { useState } from 'react'
import { BrowserRouter,Routes,Outlet,Link,Route} from "react-router-dom";
import './App.css'
import Home from './PAGES/HomePage.jsx';
import React from "react";
import About from './About.jsx';
import AboutPage from './PAGES/AboutUsPage.jsx';
import Header from "./Title.jsx";
import Navigation from "./Nav.jsx";
import ContactsPage from './PAGES/ContactsPage.jsx';
import OurTeamPage from "./PAGES/OurTeamPage.jsx"
import OurWorkPage from "./PAGES/OurWorkPage.jsx"



function App() {

  return (
        <>
      <BrowserRouter>
        <Header />
        <Navigation/>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/abou" element={<About/>}/>
          </Route>
          <Route path="/About" element={<AboutPage />} />
          <Route path="Contact-Us" element={<ContactsPage/>}/>
          <Route path="Our_Team" element={<OurTeamPage/>}/>
          <Route path="Our_Work" element={<OurWorkPage/>}/>
        </Routes>
          
      </BrowserRouter>
        </>
  );
}

export default App
