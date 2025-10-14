import React from "react";
import Header from "../Title.jsx";
import Navigation from "../Nav.jsx";
import Hero from "../Hero.jsx";

import { Route, Routes, Outlet, Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero variant="about">
        <div className="text-2xl font-medium mx-3">
          <Link to="/" className="text-gray-700">
            Home
          </Link>
          <span className="mx-2 font-bold text-gray-700">-</span>
          <Link to="/About" className="text-[#38048B]">
            About
          </Link>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-5 mb-7 pl-3 text-blue-700  md:leading-14 xl:leading-23 lg:leading-17">
          About Us
        </h1>
        {/* <p className="text-blue-700 font-bold text-[20px] md:text-2xl xl:text-3xl xl:font-extrabold ">
          We are the leading painting company in the region, dedicated to
          transforming spaces with quality and professionalism.
        </p> */}
      </Hero>
    </>
  );
};

export default AboutPage