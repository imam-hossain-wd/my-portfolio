import SwiperSlider from "../shared/SwipperSlider/SwipperSlider";

const FrontendSkills = () => {
    const skillDatas = [
        { url: "https://i.ibb.co/7CNdzVF/javascript.jpg",
        name:"Javascript"
      },
        { url: "https://i.ibb.co/vDxkvZz/typescript.png",
        name:"Typecript" },
        { url: "https://i.ibb.co/QYk1bzj/reactjs.jpg",
        name:"React JS" },
        { url: "https://i.ibb.co/c8DfzYh/nextjs.png",
        name:"NextJS"
      },
        { url: "https://i.ibb.co/nzNg2vs/redux.jpg",
        name:"Redux JS"
      },
        { url: "https://i.ibb.co/0J1yHrH/firebase.png",
        name:"Firebase" },
        { url: "https://i.ibb.co/FKyyPvy/Screenshot-2023-08-10-at-01-37-57-React-App.png",
        name:"Tailwind CSS"
      },
        { url: "https://i.ibb.co/Bf34XR0/download.png",
        name:"Bootstrap" },
        { url: "https://i.ibb.co/rwjLXD9/axios.webp" ,
        name:"Axios"},
        { url: "https://i.ibb.co/tCR91MJ/html.png",
        name:"Html"},
        { url: "https://i.ibb.co/LCy4qpF/css-3-icon.png" ,
        name:"CSS"},
        
      ];

    return (
        <div className="w-full lg:w-[90%] mb-5 mx-auto relative">
      <SwiperSlider skillDatas={skillDatas}/>
    </div>
    );
};

export default FrontendSkills;