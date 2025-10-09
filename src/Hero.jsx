import React from 'react'
import Image1 from './assets/heroImage.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='bg-[url("./assets/heroImage5.jpg")] bg-center bg-cover bg-amber-60 w-full min-h-123 md:min-h-170 lg:min-h-[100vh] bg-no-repeat text-white pl-10 md:pl-24 lg:pl-27 xl:pl-32 flex flex-col justify-center'>
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
        <Link to="/about">about</Link>
      </button>
    </div>
  );
}

export default Hero
