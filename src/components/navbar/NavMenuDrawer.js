import { FaTimes, FaBars } from 'react-icons/fa';
import './nav.css';
import React from 'react';

const NavMenuDrawer = ({ setOpenDrawer, navmenu }) => {

  const closeDrawer = () => {
    setOpenDrawer(false);
    const drawerCheckbox = document.getElementById('my-drawer-4');
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  // Clone navmenu and add the closeDrawer event to each link
  const clonedNavMenu = navmenu.map((item) => 
    React.cloneElement(item, { onClick: closeDrawer })
  );

  return (
    <div className="drawer drawer-start z-40 overflow-hidden">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label 
          onClick={() => setOpenDrawer(true)} 
          htmlFor="my-drawer-4" 
          className="cool-link border border-white py-2 px-3 rounded-sm text-white fond-semi-bold hover:text-white hover:border-0 hover:m-[1px] transition delay-150 transform"
        >
          <FaBars />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div style={{ backgroundColor: "#1B2436" }} className="menu p-4 w-60 min-h-full text-base-content">
          <div className='drawer w-full'>
            <button 
              className='flex justify-center ml-40 items-center text-2xl text-white w-10 h-10 border-white hover:border rounded' 
              onClick={closeDrawer} 
            >
              <FaTimes />
            </button>
            <p className='w-full border-b mb-5 mt-2'></p>
            <div className='flex flex-col w-full'>
              {clonedNavMenu}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenuDrawer;
