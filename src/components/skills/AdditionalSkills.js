import SwiperSlider from "../shared/SwipperSlider/SwipperSlider";

const AdditionalSkills = () => {
  const skillDatas = [
    {
      url: "https://i.ibb.co/Z8fp2HL/responsive-design.webp",
      name: "Responsive Design",
    },
    {
      url: "https://i.ibb.co/jHqhCKW/react-hook-form.jpg",
      name: "React Hook Form",
    },
    {
      url: "https://i.ibb.co/Fzp9znS/tanstack-query.png",
      name: "Tanstack Query",
    },
    { url: "https://i.ibb.co/MGYvPvX/yup.jpg", name: "Yup" },
    { url: "https://i.ibb.co/drbXnhf/cloudinary.jpg", name: "Cloudinary" },
    { url: "https://i.ibb.co/9wYyY84/imgbb.png", name: "ImgBB" },
    { url: "https://i.ibb.co/YDvsL25/winston.webp", name: "Winston" },
    {
      url: "https://i.ibb.co/4VHXyn1/eslint.png",
      name: "Eslint",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-5 relative">
      <SwiperSlider skillDatas={skillDatas} />
    </div>
  );
};

export default AdditionalSkills;
