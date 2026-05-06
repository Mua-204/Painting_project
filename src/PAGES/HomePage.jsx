import React, { useState } from "react";
import Header from "../Title.jsx";
import Navigation from "../Nav.jsx";
import Hero from "../Hero.jsx";
import Button from "../Button.jsx";
import About from "../About.jsx";
import { FaCheck } from "react-icons/fa6";
import aboutImage1 from "../assets/aboutImage5.png";
import sticker1 from "../assets/sticker3.png";
import Feature1 from "../assets/Copied1.jpg";
import Feature2 from "../assets/Copied3.jpg";
import { recentProjects } from "../ArrayItems.js";
import { FaArrowDown } from "react-icons/fa";
import OurServices from "../OurServices.jsx";
import { Route, Routes, Outlet, Link } from "react-router-dom";

// import Button from "./Button";
import QualityArray from "../Links.jsx";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(QualityArray[0].title);
  return (
    <>
      <Header />
      <Navigation />
      <Hero variant="home">
        <p className="text-blue-700 font-bold text-[20px] md:text-2xl xl:text-3xl xl:font-extrabold ">
          Welcome to interior wall painting
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-5 mb-7 border-[#38048b] border-l-16 pl-3 text-blue-700  md:leading-14 xl:leading-23 lg:leading-17">
          <span className="flex py-0">The Best Quality</span>{" "}
          <span className="flex">Painting For</span>
          <span className="flex py-0">Your Homes and Offices.</span>
        </h1>
        <div className="text-black ">
          <Button variant="herobutton">Discover More</Button>
        </div>
        <button></button>
      </Hero>

      {/*Start About Style1 Area*/}
      <section className="mt-27 mb-8 lg:bg-pink-4 lg:grid lg:grid-cols-2 lg:mr-15 lg:gap-15 xs:bg-amber-5 xs:">
        <main
          aria-labelledby="about-title about-subtitle"
          className="px-5 relative xs:px-7 xs:bg-pink-5 md:px-9 lg:px-17 lg:pr-0 "
        >
          <div className="absolute bg-whit w-23 left-0 z-10 top-30 md:w-30 md:top-23">
            <img src={sticker1} alt="" className="w-[100%]" />
          </div>
          <header className="relative z-2">
            <p
              id="about-title"
              className=" decoration-2 decoration-[#155DFC] underline underline-offset-4 text-gray-400 text-[21px] font-medium mb-4"
            >
              About Cuizia Paint{" "}
            </p>
            <h1 className="text-4xl font-extrabold mb-10 text-[#38048b] md:leading-12 md:text-[42px]">
              We’re Leaders in Paint Production and Application
            </h1>
          </header>

          <section aria-labelledby="about-title" className="relative z-2">
            <h2 id="about-heading-2" className="sr-only">
              About Cuizia
            </h2>

            <p className="text-[17px] font-medium text-gray-500 leading-7 mb-10">
              At Cuizia, paint is more than just a coat of color — it’s the
              perfection of beauty, an expression of creativity, craftsmanship,
              and care. We are a passionate paint production and application
              company, dedicated to bringing lasting beauty, uniqueness,
              protection, and personality to every surface we touch.
            </p>
            <div className="mb-8">
              <ul>
                <li className="text-[17px] mb-3  font-medium text-gray-900 leading-8">
                  <FaCheck className=" mr-4 inline  text-2xl text-[#1447E6]" />
                  We deliver lasting quality with skilled painters
                </li>
                <li className="text-[17px] mb-3  font-medium text-gray-900 leading-8">
                  <FaCheck className=" mr-4 inline  text-2xl text-[#1447E6]" />
                  We don’t just paint walls — we transform spaces
                </li>
                <li className="text-[17px] mb-3  font-medium text-gray-900 leading-8">
                  <FaCheck className=" mr-4 inline  text-2xl text-[#1447E6]" />
                  Every project reflects our passion for beauty and precision.
                </li>
              </ul>
            </div>

            <p className="text-2xl mb-6 flex font-extrabold text-[#1447E6] xs:mb-9 md:mb-14 md:text-3xl lg:w-full lg:text-2xl">
              <span className="bg-ros-500 mr-3 flex items-end">
                <img
                  src="src\assets\flaticon2.png"
                  alt="Flaticons"
                  className="min-w-13 h-full max-h-20"
                />
              </span>
              We have 5+ years of experiences to give you better quality
              results.
            </p>
          </section>
        </main>

        <div className="mx-auto text-2xl w-80 font-extrabold text-[#1447E6] relative xs:w-[85%] md:w-[85%] lg:mx-0 lg:w-full">
          <p className="bg-[#1608db] w-27 h-27 flex items-center justify-center text-white text-[16px] rounded-full flex-col font-bold font-serif absolute mx-auto z-20 left-0 right-0 top-3 xs:text-[18px] xs:top-11 sm:w-41 sm:h-41 sm:text-[25px] md:w-43 md:h-43 md:top-13">
            Founded <span>In 2020</span>
          </p>
          <img
            src={aboutImage1}
            alt=""
            className="flex justify-self-center w-full xs:w-[100%] sm:w-[95%] max-w-[570px] md:mx-auto"
          />
        </div>
      </section>
      {/*End About Style1 Area*/}

      {/*Start Featured Style1 Area*/}
      <section className="qualityContainer mt-20 w-[92%] xs:w-[88%] mx-auto mb-15 md:mb-31 lg:grid lg:grid-cols-3 lg:gap-6 lg:w-[90%] lg:mb-33 ">
        <main className="qualityMainContainer w-full py-1 flex flex-col mx-auto gap-10 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:px-1 max-h-full">
          <div className="qualityDiv1Container relative w-full px-1 overflow-hidden rounded-2xl group max-h-104 max-w-[480px] sm:max-w-[530px] md:max-w-[610px] md:max-h-110 mx-auto">
            <div className="absolute bg-white w-[93%] bottom-[-5px] mx-auto z-20 left-0 right-0 h-30 flex items-center rounded-[8px] justify-center lg:h-28">
              <Link
                to="/"
                className="font-[800] text-[28px] hover:text-[#350483] transition-hover duration-400 md:text-[33px] lg:text-[26px]"
              >
                <span className="block">Best Quality</span>
                <span className="w-full block text-center">Standards</span>
              </Link>
            </div>
            <img
              src={Feature2}
              alt=""
              className="w-full group-hover:scale-120 duration-600 h-full"
            />
          </div>

          <div className="qualityDiv1Container relative w-full px-1 overflow-hidden rounded-2xl group max-h-104 max-w-[480px] sm:max-w-[530px] md:max-w-[610px] mad:max-h-110 mx-auto">
            <div className="absolute bg-white w-[93%] bottom-[-5px] mx-auto z-20 left-0 right-0 h-33 flex items-center rounded-[8px] justify-center md:h-40 lg:h-28">
              <Link
                to="/"
                className="font-[800] text-[28px] hover:text-[#350483] transition-hover duration-400 md:text-[33px] lg:text-[26px]"
              >
                <span className="block">Smart & Unique</span>
                <span className="w-full block text-center">Wall Work</span>
              </Link>
            </div>
            <img
              src={Feature1}
              alt=""
              className="w-full group-hover:scale-120 duration-600 h-full"
            />
          </div>
        </main>

        <aside className="timeTableContainer sm:w-[99%]  h-104 max-h-full mb-2 mt-10 rounded-[10px] overflow-hidden bg-[url(./assets/timetable2.jpg)] bg-cover lg:col-span-1 lg:h-full lg:mt-0">
          <div className="bg-[#38048B]/83 w-full h-full text-white flex flex-col gap-y-4 lg:gap-y-2 xlg:gap-y-4 items-center justify-center z-10 relative">
            <div className="absolute z-[-1] w-40 top-[-20px] skew-3 right-[-45px] xl:w-38 lg:w-29">
              <img src="src/assets/flaticon1.png" alt="" />
            </div>
            <h2 className="text-4xl font-extrabold text-center">Timings</h2>
            <div className="">
              <p className="text-center font-medium text-[23px] mb-[-5px]">
                Mon to Thu
              </p>
              <div className="text-[19px] font-bold text-center">
                <span>9:00am</span> - <span>6:00pm</span>
              </div>
            </div>

            <div>
              <p className="text-center font-medium text-[23px] mb-[-5px]">
                Fri to Sat
              </p>
              <div className="text-[19px] font-bold text-center">
                <span>10:00am</span> - <span>4:00pm</span>
              </div>
            </div>

            <div>
              <p className="text-center font-medium text-[23px] mb-[-5px]">
                Sun
              </p>
              <div className="text-[19px] font-bold text-center">
                Work Holiday
              </div>
            </div>
            <Button
              variant="bodyEstimate"
              className="text-[21px] mx-auto overflow-hidden relative group"
            >
              <span className="absolute inset-0 w-full h-full transform bg-[#38048B]/83 scale-y-0 origin-center group-hover:scale-y-110 transition-transform duration-900 ease-in-out z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-700">
                Get A Free Estimate
              </span>
            </Button>
          </div>
        </aside>
      </section>

      {/*Start Interior Design Area */}
      <section
        id="intro"
        className="lg:w-full relative bg-[url(./assets/introImage3.jpg)] bg-cover xl:bg-center bg-no-repeat bg-fixed"
      >
        {/* overlay */}
        <div className=" bg-[#2A2721]/89 absolute w-full h-full z-20" />

        {/* main */}
        <main className="text-[#8D8980] z-30 pt-31 relative mx-5 xs:mx-8 sm:mx-15 md:mx-18 xmd:mx-23 lg:mx-25 xlg:mx-16 grid grid-cols-1 xlg:grid-cols-[minmax(450px,auto)_minmax(400px,500px)] xlg:gap-10 xl:mx-12 xl:gap-15">
          <header className=" mb-15">
            <p className="underline decoration-[#5b00f8] decoration-3 underline-offset-6 font-normal text-[20px] mb-5">
              Best Interior Design
            </p>
            <h1 className="text-4xl font-extrabold mb-12 text-white  md:leading-14 md:text-[43px] md:mb-10px lg:w-[80%] xlg:w-full">
              Quality Work That Meets Your Expectations
            </h1>

            <ul className="flex gap-x-3 gap-y-5 text-black mt-5 py-1.5 pl-2 flex-wrap mb-11">
              {QualityArray.map((items, Quality_idx) => {
                return (
                  <li
                    key={`quality${Quality_idx}`}
                    onClick={() => {
                      setActiveIndex(items.title);
                    }}
                    className="w-42 xs:w-42 h-13 group text-[#484f46]"
                  >
                    <Button
                      variant="quality"
                      className={`cursor-pointer ${
                        activeIndex === items.title
                          ? "bg-[#4a2196] text-white "
                          : "bg-white  group-hover:bg-[#4A2196] group-hover:text-white group-hover:transition-all duration-600 ease-in"
                      }`}
                    >
                      {items.title}
                    </Button>
                  </li>
                );
              })}
            </ul>

            {QualityArray.map(
              (items, Quality_idx) =>
                activeIndex === items.title &&
                items.Children.length > 0 && (
                  <div key={Quality_idx}>
                    {items.Children.map((child, child_idx) => (
                      <div>{child.content}</div>
                    ))}
                  </div>
                )
            )}
          </header>

          {/* aside begins */}
          <aside className="bg-amber-60 mb-22 w-full">
            <div className="after-line pb-12 flex gap-[25px]">
              <div className="w-fit max-w-[112px] min-w-[112px] ">
                <img
                  src="src/assets/flaticon10.png"
                  alt="flaticons"
                  className=" w-full"
                />
              </div>
              <div className="">
                <h2 className="text-[23px] mb-4 font-extrabold text-white">
                  Innovative Wall Designs
                </h2>
                <p className="text-[18px] font-normal leading-8">
                  There are many variations of passages of available but the
                  majority have simply free text suffered.
                </p>
              </div>
            </div>

            <div className="flex gap-[25px] mt-15">
              <div className="w-fit min-w-[112px] max-w-[112px] ">
                <img
                  src="src/assets/flaticon5.png"
                  alt="Flaticon"
                  className="w-full"
                />
              </div>
              <div className="">
                <h2 className="text-[23px] mb-4 font-extrabold text-white">
                  High Quality Paint Matterial
                </h2>
                <p className="text-[18px] font-normal leading-8">
                  There are many variations of passages of available but the
                  majority have simply free text suffered.
                </p>
              </div>
            </div>
          </aside>
        </main>
      </section>

      {/*End Interior Design Area */}

      {/*our recent project begins*/}
      <section className="">
        <h1 className="bg-purple-800 h-40 w-[97.5%] mb-1 text-white text-5xl text-center content-center font-extrabold">
          Our Recent Project
        </h1>
        <main className="grid xs:grid-cols-1 vlg:grid-rows-1 2-full vlg:grid-cols-5 justify-items-center-safe gap-8 px-10 mt-30 mb-25">
          {recentProjects.map((item, index) => (
            <div
              className="group overflow-hidden relative rounded-lg w-full max-w-[470px] max-h-[524.83px]"
              key={index}
            >
              <img
                src={item.img}
                className="relative w-full z-10 h-full "
                alt=""
              />
              {/* the overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[#4B0E9D]/80 [mask-image:linear-gradient(to_bottom,transparent_0%,black,black)] z-10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-1000 ease-in-out scale-0 group-hover:scale-100" />
              {/* the texts within the overlay */}
              <div className="absolute inset-x-0 h-40 z-20 flex flex-col justify-center items-center text-white gap- translate-y-50 group-hover:translate-y-0 group-hover:rotate-x-[0] rotate-x-180  bottom-0  transition-all duration-2500 ease-in-out bg-transparent">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <h3 className="text-xl">{item.subtitle}</h3>
                <div className="flex  bg-white rounded-x-full h-17 w-25 justify-center items-center rounded-t-full rounded-l-full rounded-r-full relative top-5 rounded-b-none">
                  <Link to={item.link}>
                    <FaArrowDown className="text-3xl text-gray-800" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
      {/*Our recent project ends*/}

      {/*Our Services List begins*/}
      <section className="w-full min-h-lvh after-line2">
        <div
          id="section header"
          className="bg-[#F6F2EB] w-full h-90 lg:h-75 justify-items-center content-center relative  "
        >
          <h3 className="underline underline-offset-6 text-[20px] font-medium text-gray-500 decoration-[#8635f0] mb-5">
            Our Services List
          </h3>
          <h1 className="text-[#1608DB] text-4xl font-extrabold lg:text-5xl ]">
            Services We're Providing
          </h1>
        </div>

        {/* the main displays */}

        <main className=" grid gap-y-17 grid-cols-1 lg:grid-cols-3 bg-amber- gap-x-8 w-[90%] justify-self-center p-1 pb-18">
          <OurServices
            img="src/assets/service-v1-1.jpg"
            comment="There are not many of passages of Lorem ipsum dolor alteration in some form"
            link="/"
            title="Room Wallpaper"
          />
          <OurServices
            img="src/assets/service-v1-2.jpg"
            comment="There are not many of passages of Lorem ipsum dolor alteration in some form"
            link="/"
            title="Wall Painting"
          />
          <OurServices
            img="src/assets/service-v1-3.jpg"
            comment="There are not many of passages of Lorem ipsum dolor alteration in some form"
            link="/"
            title="Wall Sheets"
          />
        </main>
      </section>

      {/*Our Services List ends*/}
      <About />
    </>
  );
};

export default Home;
