import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = ({ size }) => {
  const { register, handleSubmit , reset } = useForm();

  const buttonStyle = {
    width: size,
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const templateParams = {
        to_name: data.name,
        from_name: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        "service_ui7qfhs",
        "template_msue0rc",
        templateParams,
        "wfwXYdRYM4QGmPWnk"
      );
      toast.success('Successfully created!');
      reset();
     
    } catch (error) {
      toast.error(error);
      console.error("Error sending email:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ backgroundColor: "#1B2436" }}
      className="w-full rounded-lg p-5 text-white mt-5"
    >
      <label>
        <p className="mb-2">Name</p>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter Name"
          className="input w-full bg-white text-black "
        />
      </label>
      <label>
        <p className="my-2">Email</p>
        <input
          type="text"
          placeholder="Enter Email"
          {...register("email")}
          className="input bg-white   input-ghost w-full text-black "
        />
      </label>
      <label>
        <p className="my-2">Subject</p>
        <input
          type="text"
          placeholder="Enter Subject"
          {...register("subject")}
          className="input bg-white input-ghost w-full text-black "
        />
      </label>
      <label>
        <p className="my-2">Message</p>
        <textarea
          {...register("message")}
          className="textarea bg-white textarea-ghost w-full text-black"
          placeholder="Enter Message"
        ></textarea>
      </label>
      <div>
        <div className="flex justify-center mt-3">
          <button
            style={buttonStyle}
            className="cool-link w-48 border border-white h-10 text-white rounded-sm fond-semi-bold  hover:border-0 mr-2 mb-2 transition delay-150 transform"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
