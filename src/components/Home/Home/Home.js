import React, { useEffect } from 'react';
import { FaArrowAltCircleUp, FaGithub, FaArrowDown, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import image1 from '../../../assets/images/banner.png';
import './home.css';
import textMorphAnimation from './textMorphAnimation';


const Home = () => {

  useEffect(() => {
    textMorphAnimation();
  }, []);
  return (
    <div>


      <section id="home" className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-around lg:items-center w-[85%] mx-auto"
      >
        <div className="mt-20 p-5">
          <h3 className="mb-5 text-xl text-white italic">Hello , I'm</h3>

          <p className="line-1 anim-typewriter text-white text-4xl italic">Imam Hossain</p>

          <h1 className="line-1 anim-typewriter full-stack text-white italic mt-2">
            Full Stack Web developer
          </h1>
          <div>
            <div
              id="container"
              className="mt-10 w-60 h-20 italic text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700"
            >
              <span className='text-white' id="text1"></span> <span id="text2"></span>
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

          <div>
          </div>
         <div>
    
         </div>

          <div className="mt-5 flex flex-col lg:flex-row">
            {/* <button className=" border-white py-2 px-3 rounded-sm text-white  fond-semi-bold hover:text-white hover:border-0 hover:m-[1px] transition delay-150 transform ">

              <Link to="https://drive.google.com/file/d/1HdFj4xgwT92qxT6dTew0auel0b9FN0Ud/view?usp=sharing">Download Resume</Link>

            </button> */}
                 <button  className="cool-link border border-white h-10 text-white rounded-sm text-white  fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"
          style={{ width: "170px" }}>
            <Link className='text-white' to="https://drive.google.com/file/d/1HdFj4xgwT92qxT6dTew0auel0b9FN0Ud/view?usp=sharing">Download Resume</Link>
          </button>
                 <button  className="cool-link border border-white h-10  rounded-sm text-white  fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"
          style={{ width: "170px" }}>
            <Link className='text-white' to="https://drive.google.com/file/d/1HdFj4xgwT92qxT6dTew0auel0b9FN0Ud/view?usp=sharing">Download CV</Link>
          </button>
                 <button  className="cool-link border border-white h-10 text-white hover:border-rose-500 rounded-sm text-white  fond-semi-bold  hover:border-0 mb-2  transition delay-150 transform"
          style={{ width: "170px" }}>
            <Link className='text-white' to="https://drive.google.com/file/d/1HdFj4xgwT92qxT6dTew0auel0b9FN0Ud/view?usp=sharing">Talk With me</Link>
          </button>
          



            {/* <button className="btn bg-green-500 rounded-full w-44 border-0 btn-outline w-60 mb-3 mr-2 text-white hover:bg-white">
              <Link to="https://drive.google.com/file/d/16lP2Km2Xg250oLcLNAfRRqpOgaH3qTvG/view?usp=sharing">Download CV</Link>
            </button>
            <button className="btn bg-green-500 rounded-full w-44 border-0 btn-outline w-60 mb-3 mr-2 text-white hover:bg-white">
              <Link smooth to="#contact">Talk With me</Link>
            </button> */}
          </div>
        </div>
        <div className="background-image">
          <img
            src={image1}
            className="w-[300px] h-[300px] rounded banner-image rounded-full"
            alt=""
          />
        </div>
        <Link to="#home" smooth className='animate-bounce text-white hover:text-rose-600 fixed top-[550px] right-10 text-3xl' ><FaArrowAltCircleUp /></Link>
        <div
          className="flex flex-col items-center text-[28px] font-bold fixed top-32 right-0 bg-black w-24 pb-3 rounded-lg"
        >


          <p className='
          mb-2 mt-5 hover:border-2
                border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full
                '>
            <Link to="https://www.linkedin.com/in/imam-hossain-web-dev/" target="_blank"> <FaLinkedin /></Link>
          </p>
         
          <p className='mb-2 hover:border-2
                border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full'>
            <Link to="https://github.com/imam-hossain-wd" target="_blank"> <FaGithub /></Link>
          </p>
          <p className='mb-2  hover:border-2
                border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full'>

            <Link to="https://twitter.com/imam_hossain_wd" target="_blank"><FaTwitter /></Link>

          </p>

          <p className='text-3xl mb-2 hover:border-2
                border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full'>

            <Link to="https://api.whatsapp.com/send?phone=01624243747" target="_blank"> <FaWhatsapp /></Link>
          </p>
         

        </div>

      </section>
      <div className='flex justify-center items-center text-md hover:text-indigo-500'>
        <p className='text-white animate-bounce mt-2 hover:text-indigo-500'><Link smooth to="#welcome"><FaArrowDown /></Link></p>
        <p className='ml-3 '><Link className='text-white' smooth to="#welcome">Scroll Down</Link></p>
      </div>
    </div>
  );
};

export default Home;