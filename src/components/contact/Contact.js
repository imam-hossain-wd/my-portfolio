import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section scroll-smooth id="contact" className="my-12 w-[95%] mx-auto">
      <h1 className="text-4xl text-white font-bold text-center mb-10">
        Contact Me
      </h1>
      <div className="flex w-[90%] lg:w-full mx-auto  flex-col lg:flex-row justify-around">
        <div>
          <p className="text-white text-xl text-center">Contact Information</p>
          <div
            style={{ backgroundColor: "#1B2436" }}
            className="my-5 p-5 h-32 flex items-center text-white w-full lg:w-96  rounded"
          >
            <div className="flex  items-center">
              <p className="text-2xl ml-2 rounded-full">
                <FaPhoneAlt />
              </p>
              <div className="text-xl ml-8 ">
                <p className=""> Call me anytime</p>
                <p>01624243747</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#1B2436" }}
            className="my-5 p-5 flex items-center text-white h-36 w-full lg:w-96 rounded"
          >
            <div className="flex  items-center">
              <p className="text-2xl ml-2 rounded-full">
                <FaEnvelope />
              </p>
              <div className="text-xl ml-6 ">
                <p>Send Mail</p>
                <p className="text-">imamhossain6t9@gmail.com</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#1B2436" }}
            className="my-5 p-5 flex items-center text-white h-36 w-full lg:w-96 rounded"
          >
            <div className="flex items-center">
              <p className="text-2xl ml-2 rounded-full">
                <FaMapMarkerAlt />
              </p>
              <div className="text-xl ml-8">
                <p>Contact Address</p>
                <p>Kaptai Road Modunaghat, Hathazari , Chattogram</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[600px] lg:-mt-7">
          <p className="text-center text-white my-5 font-bold text-lg">Send Me A Message</p>
          <ContactForm size="200px" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
