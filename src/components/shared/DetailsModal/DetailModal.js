import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DetailModal = ({data,setData}) => {

    const [showModel, setShowModel]= useState(true)

    const closeModel = ()=> {
        setShowModel(!showModel)
        setData(null)
    }
    return (
        <div>

        <input type="checkbox" id="ProjectDataModel" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
          <label
            htmlFor="booking-model"
            onClick={closeModel}
            className="btn btn-sm btn-circle mb-2 absolute right-2 top-2"
            
          >
            ✕
          </label>
            <div className='text-white'>
            <h3 className="text-xl font-bold m-3 text-center ">{data?.name}</h3>
            <div className='rounded-lg border-2 p-1'>
            <img className='rounded h-72 w-full' src={data.image} alt="projectimage"/>
            </div>
            <h3 className="text-sm m-2"><span className=' font-bold'>Tools :</span> {data?.tools}</h3>
            <h3 className="text-sm mx-2 my-1">{data?.description}</h3>
            <div className='flex  justify-around mt-2'>

                                    <button className='btn btn-sm border-0 rounded-full bg-black text-white mb-2'><Link className='flex' to={data?.serverCode}> <span className='mr-2'><FaLink /></span> Live Link </Link></button>

                                    <button className='btn btn-sm border-0 rounded-full bg-black text-white mb-2'><Link className='flex' to={data?.serverCode}> <span className='mr-2'><FaGithub /></span> client Code </Link></button>

                                    <button className='btn btn-sm border-0 rounded-full bg-black text-white mb-2'><Link className='flex' to={data?.serverCode}> <span className='mr-2'><FaGithub /></span> Server Code </Link></button>
                                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailModal;