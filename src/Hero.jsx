import React from 'react'
// import Image1 from './assets/heroImage.jpg'
import Button from './Button'
import { Link,Outlet } from 'react-router-dom'


const Hero = ({ children, variant,pageTitle,linkTo,linkName }) => {
  const variants = {
        default:
      'bg-[url("./assets/heroImage8.jpg")] bg-center bg-cover bg-amber-60 w-full min-h-110 md:min-h-92 lg:min-h-[53vh] bg-no-repeat text-white pl-10 md:pl-24 lg:pl-27 xl:pl-32 flex flex-col justify-center',
        about:'bg-[url("./assets/heroImage8.jpg")] bg-center bg-cover bg-amber-60 w-full min-h-110 md:min-h-92 lg:min-h-[53vh] bg-no-repeat text-white pl-10 md:pl-24 lg:pl-27 xl:pl-32 flex flex-col justify-center',
  };
  return (
    <>
        
      <div className={variant?`${variants[variant]}`:variants.default}>
        <div className="text-2xl font-medium mx-3">
                  <Link to="/" className="text-gray-700">
                    Home
                  </Link>
                  <span className="mx-2 font-bold text-gray-700">-</span>
                  <Link to={linkTo} className="text-[#38048B]">
                    {linkName}
                  </Link>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-5 mb-7 pl-3 text-blue-700  md:leading-14 xl:leading-23 lg:leading-17">
                  {pageTitle}
                </h1>
      </div>
    </>
  );
}

export default Hero
