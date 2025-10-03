import React,{useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import Logo from "./assets/footer-logo.png";
import { MdCancelPresentation } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

// import React from 'react'

const Title = () => {
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
  )
}

// export default Title

const Navigation = () => {
    const [menu, setmenu] = useState(false)
    const handleMenuVisibility = ()=>{
        setmenu(!menu)
  }
  
  const handleMobileMenu = () => {
    if (menu) {
      return (
        
        <div className="fixed z-50 right-0 top-0 bottom-0 bg-purple-900 w-[50%]">
          <header className=" h-31 flex flex-row w-full after-line ">
            <div className="w-70 mx-auto h-[100%] items-center flex justify-center">
              <img src={Logo} className=" " width="200px" alt="" />
            </div>
            <div className=" w-[60px] ">
              <MdCancelPresentation
                className="absolute top-2 right-3 text-4xl font-light text-white transform transition-transform duration-1000 ease-in-out hover:-rotate-360"
                onClick={handleMenuVisibility}
              />
           <div>
            
           </div>
            </div>
          </header>
        </div>
      );
    }
  }

    return (
      <>
        <Title/>
        <div className="flex h-[80px] bg-amber-40 items-center">
          <IoIosMenu className="bg-[#440472] text-6xl font-extrabold text-white mr-auto ml-8 xl:hidden" onClick={handleMenuVisibility} />

          <button className="mr-6 border-4 h-[70%] w-54 rounded-4xl hover:bg-[#440472] hover:text-white text-[18px] font-bold hover:border-none">
            Get A Free Estimate
          </button>

          {/* Overlay */}
          {menu && (<div className='w-full bg-gray-900/80 fixed inset-0 z-30' onClick={handleMenuVisibility}></div>)}

          {/* Mobile nav bar */}
          {handleMobileMenu()}
        </div>
      </>
    );
}

export default Navigation;













//  <div>
//             <nav className="" >
//               <h1>
//                 {/* <Link to="/"> */}
//                   <img src={Logo} alt="" />
//                 {/* </Link> */}
//                 <div onClick={handleMenuVisibility}>
//                   <MdCancelPresentation />
//                 </div>
//               </h1>
//             </nav>
//           </div>