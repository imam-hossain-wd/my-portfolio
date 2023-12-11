import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer bg-slate-900 footer-center p-10  rounded text-white" >
      <div className="grid grid-flow-col gap-4">
        <a href="/" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300">Home</a>
        <a href="/" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300">About</a>
        <a href="/" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300">Service</a>
        <a href="/" className="text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300">Protfolio</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 ">
          <Link to="https://www.linkedin.com/in/master-imam/"><p className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-indigo-500 text-3xl fobt-bold mr-5'><FaLinkedin /></p>
          </Link>
          <Link to="https://twitter.com/imam_hossain6t9"><p className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-indigo-500 text-3xl fobt-bold mr-5'><FaTwitter />
          </p></Link>
          <Link to="https://github.com/imam-hossain1"><p className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-indigo-500 text-3xl fobt-bold mr-5'><FaGithub /></p></Link>
          <Link to="https://stackoverflow.com/users/21142006/imam-hossain"><p className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-indigo-500 text-3xl fobt-bold mr-5'><FaStackOverflow /></p></Link>
        </div>
      </div>
      <div>
        <p className="text-lg">Copyright © 2023 - All right reserved by Imam Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;