import React, { useRef, useState,useEffect } from "react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";
import {
  MdCancelPresentation,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaGooglePlusSquare
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { gsap } from "gsap";

 const MobileMenu = ({ handleMenuVisibility, menu }) => {
   const [openDropdown, setOpenDropdown] = useState(false);
   const menuRef = useRef(null)
   
   

  const handleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const links = [
    { title: "Home", path: "/" },
    {
      title: "About",
      children: [
        { label: "About Us", path: "/about" },
        { label: "Our Work", path: "/" },
        { label: "Our Team", path: "/" },
        { label: "Work Details", path: "/" },
        { label: "Faq", path: "/" },
      ],
    },
    {
      title: "Services",
      children: [
        { label: "View All Services", path: "/" },
        { label: "Paint Production", path: "/" },
        { label: "Wall Painting", path: "/" },
        { label: "Others", path: "/" },
      ],
    },
    { title: "Contacts", path: "/" },
   ];
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

  if (!menu) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="fixed z-50 right-0 top-0 bottom-0 bg-[#155DFC] w-72 text-white shadow-2xl"
    >
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

      <div>
        <ul>
          {links.map((items, idx) => {
            return (
              <li key={items.title} className="group after-line">
                {items.path ? (
                  <Link to={items.path}>{items.title}</Link>
                ) : (
                  <>
                    <span className="after-line flex">
                      {items.title}
                      {openDropdown === items.title ? (
                        <MdArrowDropUp
                          onClick={() => handleDropdown(items.title)}
                        />
                      ) : (
                        <MdArrowDropDown
                          onClick={() => handleDropdown(items.title)}
                        />
                      )}
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
                          className={
                            cIdx !== items.children.length - 1
                              ? "after-line pl-8"
                              : "pl-8 "
                          }
                        >
                          <Link to={childitem.path}>{childitem.label}</Link>
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

      {/*  */}
      <div className="">
        <ul className="flex gap-4 justify-center mt-13">
          <li className="">
            <a href="" className="">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="">
            <a href="" className="">
              <FaTwitterSquare />
            </a>
          </li>
          <li className="">
            <a href="" className="">
              <FaPinterestSquare />
            </a>
          </li>
          <li className="">
            <a href="" className="">
              <FaGooglePlusSquare />
            </a>
          </li>
          <li className="">
            <a href="" className="">
              <TfiYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu














