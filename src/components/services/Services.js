import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="services" className="my-20">
        <div className='text-white'>
          <h1 className="text-center text-2xl font-bold">SERVICE</h1>
          <p className="text-center text-xl mb-5">See my following web design and development services <br/> that I am offering you</p>
        </div>

       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 w-[95%] mx-auto gap-5">

        <div className="bg-black text-white p-10  rounded-lg w-80 h-[340px] text-center  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mb-5">
          <p><i className="fa-solid fa-code text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Web Design</h1>
          <p className="text-lg">Beautiful website using <br/>Tailwind,JavaScript, Typescript ,ReactJs , <br/>NextJs ,ReduxJs  JavaScript</p>
        </div>

        <div className="bg-black text-white p-10  rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <p><i className="fa-brands fa-square-xing text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">UI/UX Design</h1>
          <p className="text-lg">Beautiful website using <br/> HTML, CSS, Bootstrap/Tailwind,<br/>  FontAwesome,  Jquery and JavaScript</p>
        </div>

        <div className="bg-black text-white p-10  rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <p><i className="fa-brands fa-app-store text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Single Page Application</h1>
          <p className="text-lg">Sinlge Page Application (SPA) using HTML,CSS, Bootstrap/Tailwind, ReactJs</p>
        </div>
        <div className="bg-black text-white p-10  rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <p><i className="fa-solid fa-qrcode text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Full Stack Application</h1>
          <p className="text-lg">Full Stack Application using HTML, CSS, Bootstrap/Tailwind, JavaScript, React, Firebase, NodeJs, ExpressJs, MongoDB</p>
        </div>
        <div className="bg-black text-white p-10  rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <p><i className="fa-brands fa-creative-commons-sampling-plus text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">E-commerce Solution</h1>
          <p className="text-lg">E-commerce Web Store using HTML, CSS,Bootstrap/ tailwind, JavaScript, ReactJs, Firebase, JWT, NodeJs, ExpressJs, MongoDB, Stripe payment method</p>
        </div>
        <div className="bg-black text-white p-10  rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <p>
            <i className="fa-solid fa-browsers  text-5xl text-white mb-2 -mt-5"></i></p>
          <h1 className="text-3xl font-bold mb-2">Problem Solving</h1>
          <p className="text-lg">Problem solving using 2 years of web development experience</p>
        </div>

       </div>

{/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 w-[95%] mx-auto gap-5">

<div className="bg-black text-white p-10 rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mb-5">
  <p><i className="fa-solid fa-code text-5xl text-white mb-2 -mt-5"></i></p>
  <h1 className="text-3xl font-bold mb-2">Frontend Development</h1>
  <p className="text-[18px]">Crafting beautiful and responsive web interfaces using Tailwind CSS for enhanced UI experiences, JavaScript, TypeScript, ReactJS, Next.js, and leveraging libraries like ReduxJS.</p>
</div>

<div className="bg-black text-white p-10 rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
  <p><i className="fa-brands fa-square-xing text-5xl text-white mb-2 -mt-5"></i></p>
  <h1 className="text-3xl font-bold mb-2">Backend Development</h1>
  <p className="text-[18px]">Building robust and efficient server-side logic using NodeJS and ExpressJS, along with MongoDB and Mongoose for data handling. Proficient in error handling, JWT, and integrating payment gateways like Stripe.</p>
</div>

<div className="bg-black text-white p-10 rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
  <p><i className="fa-solid fa-app-store text-5xl text-white mb-2 -mt-5"></i></p>
  <h1 className="text-3xl font-bold mb-2">Single Page Applications</h1>
  <p className="text-lg">Creating seamless and dynamic Single Page Applications (SPAs) using HTML, CSS, Bootstrap/Tailwind, ReactJS, and optimizing user experiences with modern frontend tools.</p>
</div>

<div className="bg-black text-white p-10 rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
  <p><i className="fa-brands fa-creative-commons-sampling-plus text-5xl text-white mb-2 -mt-5"></i></p>
  <h1 className="text-3xl font-bold mb-2">UX/UI Design</h1>
  <p className="text-lg">Designing intuitive user interfaces and crafting seamless user experiences. Proficient in HTML5, CSS3, and modern design tools to create visually appealing and user-centered web applications.</p>
</div>

<div className="bg-black text-white p-10 rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
  <p><i className="fa-solid fa-qrcode text-5xl text-white mb-2 -mt-5"></i></p>
  <h1 className="text-3xl font-bold mb-2">Full Stack Application</h1>
  <p className="text-lg">Developing end-to-end solutions using HTML, CSS, Bootstrap/Tailwind, JavaScript, React, Firebase, NodeJs, ExpressJs, and MongoDB. From frontend design to backend functionality, I deliver comprehensive and dynamic web applications.</p>
</div>

<div className="bg-black text-white p-10 rounded-lg w-80 h-[340px] text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
  <p><i className="fa-brands fa-browsers text-5xl text-white mb-2 -mt-5"></i></p>
  <h1 className="text-3xl font-bold mb-2">Problem Solving</h1>
  <p className="text-lg">Leveraging two years of web development experience to tackle complex challenges and provide innovative solutions. I thrive on refining code, optimizing performance, and ensuring applications run flawlessly.</p>
</div>

</div> */}

        
      </section>
        </div>
    );
};

export default Services;