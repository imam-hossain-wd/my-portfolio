
import {
  FaCreativeCommonsSampling,
  FaLaptopCode,
  FaHandRock,
} from "react-icons/fa";

const WelcomeSection = () => {

  const creativities = [
    {
      icon: <FaCreativeCommonsSampling />,
      name: "Creativity",
      description:
        "I believe a creative web application can attract user most and grow business rapidly",
    },
    {
      icon: <FaLaptopCode />,
      name: "Dedication",
      description:
        "Dedication on project is the best way to build a complete secure application",
    },
    {
      icon: <FaHandRock />,
      name: "Hard Work",
      description:
        "Hard working is the key to the success and I focus on it to make application",
    },
  ];

  return (
    <div id="welcome" className="scroll-smooth">
      <section className="mt-10 text-white">
        <h1 className="text-center text-4xl font-bold ">Welcome To My World</h1>
        <p className="text-center mt-3 text-lg lg:text-xl mb-10">
          I'm a experience and young web enthasist and entrepreneur <br /> who
          love to code web aplication for my client. I make my passion to code
          for web{" "}
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] gap-10 lg:gap-10 mx-auto">
          {creativities.map((creativity, index) => (
            <div key={index}>
              <div className="bg-[#1B2436] border-[1px] rounded-lg border-white p-2 text-white  h-72 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:border-0 duration-300 mb-5">
              <div className='flex justify-center flex-col items-center'>
          <p className='text-5xl text-white my-3 '>{creativity.icon} </p>

  <h3 className="font-bold text-2xl lg:text-3xl ">{creativity.name}</h3>
          </div>
           <p className="text-xl  mt-2">{creativity.description}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
