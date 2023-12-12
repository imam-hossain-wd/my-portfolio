import ContactForm from '../contact/ContactForm';
import './nav.css'

const Drawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="cool-link border border-white py-2 px-3 rounded-sm text-white  fond-semi-bold hover:text-white hover:border-0 hover:m-[1px] transition delay-150 transform">
          Hire me
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul style={{ backgroundColor: "#1B2436" }} className="menu p-4 w-96 min-h-full text-base-content">
       <div className='drawer'>
       <ContactForm size="300px" />
       </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
