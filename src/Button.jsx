import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const Button = ({ children, variant, className, ...props }) => {
  const base =
    "rounded-4xl text-[18px] font-bold transition:hover focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2";
  const variantStyles = {
    estimate:
      " min-w-64 border-none h-[50px] text-white mr-3 md:mr-6 lg:mr:8 hover:bg-[#155DFC] bg-[#38048B]",
    herobutton:
      " h-[60px] w-54 border-none text-white mr-6 hover:bg-[#155DFC] bg-[#38048B]",
    bodyEstimate:
      " min-w-64 h-[50px] text-white bg-[#155DFC] hover:bg-transparent transition-hover duration-1300 ease-in-out",

    quality:
      "w-full h-full transition overflow-hidden text-[#4f4b46] inline-flex items-center justify-center",
    default:
      " min-w-64 h-[50px] mr-3 text-white md:mr-6 lg:mr:8 bg-gray-700 hover:bg-gray-900",
  };
  return (
    <button
      className={` ${base} ${
        variantStyles[variant] ?? variantStyles.default
      } ${className}`}
      {...props}
      style={
        {
          // transformOrigin: "center",
        }
      }
    >
      {children}
    </button>
  );
};

export default Button;
