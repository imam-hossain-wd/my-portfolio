import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./nav.css";
import logo from "../../assets/images/coding.jpg";
import Drawer from "./Drawer";

const Navbar = () => {
  const navmenu = (
    <>
      <li>
        <Link className="cool-link text-[16px]" smooth to="#home">
          Home
        </Link>
      </li>
      <li>
        <Link className="cool-link text-[16px]" smooth to="#about">
          about
        </Link>
      </li>
      <li>
        <Link className="cool-link text-[16px]" smooth to="#projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className="cool-link text-[16px]" smooth to="#services">
          Services
        </Link>
      </li>
      <li>
        <Link className="cool-link text-[16px]" smooth to="#contact">
          contact
        </Link>
      </li>
      {/* <li>
        <Link className="cool-link text-[16px]" smooth to="#contact">
          Hire Me
        </Link>
      </li> */}
    </>
  );
  return (
    <section className="">
      <div className="w-full navbar bg-gray-900 fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navmenu}
            </ul>
          </div>
          <Link
            to="#home"
            className="btn btn-ghost normal-case lg:ml-16 text-xl text-white"
          >
            <img src={logo} alt="coding" className="w-10 h-10 rounded-full" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mt-2">{navmenu}</ul>
        </div>

       <div>
       <Drawer />
       </div>
      </div>
    </section>
  );
};

export default Navbar;
