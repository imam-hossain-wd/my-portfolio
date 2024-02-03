import React from 'react';
import SwiperSlider from '../shared/SwipperSlider/SwipperSlider';

const ToolSkills = () => {

const skillDatas = [
    { url: "https://i.ibb.co/w7tQq3Y/git.jpg",
    name:"Git"
  },
    { url: "https://i.ibb.co/vVRQT03/github.png",
    name:"Github" },
    { url: "https://i.ibb.co/MRpJj5z/postman.webp",
    name:"Postman" },
    { url: "https://i.ibb.co/JxWjs4D/jira.jpg",
    name:"Jira"
  },
    { url: "https://i.ibb.co/41J6f19/vscode.jpg",
    name:"Visual Studio"
  },
    { url: "https://i.ibb.co/WB8GqtQ/chrome-dev.jpg",
    name:"Chrome Dev Tool" },
    { url: "https://i.ibb.co/rHk597b/vite.png",
    name:"Vite"
  },
    
  ];

return (
    <div className="w-[90%] mb-5 mx-auto relative">
  <SwiperSlider skillDatas={skillDatas}/>
</div>
);
};

export default ToolSkills;