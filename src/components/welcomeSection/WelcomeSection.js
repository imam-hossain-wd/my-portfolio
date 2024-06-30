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
        <h1 className="text-center text-3xl   font-bold ">
          Step into My Digital Realm
        </h1>
        <p className="text-center mt-3  text-lg lg:text-xl mb-10">
          A Web Enthusiast and Entrepreneur Crafting Experiences with Passionate
          Code
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] gap-10 lg:gap-10 mx-auto">
          {creativities.map((creativity, index) => (
            <div key={index}>
              <div className="bg-[#1B2436] border-[1px] border-transparent hover:border-white rounded-lg  p-2 text-white  h-60 text-center transition ease-in-out delay-150   duration-300 mb-5">
                <div className="flex justify-center flex-col items-center">
                  <p className="text-5xl text-white my-3 ">
                    {creativity.icon}{" "}
                  </p>

                  <h3 className="font-bold text-xl">{creativity.name}</h3>
                </div>
                <p className="w-[90%] mx-auto mt-2">{creativity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
