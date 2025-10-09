import React,{useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import Button from './Button';
import MobileMenu from './MobileMenu.jsx';
// import { Link } from 'react-router-dom';

const Navigation = () => {
    const [menu, setmenu] = useState(true)
  const handleMenuVisibility = () => {
        setmenu(!menu)
  }
    return (
      <>
        <div className="flex  h-26 lg:h-[80px] bg-amber-40 items-center xl:h-17">
          <IoIosMenu
            className="bg-[#440472] text-5xl md:text-6xl font-extrabold text-white mr-auto ml-4 xl:hidden"
            onClick={handleMenuVisibility}
          />

          <Button variant="estimate">Get A Free Estimate</Button>

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













