import React,{useState,useEffect,useRef} from 'react'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);



const Button = ({ children, variant, className, ...props }) => {
 
  
  const base =
    "rounded-4xl text-white hover:bg-[#155DFC] hover:text-white bg-[#38048B] text-[18px] font-bold hover:border-none transition:hover focus-visible:ring-4   focus-visible:ring-purple-500 focus-visible:ring-offset-2";
  const variantStyles = {
    estimate: " min-w-64 border-none h-[50px] mr-3 md:mr-6 lg:mr:8",
    herobutton: " h-[60px] w-54 border-none mr-6",
  };
  return (
    <button  className={` ${base} ${variantStyles[variant] ?? variantStyles.default} ${className}`} {...props}  style={{
        // transformOrigin: "center",
      }}>
      {children}
    </button>
  );
}

export default Button
