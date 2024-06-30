import { HashLink as Link } from "react-router-hash-link";
import "./nav.css";
import logo from "../../assets/images/coding.jpg";
import Drawer from "./Drawer";
import NavMenuDrawer from "./NavMenuDrawer";
import { useState } from "react";

const Navbar = ({ openDrawer, setOpenDrawer }) => {
  const [activeLink, setActiveLink] = useState("#home");

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" }
  ];

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const navmenu = navItems.map((item) => (
    <li key={item.link}>
      <Link
        className={`cool-link text-[17px] ${activeLink === item.link ? "active" : ""}`}
        smooth
        to={item.link}
        onClick={() => handleSetActive(item.link)}
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <section>
      <div className="w-full navbar h-20 border-b-2 border-[#1B2436] fixed top-0 left-0 z-10 bg-[#0E172D]">
        <div className="navbar-start">
          <div className="flex items-center">
            <div className="lg:hidden ml-6">
              <NavMenuDrawer navmenu={navmenu} setOpenDrawer={setOpenDrawer} />
            </div>
            <Link
              to="#home"
              onClick={() => handleSetActive("#home")}
              className="btn btn-ghost normal-case lg:ml-28 text-xl text-white"
            >
              <img src={logo} alt="coding" className="w-10 h-10 rounded-full" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ml-10">
          <ul className="menu menu-horizontal px-1 mt-2">{navmenu}</ul>
        </div>
        <div className="ml-28 md:ml-10 lg:ml-2">
          <Drawer setOpenDrawer={setOpenDrawer} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
