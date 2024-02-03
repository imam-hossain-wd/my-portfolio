import SwiperSlider from "../shared/SwipperSlider/SwipperSlider";

const DatabaseSkills = () => {
  const skillDatas = [
    { url: "https://i.ibb.co/kSFzP8c/mongodb.jpg",
    name:"MongoDB"  },
    { url: "https://i.ibb.co/6mmvSD5/postgresqll.png",
    name:"PostgreSQL"  },
    { url: "https://i.ibb.co/19n5xnR/mongoose.png",
  
    name:"Mongoose"  },
    { url: "https://i.ibb.co/3cvXc30/prisma1.png",
  
    name:"Prisma"  },
    { url: "https://i.ibb.co/jyWS0dW/mysql.png",
  
    name:"MySQL"  },
    { url: "https://i.ibb.co/vYBqX7x/radis.png",
  
    name:"Raids"  },
  ];

  return (
    <div className="w-[90%] mx-auto mb-5  relative">
      <SwiperSlider skillDatas={skillDatas} />
    </div>
  );
};

export default DatabaseSkills;
