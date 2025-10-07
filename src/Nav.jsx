import React,{useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import EstimateButton from './EstimateButton';
import MobileMenu from './MobileMenu.jsx';
// import { Link } from 'react-router-dom';

const Navigation = () => {
    const [menu, setmenu] = useState(false)
  const handleMenuVisibility = () => {
        setmenu(!menu)
  }
    return (
      <>
        <div className="flex h-[80px] bg-amber-40 items-center">
          <IoIosMenu
            className="bg-[#440472] text-6xl font-extrabold text-white mr-auto ml-8 xl:hidden"
            onClick={handleMenuVisibility}
          />

          <EstimateButton>Get A Free Estimate</EstimateButton>

          {/* Overlay */}
          {menu && (
            <div
              className="w-full bg-gray-900/80 fixed inset-0 z-30"
              onClick={handleMenuVisibility}
            ></div>
          )}

          {/* Mobile nav bar */}
          <MobileMenu menu={menu} handleMenuVisibility={handleMenuVisibility} />
        </div>
      </>
    );
}

export default Navigation;













