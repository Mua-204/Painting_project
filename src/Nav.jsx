import React,{useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { MdCancelPresentation } from "react-icons/md";
import EstimateButton from './EstimateButton';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [menu, setmenu] = useState(false)
    const handleMenuVisibility = ()=>{
        setmenu(!menu)
  }

  const links = [
    { title: "Home" },
    { title: "Home",children:['about us','our work','our team','faq'] },
    { title: "Home",children:['view all services','paint production','wall painting','others'] },
    { title: "Home" },
  ];
  
  const handleMobileMenu = () => {
    if (menu) {
      return (
        <div className="fixed z-50 right-0 top-0 bottom-0 bg-purple-900 w-[50%]">
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
        </div>
      );
    }
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
          {handleMobileMenu()}
        </div>
      </>
    );
}

export default Navigation;













