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
                                <h1 className='text-rose-500'>{project.name}<br />

                                </h1>
                                <p>{project?.description?.slice(0, 100)}  <label
                                    htmlFor="ProjectDataModel"
                                    onClick={() => setData(project)}
                                    className="btn btn-link btn-xs capitalize"
                                >
                                    Read more..
                                </label> </p>
                                <div className='flex flex-col justify-center'>

                                    <button className='btn btn-sm border-0 rounded-full bg-black text-white mb-2'><Link className='flex' to={project?.link}> <span className='mr-2'><FaLink /></span> Live Link </Link></button>

                                    <button className='btn btn-sm border-0 rounded-full bg-black text-white mb-2'><Link className='flex' to={project?.clientCode}> <span className='mr-2'><FaGithub /></span> client Code </Link></button>

                                    {
                                        project?.serverCode && <button className='btn btn-sm border-0 rounded-full bg-black text-white mb-2'><Link className='flex' to={project?.serverCode}> <span className='mr-2'><FaGithub /></span> Server Code </Link></button>

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