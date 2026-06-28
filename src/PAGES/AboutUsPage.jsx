import React from "react";
import Hero from "../Hero.jsx";

import { Route, Routes, Outlet, Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Hero pageTitle="About Us" linkTo="/About" linkName="About" variant="about"/>
    </>
  );
};

export default AboutPage