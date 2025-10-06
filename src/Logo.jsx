import React from 'react'
import LogoImage from "./assets/footer-logo.png";
import { Link } from "react-router-dom";


const Logo = () => {
    return (
      <Link to="/">
      <div className="w-70 mx-auto h-[45px] items-center flex">
        <img src={LogoImage} className="mx-auto " width="200px" alt="" />
      </div>
      </Link>
  );
}

export default Logo
