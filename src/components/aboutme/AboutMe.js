import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import image2 from '../../assets/images/2.png'


const AboutMe = () => {

    return (
        <section id="about" className="mt-10">
            <div className="text-center  font-bold text-white">
                <p className="text-4xl capitalize">Get to know me</p>
                <h1 className='text-3xl mt-2'>About me</h1>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row justify-evenly items-center mt-5" >

                <div className="">
                    <img
                        src={image2}
                        alt=""
                        className="rounded-lg w-full lg:w-[470px] h-[450px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#2c2c54] hover:border-0 duration-300"
                    />
                </div>
                <div>
                    <p className="w-full lg:w-[500px] text-md text-white text-md mt-10">
                        Hello! <br />
                        I'm a Full Stack Developer specializing in frontend and backend technologies. With a strong foundation in HTML5, CSS3, and JavaScript, I've evolved to embrace modern tools like TypeScript, ReactJS, and Next.js. I craft seamless user experiences using ReduxJS for state management and ensure flawless responsiveness with Tailwind CSS and Bootstrap. <br/>

                        On the backend, I excel in Node.js and ExpressJS, building robust APIs with MongoDB and Mongoose for efficient data handling. My expertise in JWT and Stripe ensures secure authentication and seamless payments.

                        I thrive on precision, especially in error handling. My proactive approach anticipates issues, resulting in smoother experiences and enhanced reliability. <br/>

                        I'm a RESTful API integration pro and use Git and GitHub for seamless collaboration. Tools like VSCode, Chrome Dev Tools, Postman, and Jira are my daily companions, ensuring efficiency from development to deployment.

                        Explore my portfolio to witness my creativity and problem-solving in action. Let's team up to turn your ideas into exceptional digital realities!

                    </p>
                    {/* <button className="btn bg-green-400 rounded-full w-44 border-0 btn-outline w-60 mb-3 mt-10 text-white hover:bg-white">
                        <Link to="#contact">Talk With me</Link>
                    </button> */}
                      <div className='flex justify-center mt-5'>
      <button  className="cool-link w-48 border border-white h-10 text-white rounded-sm text-white fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"><Link to="#contact">Talk With me</Link></button>
      </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;