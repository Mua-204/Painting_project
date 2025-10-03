import React from 'react'
import Logo from './assets/footer-logo.png'
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-[#9d0fc9] w-full h-31 flex items-center">
      <div className="w-70 mx-auto h-[70%] items-center flex">
        <img src={Logo} className="mx-auto " width="200px" alt="" />
      </div>

      <div className="flex-nowrap gap-4 text-white hidden xl:flex h-[80px] items-center">
        <span className="w-[50px] my-5 rounded-full bg-stone-900 h-[50px] flex justify-center items-center ">
          <BiSolidPhoneCall className="text-amber-500   my-5 rounded-full text-3xl " />
        </span>
        <div className="flex ">
          <div>
            <p className="text-gray-400 font-bold">Call</p>
            <li className="list-none font-extrabold text-[18px]">
              <a href="tel:910-849-135-97">123-910-849-135-97</a>
            </li>
          </div>
          <span className="flex text-5xl text-gray-500 mx-8">|</span>
        </div>
      </div>

      <div className="flex-nowrap gap-4 text-white hidden xl:flex h-[80px] items-center">
        <span className="w-[50px] my-5 rounded-full bg-stone-900 h-[50px] flex justify-center items-center ">
          <CiMail className="text-amber-500   my-5 rounded-full text-3xl " />
        </span>
        <div className="flex ">
          <div>
            <p className="text-gray-400 font-bold">Email</p>
            <li className="list-none font-extrabold text-[18px]">
              <a href="mailto:needhelp@konsil.com">needhelp@konsil.com</a>
            </li>
          </div>
          <span className="flex text-5xl text-gray-500 mx-8">|</span>
        </div>
      </div>

      <div className="flex-nowrap gap-4 text-white hidden xl:flex h-[80px] items-center">
        <span className="w-[50px] my-5 rounded-full bg-stone-900 h-[50px] flex justify-center items-center ">
          <IoLocationSharp className="text-amber-500   my-5 rounded-full text-3xl " />
        </span>
        <div className="flex ">
          <div className="mr-9">
            <p className="text-gray-400 font-bold">Address</p>
            <address className="font-extrabold text-[18px]">
              77 broklyn street, USA
            </address>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
