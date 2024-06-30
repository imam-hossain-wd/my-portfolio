import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import image2 from '../../assets/images/2.png'


const AboutMe = () => {

    return (
        <section id="about" className="mt-10">
            <div className="text-center   text-white">
                <p className="text-2xl font-bold capitalize">Unlocking My Code Journey</p>
                <h1 className=' mx-5 mt-3 mb-8'>A Peek into My Passion for Web Development</h1>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row justify-around items-center w-[90%] mx-auto" >

                <div className="">
                    <img
                        src={image2}
                        alt=""
                        className="rounded-lg w-full lg:w-[450px] h-[450px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#2c2c54] hover:border-0 duration-300"
                    />
                </div>
                <div>
                    <div className="w-full lg:w-[500px] p-3 text-[16px] text-[#F5F5F5] mt-10">
                        <p className='mb-2'>Hello</p>

                        <p className='mb-2'>I am a highly skilled Full Stack Web Developer with over 2 years of professional experience, specializing in both frontend and backend technologies, AWS, and Docker. My expertise lies in creating large-scale, dynamic, responsive, user-friendly, SEO-optimized, scalable, and lightning-fast modern web applications.</p>

                        <p className='mb-2'>I have a proven track record of working with two companies and successfully serving over 20 clients worldwide, delivering top-tier web development services in both local and international markets. My approach involves leveraging the latest technologies and adhering to industry best practices for both frontend and backend development, ensuring seamless and efficient cloud deployment. </p>

                        <p className='mb-2'>I am passionate about crafting exceptional user experiences and delivering robust, reliable web applications. My proactive approach, combined with meticulous attention to detail, enables me to anticipate and resolve issues effectively, ensuring smooth and enjoyable experiences for users. </p>

                        <p>Explore my portfolio to witness my creativity and problem-solving abilities in action. Let's collaborate to transform your ideas into outstanding digital solutions!</p>

                    </div>
                  <div className='flex flex-col items-center justify-center mt-5 lg:flex-row'>
                  <div className='smooth flex justify-center mt-2'>
                        <button className="cool-link w-48 border border-white h-10 text-white rounded-sm  fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"><Link smooth to="#skills">Explore My Skills</Link></button>
                    </div>
                  <div className='smooth flex justify-center mt-2 lg:mt-5'>
                        <button className="cool-link w-48 border border-white h-10 text-white rounded-sm  fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"><Link smooth to="#contact">Talk With me</Link></button>
                    </div>
                   
                  </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;