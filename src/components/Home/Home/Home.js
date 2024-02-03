import React, { useEffect } from "react";
import {
  FaArrowAltCircleUp,
  FaGithub,
  FaArrowDown,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import image1 from "../../../assets/images/banner.png";
import "./home.css";
import textMorphAnimation from "./textMorphAnimation";

const Home = ({openDrawer}) => {
  useEffect(() => {
    textMorphAnimation();
  }, []);
  return (
    <div >
      <section
        id="home"
        className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-around lg:items-center"
      >
        <div className="mt-40">
          <h3 className="mb-5 text-xl text-white italic">Hello , I'm</h3>

          <p className="line-1 anim-typewriter text-white text-4xl italic">
            Imam Hossain
          </p>

          <h1 className="line-1 anim-typewriter full-stack text-white italic mt-2">
            Full Stack Web developer
          </h1>
          <div>
            <div
              id="container"
              className="mt-10 w-60 h-20 italic text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700"
            >
              <span className="text-white" id="text1"></span>{" "}
              <span id="text2"></span>
            </div>
            <svg id="filters">
              <defs>
                <filter id="threshold">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 255 -140"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="-mt-7 flex flex-col items-center lg:flex-row">
            <button
              className="cool-link border border-white h-10 text-white rounded-sm fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"
              style={{ width: "170px" }}
            >
              <Link
                className="text-white"
                to="https://drive.google.com/file/d/1HdFj4xgwT92qxT6dTew0auel0b9FN0Ud/view?usp=sharing"
              >
                Download Resume
              </Link>
            </button>
            <button
              className="cool-link border border-white h-10  rounded-sm text-white  fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"
              style={{ width: "170px" }}
            >
              <Link
                className="text-white"
                to="https://drive.google.com/file/d/1HdFj4xgwT92qxT6dTew0auel0b9FN0Ud/view?usp=sharing"
              >
                Download CV
              </Link>
            </button>
            <button
              className="cool-link -ml-2 lg:-ml-0 border border-white h-10 hover:border-rose-500 rounded-sm text-white  fond-semi-bold  hover:border-0 mb-2  transition delay-150 transform"
              style={{ width: "170px" }}
            >
              <Link
                className="text-white"
                to="https://drive.google.com/file/d/1HdFj4xgwT92qxT6dTew0auel0b9FN0Ud/view?usp=sharing"
              >
                Talk With me
              </Link>
            </button>
          </div>
        </div>
        <div className="background-image">
          <img
            src={image1}
            className="mt-10 lg:mt-0 w-[300px] h-[300px] banner-image rounded-full"
            alt=""
          />
        </div>
        <Link
          to="#home"
          smooth
          className="animate-bounce text-white fixed bottom-14 right-10 z-20 text-[28px]  hover:text-3xl  w-8 h-8 flex justify-center items-center rounded-full"
        >
          <FaArrowAltCircleUp />
        </Link>
        <div className={`${openDrawer ? "hidden" : "block"} flex flex-col items-center text-[28px] font-bold fixed z-10 top-32 right-0 bg-[#1B2436] w-[85px] pb-3 rounded-lg`}>
          <p
            className="
          mb-2 mt-5 hover:border-2
                border-2 border-[#1B2436] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full
                "
          >
            <Link
              to="https://www.linkedin.com/in/imam-hossain-web-dev/"
              target="_blank"
            >
              {" "}
              <FaLinkedin />
            </Link>
          </p>

          <p
            className="mb-2 hover:border-2
                border-2 border-[#1B2436] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full"
          >
            <Link to="https://github.com/imam-hossain-wd" target="_blank">
              {" "}
              <FaGithub />
            </Link>
          </p>
          <p
            className="mb-2  hover:border-2
                border-2 border-[#1B2436] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full"
          >
            <Link to="https://twitter.com/imam_hossain_wd" target="_blank">
              <FaTwitter />
            </Link>
          </p>

          <p
            className="text-3xl mb-2 hover:border-2
                border-2 border-[#1B2436] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full"
          >
            <Link
              to="https://api.whatsapp.com/send?phone=01624243747"
              target="_blank"
            >
              {" "}
              <FaWhatsapp />
            </Link>
          </p>
        </div>
      </section>
      <div className="flex  text-lg justify-center mt-8 items-center text-md ">
        <Link
          className="text-white mr-2 -mt-2 hover:text-indigo-500"
          smooth
          to="#welcome"
        >
          Scroll Down
        </Link>
        <Link
          className="text-white  animate-bounce hover:text-indigo-500"
          smooth
          to="#welcome"
        >
          <FaArrowDown />
        </Link>
      </div>
    </div>
  );
};

export default Home;
