import React, { useRef, useState, useEffect } from "react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";
import navLinks from "./Links.js";
import {
  MdCancelPresentation,
  MdArrowRight,
} from "react-icons/md";
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { gsap } from "gsap";


const MobileMenu = ({ handleMenuVisibility, menu }) => {
  // React Hooks
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);
  const arrowRef= useRef({})
// Dropdown function
  const handleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };


  // mobile navbar slide in menu
  useEffect(() => {
    if (menu) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.9, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.5 });
    }
  }, [menu]);

  // dropdown arrow rotation
   useEffect(() => {
    navLinks.map((items) => {
       const arrow = arrowRef.current[items.title];
       if (!arrow) return(null);
       if (openDropdown === items.title) {
         gsap.to(arrow, {
           rotate: 90,
           duration: 0.7,
           ease: "power2.out",
         });
       } else {
         gsap.to(arrow, {
           rotate: 0,
           duration: 0.7,
           ease: "power2.in",
         });
       }
     });
   }, [openDropdown]);

  // condition for opening the mobile menu
  if (!menu) {
    return null;
  }

  return (
    <div
      ref={menuRef} className="fixed z-50 right-0 top-0 bottom-0 bg-[#155DFC] w-72 text-white shadow-2xl overflow-y-auto"
    >
      {/* Mobile navbar header and cancel/exit Button */}
      <header className=" h-30 flex flex-row w-full after-line ">
        <div
          className="w-[50%] mx-auto h-[100%] items-center flex justify-center mt-2"
          onClick={handleMenuVisibility}
        >
          <Logo />
        </div>
        <div className=" w-[60px] ">
          <MdCancelPresentation
            className="absolute top-2 right-3 text-4xl font-light text-white transform transition-transform duration-1500 ease-in-out hover:-rotate-360"
            onClick={handleMenuVisibility}
          />
          <div></div>
        </div>
      </header>

      {/* Mobile menu children/content */}
      <div className="overflow-visible">
        <ul className="h-auto ">
          {navLinks.map((items, idx) => {
            return (
              <li
                key={items.title}
                className={`group min-h-16 after-line flex flex-col justify-center text-[20px] font-bold text-shadow-amber-50`}
              >
                {items.path ? (
                  <Link
                    to={items.path}
                    onClick={handleMenuVisibility}
                    className="pl-4 hover:text-[#38048b] transition-hover duration-400 cursor-pointer w-[100%]"
                  >
                    
                    {items.title}
                  </Link>
                ) : (
                  <>
                    <span
                      className={`flex pl-4 ${
                        openDropdown === items.title && "after-line pt-4 pb-2"
                      }`}
                    >
                      <span className="mr-auto w-[100%] hover:text-[#38048b] transition-hover duration-400 cursor-pointer">
                        
                        {items.title}
                      </span>
                      {
                        <MdArrowRight
                          ref={(el) => (arrowRef.current[items.title] = el)}
                          className={`bg-white text-black mr-1 text-3xl rounded-xs hover:bg-[#38048b] hover:text-white cursor-pointer`}
                          onClick={() => handleDropdown(items.title)}
                        />
                      }
                    </span>
                  </>
                )}
                {/* DROP DOWN */}
                {items.children && items.children.length > 0 && (
                  <ul
                    className={` ${
                      openDropdown === items.title ? "flex flex-col" : " hidden"
                    }`}
                  >
                    {items.children.map((childitem, cIdx) => {                    
                      return (
                        <li
                          //   remember to put back the path as the first option for the key below (childitem.path ??)
                          key={`${items.title}-child-${cIdx}`}
                          className={`${
                            cIdx !== items.children.length - 1
                              ? " pl-12 min-h-13 after-line flex flex-col justify-center text-[18px] font-medium text-shadow-amber-50 hover:text-[#38048b] transition-hover duration-400 cursor-pointer"
                              : "pl-12 min-h-13 flex flex-col justify-center text-[18px] font-medium text-shadow-amber-50 hover:text-[#38048b] transition-hover duration-400 cursor-pointer"
                          }`}
                        >
                          <Link
                            to={childitem.path}
                            onClick={handleMenuVisibility}
                          >
                            {childitem.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/*social media handles*/}
      <div className="">
        <ul className="flex gap-4 justify-center mt-13">
          <li className="hover:text-[#38048b] transition-hover duration-400 cursor-pointer text-3xl ">
            <a href="" className="">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="hover:text-[#38048b] transition-hover duration-400 cursor-pointer text-3xl ">
            <a href="" className="">
              <FaTwitterSquare />
            </a>
          </li>
          <li className="hover:text-[#38048b] transition-hover duration-400 cursor-pointer text-3xl ">
            <a href="" className="">
              <FaPinterestSquare />
            </a>
          </li>
          <li className="hover:text-[#38048b] transition-hover duration-400 cursor-pointer text-3xl ">
            <a href="" className="">
              <FaGooglePlusSquare />
            </a>
          </li>
          <li className="hover:text-[#38048b] transition-hover duration-400 cursor-pointer text-3xl ">
            <a href="" className="">
              <TfiYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
