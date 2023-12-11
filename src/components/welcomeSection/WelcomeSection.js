import React from 'react';
import { FaCreativeCommonsSampling } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaHandRock } from 'react-icons/fa';


const WelcomeSection = () => {
    return (
        <div id="welcome" className='scroll-smooth'>
            <section className="mt-10 text-white">

                <h1 className="text-center text-4xl font-bold ">Welcome To My World</h1>
                <p className="text-center mt-3 text-lg mb-10">I'm a experience and young web enthasist and entrepreneur <br /> who love to code  web aplication for my client. I make my passion to code for web </p>


                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
                    <div className="bg-black border-[1px] rounded-lg border-white p-2  text-white w-80 h-72 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#40407a] hover:border-0 duration-300 mb-5">
                        <p className='text-5xl text-white my-3  ml-32'> <FaCreativeCommonsSampling /> </p>


                        <h3 className="font-bold text-2xl ">Creativity</h3>
                        <p className="text-xl mt-2">I believe a creative web application can attract user most and grow business rapidly</p>
                    </div>

                    <div className="bg-black border-[1px] rounded-lg border-white p-2 text-white w-80 h-72 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#40407a] hover:border-0 duration-300 mb-5">

                        <p className='text-5xl text-white my-3 ml-32'> <FaLaptopCode /> </p>
                        <p className="font-bold text-2xl">Dedication</p>
                        <p className="text-xl mt-2">Dedication on project is the best way to build a complete secure application</p>
                    </div>

                    <div className="bg-black border-[1px] rounded-lg border-white p-2 text-white w-80 h-72 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#40407a] hover:border-0 duration-300 mb-5">
                        <p className='text-5xl text-white my-3  ml-32'> <FaHandRock /> </p>
                        <p className="font-bold text-2xl">Hard Work</p>
                        <p className="text-xl mt-2">Hard working is the key to the success and I focus on it to make application </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default WelcomeSection;