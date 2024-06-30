const Services = () => {
  const services = [
    {
      name: "Custom Web Application Development",
      description:
        "End-to-end development services for custom web applications tailored to the specific needs of businesses or organizations. Utilize frontend frameworks like ReactJS or AngularJS and backend technologies like Node.js or Django to build scalable and robust applications.",
    },
    {
      name: "Full-Stack Development Services",
      description:
        "Comprehensive full-stack development services, including frontend development, backend development, database design, and deployment. Utilize a combination of technologies such as JavaScript (Node.js, React.js), Python (Django), or Java (Spring Boot) to deliver full-stack solutions.",
    },
    {
      name: "RESTful API Development",
      description:
        "Specialize in designing and building RESTful APIs to facilitate communication between frontend and backend systems. Focus on creating well-documented and efficient APIs using frameworks like Express.js, Django REST Framework, or Flask.",
    },
    {
      name: "Database Design and Optimization",
      description:
        "Offer expertise in database design, optimization, and management to ensure efficient storage and retrieval of data for large-scale applications. Provide services such as database schema design, query optimization, and performance tuning using technologies like MongoDB, PostgreSQL, or MySQL.",
    },
    {
      name: "Consultation and Architecture Design",
      description:
        "Offer consultation services to businesses seeking guidance on technology stack selection, architecture design, and best practices in web application development. Provide architectural reviews, performance audits, and scalability assessments to optimize existing applications or plan for future growth.",
    },
    {
      name: "UI/UX Design Services",
      description:
        "Specialize in creating intuitive and visually appealing user interfaces and experiences for web applications. Utilize modern design principles, tools like Figma or Adobe XD, and a deep understanding of user behavior to craft engaging UI/UX designs that enhance user satisfaction and usability.",
    },
  ];

  return (
    <div>
      <section id="services" className="mt-12">
        <div className="text-white">
          <h1 className="text-center mb-2 text-2xl font-bold">SERVICE</h1>
          <p className="text-center  mb-10">
            See my following web design and development services that I
            am offering you
          </p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%]  lg:w-4/5 mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1B2436] text-white p-10 rounded-lg  lg:h-[340px] text-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 border-[1px] duration-300"
            >
              <p>
                <i className="fa-solid fa-code text-5xl text-white mb-2 -mt-5"></i>
              </p>
              <h1 className="text-lg font-bold mb-3">{service.name}</h1>
              <p className="text-[15px]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
