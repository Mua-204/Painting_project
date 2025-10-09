import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "./Logo.jsx";

const Header = () => {
  return (
    <header className="bg-[#155DFC] w-full h-26 flex items-center xl:h-28 text-nowrap xl:pl-10 xl:pr-6">
      <div className="lg:w-70 mx-auto lg:ml-5 lg:mr-auto h-[70%] items-center flex">
        <Logo className={"w-[100%]"}></Logo>
      </div>

      <div className="flex-nowrap lg:gap-3 xl:gap-4 text-white hidden lg:flex h-[80px] items-center">
        <span className=" my-5 rounded-full bg-[#38048b] lg:w-[35px] lg:h-[35px] xl:w-[48px] xl:h-[48px] flex justify-center items-center ">
          <BiSolidPhoneCall className="text-[#155DFC] my-5 rounded-full lg:text-2xl xl:text-3xl hover:text-white" />
        </span>
        <div className="flex ">
          <div>
            <p className="text-gray-400 font-bold">Call</p>
            <li className="list-none font-extrabold lg:text-[15px] xl:text-[18px]">
              <a href="tel:910-849-135-97">123-910-849-135-97</a>
            </li>
          </div>
          <span className="flex lg:font-extralight text-5xl text-gray-500 lg:mx-4 xl:mx-8">
            |
          </span>
        </div>
      </div>

      <div className="flex-nowrap gap-4 text-white hidden lg:flex h-[80px] items-center">
        <span className=" my-5 rounded-full bg-[#38048b] lg:w-[35px] lg:h-[35px] xl:w-[48px] xl:h-[48px]  flex justify-center items-center ">
          <CiMail className="text-[#155DFC] my-5 rounded-full lg:text-2xl xl:text-3xl hover:text-white " />
        </span>
        <div className="flex ">
          <div>
            <p className="text-gray-400 font-bold">Email</p>
            <li className="list-none font-extrabold lg:text-[15px] xl:text-[18px]">
              <a href="mailto:needhelp@konsil.com">needhelp@konsil.com</a>
            </li>
          </div>
          <span className="flex lg:font-extralight text-5xl text-gray-500  lg:mx-4 xl:mx-8">
            |
          </span>
        </div>
      </div>

      <div className="flex-nowrap gap-4 text-white hidden lg:flex h-[80px] items-center">
        <span className="my-5 rounded-full bg-[#38048b] lg:w-[35px] lg:h-[35px] xl:w-[48px] xl:h-[48px]  flex justify-center items-center ">
          <IoLocationSharp className="text-[#155DFC] my-5 rounded-full lg:text-2xl xl:text-3xl hover:text-white" />
        </span>
        <div className="flex ">
          <div className="mr-9">
            <p className="text-gray-400 font-bold">Address</p>
            <address className="font-extrabold lg:text-[15px] xl:text-[18px]">
              77 broklyn street, USA
            </address>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
