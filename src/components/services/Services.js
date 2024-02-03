import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="services" className="my-20">
        <div className='text-white'>
          <h1 className="text-center text-2xl font-bold">SERVICE</h1>
          <p className="text-center text-xl mb-5">See my following web design and development services <br/> that I am offering you</p>
        </div>

       <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-20 w-full  lg:w-4/5 mx-auto">

        <div className="bg-[#1B2436] text-white p-10 rounded-lg  h-[340px] text-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <p><i className="fa-solid fa-code text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Web Design</h1>
          <p className="text-lg">Beautiful website using <br/>Tailwind,JavaScript, Typescript ,ReactJs , <br/>NextJs ,ReduxJs  JavaScript</p>
        </div>

        <div className="bg-[#1B2436] text-white p-10  rounded-lg  h-[340px] text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <p><i className="fa-brands fa-square-xing text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">UI/UX Design</h1>
          <p className="text-lg">Beautiful website using <br/> HTML, CSS, Bootstrap/Tailwind,<br/>  FontAwesome,  Jquery and JavaScript</p>
        </div>

        <div className="bg-[#1B2436] text-white p-10  rounded-lg h-[340px] text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-11 duration-300">
          <p><i className="fa-brands fa-app-store text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Single Page Application</h1>
          <p className="text-lg">Sinlge Page Application (SPA) using HTML,CSS, Bootstrap/Tailwind, ReactJs</p>
        </div>
        <div className="bg-[#1B2436] text-white p-10  rounded-lg  h-[340px] text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <p><i className="fa-solid fa-qrcode text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Full Stack Application</h1>
          <p className="text-lg">Full Stack Application using HTML, CSS, Bootstrap/Tailwind, JavaScript, React, Firebase, NodeJs, ExpressJs, MongoDB</p>
        </div>
        <div className="bg-[#1B2436] text-white p-10  rounded-lg  h-[340px] text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <p><i className="fa-brands fa-creative-commons-sampling-plus text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">E-commerce Solution</h1>
          <p className="text-lg">E-commerce Web Store using HTML, CSS,Bootstrap/ tailwind, JavaScript, ReactJs, Firebase, JWT, NodeJs, ExpressJs, MongoDB, Stripe payment method</p>
        </div>
        <div className="bg-[#1B2436] text-white p-10  rounded-lg h-[340px] text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <p>
            <i className="fa-solid fa-browsers  text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Problem Solving</h1>
          <p className="text-lg">Problem solving using 2 years of web development experience</p>
        </div>
       </div>        
      </section>
        </div>
    );
};

export default Services;