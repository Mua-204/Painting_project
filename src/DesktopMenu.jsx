import React from 'react'
import navLinks from './Links.js';
import { Link } from 'react-router-dom';
import {
  GrLinkedinOption,
  GrPinterest,
  GrFacebookOption,
  GrTwitter,
} from "react-icons/gr";


const Desktop = () => {
  return (
    <nav className=" bg-amber-30 hidden justify-center items-center  mr-7 h-full md:min-w-[120px]  md:flex md:items-stretch lg:w-full lg:ml-5 xl:ml-22 ">
      <ul className="hidden mr-auto gap-9 justify-center items-center  lg:flex">
        {navLinks.map((items, idx) => (
          // remember to put back the path as the first option for the key below (items.path? items.path:)
          <li key={items.title} className="relative group">
            {items.path ? (
              <Link
                to={items.path}
                className="cursor-pointer hover:underline underline-offset-7 decoration-3 text-[17px] font-bold hover:text-[#e910de] transition-hov "
              >
                {items.title}
              </Link>
            ) : (
              <span className="cursor-pointer hover:underline underline-offset-7 decoration-3 text-[17px] font-bold hover:text-[#e910de] transition-hover">
                {items.title}
              </span>
            )}

            {items.children && (
              <div className="absolute opacity-0 invisible left-[-100%] top-full group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-lg w-60 pb-1 pt-1.5 z-50 mt-6 transition-all duration-200">
                <ul>
                  {items.children.map((child, cIdx) => {
                    return (
                      <li
                        key={"c" + cIdx}
                        className={` block px-4 py-1.5  mt-2 ${
                          cIdx !== items.children.length - 1
                            ? "after-line2 mb-3"
                            : "pb-0.5 mb-0.5"
                        }`}
                      >
                        <Link
                          to={child.path}
                          className=" text-[15px] font-medium flex items-center h-8 pl-3.5 py-1 text-gray-900 hover:border-l-7 transition-all ease-in duration-150 hover:text-[#e910de]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="flex h-full md:w-full md:justify-between md:bg-red-5 lg:w-fit lg:bg-transparent">
        <ul className="flex justify-center h-full items-center md:w-full md:bg-amber-5 md:gap-3 md:px-1 md:justify-between lg:gap-4 ">
          <li className="hover:bg-[#38048b] group transition-hover duration-200 cursor-pointer bg-gray-200 rounded-full flex justify-center items-center md:h-7 md:w-7 lg:h-10 lg:w-10 ">
            <a href="" className="">
              <GrFacebookOption className="bg-gray-200 text-black group-hover:bg-[#38048b] group-hover:text-gray-200 group-transition-hover duration-200 " />
            </a>
          </li>
          <li className="hover:bg-[#38048b] group transition-hover duration-200 cursor-pointer rounded-full  flex bg-gray-200 justify-center items-center  md:h-7 md:w-7 lg:h-10 lg:w-10 ">
            <a href="" className="">
              <GrTwitter className="bg-gray-200 text-black group-hover:bg-[#38048b] group-hover:text-gray-200 group-transition-hover duration-200 " />
            </a>
          </li>
          <li className="hover:bg-[#38048b] group transition-hover duration-200 cursor-pointer bg-gray-200 rounded-full  flex justify-center items-center  md:h-7 md:w-7 lg:h-10 lg:w-10  ">
            <a href="" className="">
              <GrLinkedinOption className="bg-gray-200 text-black group-hover:bg-[#38048b] group-hover:text-gray-200 group-transition-hover duration-200 " />
            </a>
          </li>
          <li className="hover:bg-[#38048b] group transition-hover duration-200 cursor-pointer bg-gray-200 rounded-full  flex justify-center items-center  md:h-7 md:w-7 lg:h-10 lg:w-10">
            <a href="" className="">
              <GrPinterest className="bg-gray-200 text-black group-hover:bg-[#38048b] group-hover:text-gray-200 group-transition-hover duration-200 " />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Desktop