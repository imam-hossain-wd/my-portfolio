// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';
// import ContactForm from './ContactForm';


const Contact = () => {

//     const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
   

//     emailjs.sendForm('service_ui7qfhs', 'template_msue0rc', form.current, 'wfwXYdRYM4QGmPWnk')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };


 

    return (
        <section scroll-smooth id="contact" className='my-10'>
            <h1 className='text-4xl text-white font-bold text-center mb-10'>Contact Me</h1>
            <div className='flex  flex-col lg:flex-row justify-around'>
                <div>
                    <p className='text-white text-xl text-center'>Contact Information</p>
                    <div style={{ backgroundColor: "#1B2436" }} className='my-5 p-5 text-white w-full lg:w-96  rounded'>
                        <div className='flex  items-center'>
                            <p className='text-2xl rounded-full'><FaPhoneAlt /></p>
                            <div className='text-xl ml-5 '>
                                <p > Contact on Phone</p>
                                <p>01624243747</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#1B2436" }} className='my-5 p-5 text-white w-full lg:w-96 rounded'>
                        <div className='flex  items-center'>
                            <p className='text-2xl rounded-full'><FaEnvelope /></p>
                            <div className='text-xl ml-5 '>
                                <p >Contact on Email</p>
                                <p>imamhossain6t9@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#1B2436" }} className='my-5 p-5 text-white h-32 w-full lg:w-96 rounded'>
                        <div className='flex  items-center'>
                            <p className='text-2xl rounded-full'><FaMapMarkerAlt /></p>
                            <div className='text-xl ml-5 '>
                                <p>Contact Address</p>
                                <p>Kaptai Road Modunaghat, Hathazari , Chattogram</p>
                            </div>
                        </div>
                    </div>
                </div>
               
              <div className='w-full lg:w-[600px]'>
              <ContactForm size="2000px" />
              </div>
            </div>

        </section>
    );
};

export default Contact;