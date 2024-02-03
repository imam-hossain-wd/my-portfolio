import SwiperSlider from "../shared/SwipperSlider/SwipperSlider";

const BackendSkills = () => {

  
  const skillDatas = [
    { url: "https://i.ibb.co/zxYLdRM/nodejs.jpg",
    name:"Node Js" },
    { url: "https://i.ibb.co/QdzvbsF/expressjs.jpg" ,
    name:"Express JS"},

    { url: "https://i.ibb.co/vDxkvZz/typescript.png",
    name:"Typescript" },
    { url: "https://i.ibb.co/kXYTn1p/JWT-LOGO.png",
    name:"Json Web Token" },
    { url: "https://i.ibb.co/pwhkjFM/zod.png",
    name:"Zod"
   },
    { url: "https://i.ibb.co/7b7xFCc/restapi.png",
    
    name:"Restful Api" },
  ];
  
 


  return (
    <div className="w-[90%] mx-auto mb-5 relative">
      <SwiperSlider skillDatas={skillDatas} />
    </div>
  );
};

export default BackendSkills;
