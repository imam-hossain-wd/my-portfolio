import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css'
import { FaGithub, FaLink } from 'react-icons/fa';
import Model from '../shared/Model';


const Projects = () => {

    const [data, setData] = useState('')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (

        <section id="projects" className="mt-20">
            <div className="text-center mb-10 text-white ">
                <h1 className="text-2xl">Recent My Work</h1>
                <h1 className="text-4xl font-bold mt-2">Projects</h1>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects && projects.map((project) => (
                    <div className="card" key={project.id}>
                        <div className="image">
                            <img className='' src={project.image} alt="Project" />
                        </div>
                        <div className="details">
                            <div className="center">
                                <h1 className='text-green-400 text-center -mt-20 '>{project.name}<br />

                                </h1>
                                <label
                                    htmlFor="ProjectDataModel" onClick={() => setData(project)} 
                                    
                                    className="cool-link border border-white h-8 mt-3 text-white font-semibold hover:border-transparent transition delay-150 transform w-36 text-center mb-2"
                                >
                                  Details
                                </label>
                           
                                <div className='flex flex-col justify-center'>

                                    <button className='cool-link border border-white h-8 mb-2 text-white font-semibold hover:border-transparent  transition delay-150 transform w-36 text-center '><Link className=' flex justify-evanly items-center ml-4' to={project?.link}> <span className='mr-3'><FaLink /></span> Live Link </Link></button>

                                    <button className='cool-link border border-white h-8 mb-2  text-white font-semibold hover:border-transparent transition delay-150 transform w-36 text-center'><Link className='flex justify-evanly ml-4 items-center' to={project?.clientCode}> <span className='mr-3'><FaGithub /></span> client Code </Link></button>


                                    {
                                        project?.serverCode && <button className='cool-link border border-white h-8 mb-2 text-white font-semibold hover:border-transparent  transition delay-150 transform w-36 text-center'><Link className='flex justify-evanly ml-4 items-center' to={project?.serverCode}> <span className='mr-3'><FaGithub /></span> Server Code </Link></button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {data && <Model
                data={data}
                setData={setData}
            />}
        </section>
    );
};

export default Projects;