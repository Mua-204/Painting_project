import React from 'react'
import Image1 from './assets/heroImage.jpg'
import Button from './Button'
import { Link,Outlet } from 'react-router-dom'


const Hero = ({ children, variant }) => {
  const variants = {
    home: 'bg-[url("./assets/heroImage5.jpg")] bg-center bg-cover bg-amber-60 w-full min-h-123 md:min-h-170 lg:min-h-[100vh] bg-no-repeat text-white pl-10 md:pl-24 lg:pl-27 xl:pl-32 flex flex-col justify-center',
    about:
      'bg-[url("./assets/heroImage2.jpg")] bg-center bg-cover bg-amber-60 w-full min-h-110 md:min-h-92 lg:min-h-[53vh] bg-no-repeat text-white pl-10 md:pl-24 lg:pl-27 xl:pl-32 flex flex-col justify-center',
  };
  return (
    <>
        {" "}
    <div className={`${variants[variant]}`}> {children} </div></>
  );
}

export default Hero
