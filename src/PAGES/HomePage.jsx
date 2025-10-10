import React from 'react'
import Header from "../Title.jsx";
import Navigation from "../Nav.jsx";
import Hero from "../Hero.jsx";
import Button from "../Button";
import { Route, Routes, Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero variant="home">
          <p className="text-blue-700 font-bold text-[20px] md:text-2xl xl:text-3xl xl:font-extrabold ">
            Welcome to interior wall painting
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-5 mb-7 border-[#38048b] border-l-16 pl-3 text-blue-700  md:leading-14 xl:leading-23 lg:leading-17">
            <span className="flex py-0">The Best Quality</span>{" "}
            <span className="flex">Painting For</span>
            <span className="flex py-0">Your Homes and Offices.</span>
          </h1>
          <div className="text-black ">
            <Button variant="herobutton">Discover More</Button>
          </div>
          <button>
            <Link to="/abou">about</Link>
            <Outlet />
          </button>
      </Hero>
    </>
  );
}

export default Home
