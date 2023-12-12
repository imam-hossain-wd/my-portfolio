
import { FaEnvelope, FaPhone, FaTimes, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../contact/ContactForm';
import './nav.css';
import { Link } from 'react-router-dom';

const Drawer = () => {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById('my-drawer-4');
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="cool-link border border-white py-2 px-3 rounded-sm text-white fond-semi-bold hover:text-white hover:border-0 hover:m-[1px] transition delay-150 transform">
          Hire me
        </label>
        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul style={{ backgroundColor: "#1B2436" }} className="menu p-4 w-96 min-h-full text-base-content">
          <div className='drawer'>
            <button className='flex justify-center  items-center text-2xl text-white w-10 h-10 border-white hover:border-2 rounded-full' onClick={closeDrawer} ><FaTimes /></button>
              <div
          className="flex justify-center justify-around items-center text-3xl font-bold  rounded-lg w-40 mx-auto"
        >


          <p className='
           hover:bg-rose-500
                 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white p-2 rounded-full
                '>
            <Link to="tel:01624243747"><FaPhone /></Link>
          </p>
         
          <p className=' hover:bg-green-500
                 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full'>
            <Link to="https://api.whatsapp.com/send?phone=01624243747"> <FaWhatsapp /></Link>
          </p>
          <p className='hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 text-white p-2 rounded-full'>

            <Link to="mailto:imamhossain6t9@gmail.com" target="_blank"><FaEnvelope /></Link>

          </p>
         

        </div>

            <div>
              <p className='text-white text-center mt-4 text-lg -mb-5'>Write a Message</p>
            <ContactForm size="300px" />
            </div>
          </div>
        </ul>
      </div>
    </div>

  );
};

export default Drawer;

