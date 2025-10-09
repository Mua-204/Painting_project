import React from 'react'
import Header from "../Title.jsx";
import Navigation from "../Nav.jsx";
import Hero from "../Hero.jsx";
import { Route, Routes, Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
    </>
  );
}

export default Home
