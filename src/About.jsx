import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
// import { FaArrowDown } from "react-icons/fa";
import OurServices from "./OurServices.jsx";
import Button from "./Button.jsx";
import SliderObject from "react-slick";
let Slider = SliderObject?.default || SliderObject;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stickerImage from "./assets/sticker3.png";
import Testimonies from "./testimonialSlideItems.js";

const About = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    rtl: true,
  };
  return (
    <>
      {/* next section begins */}
      {/*Booking area Begins*/}
      <section className="mt-25 mb-10 p-4 flex flex-col justify-center items-center lg:grid grid-cols-3 text-[#8a8988] text-[22px] font-medium">
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
      <section className="bg-[#333029] mb-15 relative min-h-[700px]">
        {/* overlay */}
        <div className="absolute bg-[url(src/assets/testimonial-style1-pattern.png)] w-full h-full object-cover bg-no-repeat opacity-28" />

        <section className="relative text-white  pt-15 px-5 sm:pt-25 sm:px-25 md:px-10 xmd:mx-20 lg:mx-15 xlg:mx-17 vlg:grid vlg:grid-cols-2 gap-x-10 vlg:mx-0">
          {/* the main */}
          <main className="overflow-clip mb-15 vlg:mb-0 bg-green-600">
            <div className="mb-12">
              <h2 className="underline underline-offset-5 font-medium decoration-3 decoration-[#a175db] text-[#f1ecec] text-[20px] ">
                Client Testimonials
              </h2>
              <h1 className="text-4xl font-extrabold mt-4 md:text-5xl/15 lg:w-[75%] xlg:w-[70%] vlg:w-[100%] vlg:text-[45px]">
                What They're Saying About Our Work
              </h1>
            </div>

            {/* slider */}
            <section className=" overflow-hidden">
              <Slider {...settings}>
                {Testimonies.map((items, idx) => {
                  return (
                    <div key={idx} className=" px-2 py-1 ">
                      <p className="text-[#b1b0ae] text-[20px] font-medium lg:w-[95%] xlg:w-[80%]">
                        {items.parag}
                      </p>
                      <div className="mt-9  flex gap-x-5">
                        <img
                          src={items.img}
                          alt=""
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className=" pt-2">
                          <h3 className="text-[20px] md:font-bold font-medium mb-1 lg:font-extrabold">
                            {items.name}
                          </h3>
                          <h4 className="text-[#c88af5] font-medium lg:text-[18px]">
                            {items.role}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </section>
          </main>

          <aside className=" p-2 vlg:p-0 min-h-[281px] flex  ">
            <div className="max-w-[98px] md:max-w-[105px] justify-items-center content-center justify-center bg-[#9e6dbe] relative overflow ">
              <p className=" text-[22px] md:text-[30px] font-semibold md:font-bold break-words rotate-90 text-nowrap">
                Customer Feedbacks
              </p>
            </div>
            <div className="w-[320px] md:w-[580px] md:max-w-[580px] md:h-[519px] bg-amber-700 xlg:w-[910px] xlg:h-[690px] xlg:max-w-[930px]">
              <img
                src="src\assets\tes-style2-image-box-bg.jpg"
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
          </aside>
        </section>
      </section>
    </>
  );
};

export default About;

// IF ANYTHING SCATTERS JUST COPY THIS BACK HERE
