import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css'
import { FaGithub, FaInfo, FaLink } from 'react-icons/fa';
import DetailModal from '../shared/DetailsModal/DetailModal';


const Projects = () => {

    const [data, setData] = useState('')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (

        <section id="projects" className="mt-10">
            <div className="text-center  text-white ">
                <h1 className="text-3xl my-12 font-bold">A Gallery of Creations Codefolio</h1>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {projects && projects.map((project) => (
                    <div className="card w-full" key={project.id}>
                        <div className="image">
                            <img className='' src={project.image} alt="Project" />
                        </div>
                        <div className="details">
                            <div className="center">
                                <h1 className='text-green-400 text-center -mt-20 '>{project.name}<br />

                                </h1>
                                <label
                                    htmlFor="ProjectDataModel" onClick={() => setData(project)} 
                                    
                                    className="cool-link border border-white h-8 mt-3 text-white font-semibold hover:border-transparent transition delay-150 transform w-36 text-center mb-2 flex"
                                >
                                 <span className='flex  items-center ml-4'><FaInfo /> <span className='ml-3'>Details</span></span>
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
            {data && <DetailModal
                data={data}
                setData={setData}
            />}
        </section>
    );
};

export default Projects;