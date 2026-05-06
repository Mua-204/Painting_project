import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
// import { FaArrowDown } from "react-icons/fa";
import OurServices from "./OurServices.jsx";
import Button from "./Button.jsx";
import stickerImage from "./assets/sticker3.png"


const About = () => {
  return (
    <>
      {/* next section begins */}
      {/*Booking area Begins*/}
      <section className="min-w-[540px] mt-25 mb-10 p-4 flex flex-col justify-center items-center lg:grid grid-cols-3 text-[#8a8988] text-[22px] font-medium">
        <div className="w-20 h-20 mx-auto flex items-center justify-center max-w-[528px] mb-">
          <img className="w-full" src="src\assets\clockNscrew.png" alt="" />
        </div>
        <div className="mt-5 mb-2 w-fit max-w-[528px]">
          <h3 className="text-center">Book Your Schedule</h3>
          <a
            href="tel:+23491602099"
            className="text-[#155DFC] text-center block text-5xl font-extrabold mt-2"
          >
            666 888 0000
          </a>
        </div>
        <div className="sm:w-fit mt-5  justify-items-center max-w-[528px]">
          <p className="sm:w-[88%] mb-4 max-w-[498px] text-[20px] text-center mx-auto ">
            Lorem, ipsum dolor sit amet consectetur acing ndisse suscipit
            sagitis leo sit.
          </p>
          <div className="mb-1">
            <Button
              variant="bodyEstimate"
              className="text-[21px] !min-w-59 !h-16  mx-auto overflow-hidden relative group"
            >
              <span className="absolute inset-0 w-full h-full transform bg-[#38048B]/83 scale-y-0 origin-center group-hover:scale-y-110 transition-transform duration-900 ease-in-out z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-700">
                Get A Free Estimate
              </span>
            </Button>{" "}
          </div>
        </div>
      </section>
      {/*Booking area end*/}

      {/* client Testimonials begins*/}
      <section className="bg-[#2B7FFF] h-80">
        {/* the main */}
        <main className="relative">
          {/* overlay */}
          <div className="absolute z-[-1] inset-0">
            <img src={stickerImage} alt="" className="inset-0" />
          </div>
          {/* other content */}
          <h2 className="underline underline-offset-5 font-medium decoration-3 decoration-[#8635F0] text-[#585858] text-[20px] ">
            Client Testimonials
          </h2>
          <h1 className="">What They're Saying About Our Work</h1>

          {/* slider */}
          <div>
            <p></p>
            <div>
              <img src="" alt="" />
              <div>
                <h3></h3>
                <h4></h4>
              </div>
            </div>
          </div>
        </main>
        {/* image aside */}
        <aside className="">
          <div>
            <p>Customer Feedbacks</p>
          </div>
          <img
            src="src\assets\tes-style2-image-box-bg.jpg"
            alt=""
            className="w-40"
          />
        </aside>
      </section>
    </>
  );
};

export default About;

// IF ANYTHING SCATTERS JUST COPY THIS BACK HERE
