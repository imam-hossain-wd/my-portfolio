import { useForm } from 'react-hook-form';



const ContactForm = ({size}) => {
    const {
        register,
        handleSubmit,
      } = useForm()

      const buttonStyle = {
        width: size, // Dynamically set the width based on the 'size' prop
      };

      const onSubmit = (data) => console.log(data)
  return (
    <form  onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: "#1B2436" }} className='w-full rounded-lg p-5 text-white mt-5'>
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
        <p className="mb-2">Email</p>
        <input
          type="text"
          placeholder="Enter Email"
          {...register("email")}
          className="input bg-white   input-ghost w-full text-black "
        />
      </label>
      <label>
        <p className="mb-2">Subject</p>
        <input
          type="text"
          placeholder="Enter Subject"
          {...register("subject")}
          className="input bg-white input-ghost w-full text-black "
        />
      </label>
      <label>
        <p className="mb-2">Message</p>
        <textarea
        {...register("message")}
          className="textarea bg-white textarea-ghost w-full text-black"
          placeholder="Enter Message"
        ></textarea>
      </label>
     <div>
     <button style={buttonStyle} className={`btn bg-rose-500 border-0  text-white  mt-2`}>
        Send
      </button>
     </div>
    </form>
     

  );
};

export default ContactForm;
