import { useState } from "react";
import BackendSkills from "./BackendSkills";
import DatabaseSkills from "./DatabaseSkills";
import FrontendSkills from "./FrontendSkills";
import ToolSkills from "./ToolSkills";
import AdditionalSkills from "./AdditionalSkills";


const MySkills = () => {
  const [activeSkills, setActiveSkills] = useState("frontend");

  return (
    <div>
      <div className="text-center text-white mb-10">
                    <h2 className="text-3xl font-bold my-2">My Skills</h2>
                    <h1 className="text-4xl font-bold">I'm great in what I do <br /> and I'm loving it</h1>
                    <h3 className="text-lg mt-5">These following web services  that I am expert. I can assure this things that <br /> I can do the best web appliation using these all things </h3>
                </div>
      <div className="flex lg:ml-16">
        <button
          onClick={() => setActiveSkills("frontend")}
          className={`${activeSkills === "frontend" ? "text-red" : ""} cool-link border border-white h-8 text-white font-semibold hover:border-0 mr-2 mb-2 transition delay-150 transform w-28`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveSkills("backend")}
          className={`${activeSkills === "backtend" ? "text-red" : ""} cool-link border border-white h-8  font-semibold hover:border-0 mr-2 mb-2 transition delay-150 transform w-28`}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveSkills("database")}
          className="cool-link border border-white h-8 text-white font-semibold hover:border-0 mr-2 mb-2 transition delay-150 transform w-28"
        >
          Database
        </button>
        <button
          onClick={() => setActiveSkills("tools")}
          className="cool-link border border-white h-8 text-white font-semibold hover:border-0 mr-2 mb-2 transition delay-150 transform w-28"
        >
          Tools
        </button>
        <button
          onClick={() => setActiveSkills("additional")}
          className="cool-link border border-white h-8 text-white font-semibold hover:border-0 mr-2 mb-2 transition delay-150 transform w-28"
        >
          Additional
        </button>

      </div>

      <div className="transition-all ease-in-out duration-500 delay-75 ">
        {activeSkills === "frontend" && <FrontendSkills />}
        {activeSkills === "backend" && <BackendSkills />}
        {activeSkills === "database" && <DatabaseSkills />}
        {activeSkills === "tools" && <ToolSkills />}
        {activeSkills === "additional" && <AdditionalSkills />}
      </div>
    </div>
  );
};

export default MySkills;

