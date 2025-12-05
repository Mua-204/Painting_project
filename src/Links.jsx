// HOME PAGE - QUALITY WORK SECTION - QUALITY ARRAY
import { Link } from "react-router-dom";
import {
  GrLinkedinOption,
  GrPinterest,
  GrFacebookOption,
  GrTwitter,
} from "react-icons/gr";
import { HiOutlineArrowDown } from "react-icons/hi";
const QualityArray = [
  {
    title: "Quality Material",
    Children: [
      {
        content: (
          <div className="xl:grid xl:grid-cols-3">
            <img
              src="src/assets/introMaterial-1.png"
              className="mb-5 xlg:mb-0 xlg:w-fit"
              alt="Quality Material"
            />
            <p className="text-[18px] leading-8 mb-3 xlg:mb-0 xlg:col-span-2">
              There are many variations of passages of available but the
              majority have suffered alteration in some form, or randomised
              words which don look even slightly believable
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Expert Team",
    Children: [
      {
        content: (
          <div className="container w-full md:grid md:grid-cols-2 gap-7 flex flex-col">
            <div className="py-1 flex flex-col gap-y-3 max-w-[510px] max-h-[510px] group">
              <div className="Img_container relative rounded-[10px] outline-0 border-0 overflow-hidden">
                <span className="absolute inset-0 bg-white opacity-30 rotate-15 w-15 h-[105%] translate-x-[-280%] group-hover:translate-x-[1400%] blur-[6px] transition-transform duration-1005 ease-out "></span>
                <img
                  src="src/assets/introImage4.jpg"
                  alt="Quality Material"
                  className="]"
                />
                {/* overlay */}
                <div className="absolute bottom-0 bg-black/50 h-25 items-end pb-5 flex translate-y-[100%] group-hover:translate-y-[0%]  transition-transform duration-1000 w-full justify-center">
                  <ul className="flex gap-5 text-white h-[30px] w-full justify-center items-center">
                    <li className="text-[22px]  hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrFacebookOption />
                      </Link>
                    </li>
                    <li className="text-[19px]  hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrTwitter />
                      </Link>
                    </li>
                    <li className="text-[19px] hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrLinkedinOption />
                      </Link>
                    </li>
                    <li className="text-[18px] hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrPinterest />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white h-25 min-h-[110px] rounded-[10px] flex flex-col items-center justify-center">
                <h3 className="text-[20px] text-[#4f4b46] font-bold">
                  <Link to="/"> Jessica Brown</Link>
                </h3>
                <h3 className="font-medium">Designer</h3>
              </div>
            </div>

            {/* second image ............................*/}
            <div className="py-1 flex flex-col gap-y-3 max-w-[510px] max-h-[510px] group">
              <div className="Img_container relative rounded-[10px] outline-0 border-0 overflow-hidden">
                <span className="absolute inset-0 bg-white opacity-30 rotate-15 w-15 h-[105%] translate-x-[-280%] group-hover:translate-x-[1400%] blur-[8px] transition-transform duration-1005 ease-out "></span>
                <img
                  src="src/assets/introImage5.jpg"
                  alt="Quality Material"
                  className=""
                />
                {/* overlay */}
                <div className="absolute bottom-0 bg-black/50 h-25 items-end pb-5 flex translate-y-[100%] group-hover:translate-y-[0%]  transition-transform duration-1000  w-full justify-center">
                  <ul className="flex gap-5 text-white h-[30px] w-full justify-center items-center">
                    <li className="text-[22px]  hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrFacebookOption />
                      </Link>
                    </li>
                    <li className="text-[19px]  hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrTwitter />
                      </Link>
                    </li>
                    <li className="text-[19px] hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrLinkedinOption />
                      </Link>
                    </li>
                    <li className="text-[18px] hover:text-[#4A2196] transition-colors duration-900 ">
                      <Link to="/">
                        <GrPinterest />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white h-25 min-h-[110px] rounded-[10px] flex flex-col items-center justify-center">
                <h3 className="text-[20px] text-[#4f4b46] font-bold">
                  <Link to="/about">Okpara Blessing</Link>
                </h3>
                <h3 className="font-medium">Developer</h3>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  {
    title: "Smart Work",
    Children: [
      {
        content: (
          <div className="flex flex-col gap-7 md:grid md:grid-cols-2 ">
            <div className="relative bg-rose-500 max-w-[510px] max-h-[510px] overflow-hidden group rounded-[10px]">
              <img
                src="src/assets/introImage6.jpg"
                className="w-full max-h-[510px] "
                alt=""
              />

              {/* Overlay*/}

              <div className="absolute bg-gradient-to-b from-[#4A2196]/50 to-[#4A2196]/90 z-10 bottom-0 w-full h-60 md:h-50  flex flex-col justify-center items-center scale-0 translate-y-[100%] group-hover:translate-y-[0%]  group-hover:scale-100 transition-transform duration-1000 ">
                <h2 className="flex flex-col justify-center text-white cursor-pointer hover:text-[#aeadb9] text-3xl font-bold font-serif gap-y- mb-5">
                  <span>Washroom</span>
                  <span>Wall Design</span>
                </h2>

                {/* button */}

                <div className="absolute bottom-0 bg-white w-25 text-center h-25 rounded-t-full pt-4 translate-y-[40%]">
                  <button className="text-3xl">
                    <HiOutlineArrowDown />
                  </button>
                </div>
              </div>
            </div>

            {/* second item................ */}

            <div className="relative bg-rose-500 max-w-[510px] max-h-[510px] overflow-hidden group rounded-[10px]">
              <img
                src="src/assets/introImage7.jpg"
                className="w-full max-h-[510px] "
                alt=""
              />

              {/* Overlay*/}

              <div className="absolute bg-gradient-to-b from-[#4A2196]/50 to-[#4A2196]/90 z-10 bottom-0 w-full h-60 md:h-50  flex flex-col justify-center items-center scale-0 translate-y-[100%] group-hover:translate-y-[0%]  group-hover:scale-100 transition-transform duration-1000 ">
                <h2 className="flex flex-col justify-center text-white cursor-pointer hover:text-[#aeadb9] text-3xl font-bold font-serif gap-y- mb-5">
                  <span>Washroom</span>
                  <span>Wall Design</span>
                </h2>

                {/* button */}

                <div className="absolute bottom-0 bg-white w-25 text-center h-25 rounded-t-full pt-4 translate-y-[40%]">
                  <button className="text-3xl">
                    <HiOutlineArrowDown />
                  </button>
                </div>
              </div>
            </div>
            {/* second item................ */}
          </div>
        ),
      },
    ],
  },
];

export default QualityArray;
