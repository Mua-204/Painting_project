import React, { useState } from "react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";
import {
  MdCancelPresentation,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";

 const MobileMenu = ({ handleMenuVisibility, menu }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

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

  if (!menu) {
    return null;
  }

  return (
    <div className="fixed z-50 right-0 top-0 bottom-0 bg-purple-900 w-[50%] text-white">
      <header className=" h-31 flex flex-row w-full after-line ">
        <div
          className="w-70 mx-auto h-[100%] items-center flex justify-center"
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
    </div>
  );
};

export default MobileMenu