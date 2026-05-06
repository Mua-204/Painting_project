import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const OurServices = ({ children, img, title, comment, link }) => {
  return (
    <>
      {/* the main displays */}

      <div className=" max-w-115 justify-self-center rounded-2xl border border-[#EBE5DB] -translate-y-8 group px-3 hover:shadow-xl/10 hover:inset-shadow-sm inset-shadow-indigo-500/50  ">
        <div className="overflow-hidden relative rounded-2xl w-full -translate-y-8 ">
          {/* <div className=" absolute bg-gray-300/90 scale-0 group-hover:scale-120 z-10 w-full h-full transition-all duration-1000 rounded-full" /> */}
          <img
            src={img}
            className="group-hover:scale-120 transition-all w-full duration-1000 relative"
            alt=""
          />
        </div>
        {/* the text */}
        <div className=" relative flex flex-col justify-self-center w-[90%]  items-center gap-3 overflow-hidden">
          <h2 className="text-[#1608DB] text-2xl font-bold mb-3">
            <Link>{title}</Link>
          </h2>
          <h4 className="text-[19px] font-medium text-center text-base/8 text-gray-500 ">
            {comment}
          </h4>
          <div className="h-18 bg-[#F6F2EB] translate-y-3  w-25 justify-center items-center rounded-t-full flex text-2xl text-[#1608DB] hover:bg-[#8635f0] hover:text-white transition-all duration-300">
            <Link to={link}>
              <FaArrowDown />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
