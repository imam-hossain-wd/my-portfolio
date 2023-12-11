import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ui7qfhs', 'template_msue0rc', form.current, 'wfwXYdRYM4QGmPWnk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section id="contact" className='my-10'>
            <h1 className='text-4xl text-white font-bold text-center mb-10'>Contact Me</h1>
            <div className='flex flex-col lg:flex-row justify-around'>
                <div>
                    <p className='text-white text-xl text-center'>Contact Information</p>
                    <div style={{ backgroundColor: "#1B2436" }} className='m-5 p-5 text-white w-full lg:w-96 rounded'>
                        <div className='flex  items-center'>
                            <p className='text-2xl rounded-full'><FaPhoneAlt /></p>
                            <div className='text-xl ml-5 '>
                                <p > Contact on Phone</p>
                                <p>01624243747</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#1B2436" }} className='m-5 p-5 text-white w-full lg:w-96 rounded'>
                        <div className='flex  items-center'>
                            <p className='text-2xl rounded-full'><FaEnvelope /></p>
                            <div className='text-xl ml-5 '>
                                <p >Contact on Email</p>
                                <p>imamhossain6t9@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#1B2436" }} className='m-5 p-5 text-white h-32 w-full lg:w-96 rounded'>
                        <div className='flex  items-center'>
                            <p className='text-2xl rounded-full'><FaMapMarkerAlt /></p>
                            <div className='text-xl ml-5 '>
                                <p>Contact Address</p>
                                <p>Kaptai Road Modunaghat, Hathazari , Chattogram</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} style={{ backgroundColor: "#1B2436" }} className='w-full lg:w-[500px] rounded-lg p-5 text-white mt-5'>

                    <label>
                        <p className='mb-2'>Name</p>
                        <input type="text" placeholder="Enter Name" className="input w-full bg-white text-black " />
                    </label>
                    <label>
                        <p className='mb-2'>Email</p>
                        <input type="text" placeholder="Enter Email" className="input bg-white   input-ghost w-full text-black " />
                    </label>
                    <label>
                        <p className='mb-2'>Subject</p>
                        <input type="text" placeholder="Enter Subject" className="input bg-white input-ghost w-full text-black " />
                    </label>
                    <label>
                        <p className='mb-2'>Message</p>
                        <textarea className="textarea bg-white textarea-ghost w-full text-black" placeholder="Enter Message"></textarea>
                    </label>
                    <button className='btn bg-rose-500 border-0  text-white w-40 mt-2'>Send</button>
                   
                </form>
            </div>

        </section>
    );
};

export default Contact;