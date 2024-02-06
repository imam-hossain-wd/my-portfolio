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
        <div className=''>

        <input type="checkbox" id="ProjectDataModel" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
          <label
            htmlFor="booking-model"
            onClick={closeModel}
            // className="btn btn-sm btn-circle mb-2 absolute right-2 top-2"
            className='cool-link border absolute right-2 top-4 border-white  text-xl px-2 rounded-sm text-white fond-semi-bold hover:text-white hover:border-0 hover:m-[1px] transition delay-150 transform'
            
          >
            ✕
          </label>
            <div className='text-white'>
            <h3 className="text-xl font-bold m-2 text-center ">{data?.name}</h3>
            <div className='rounded-lg w-[95%] mx-auto border-2 p-1'>
            <img className='rounded h-52 w-full' src={data.image} alt="projectimage"/>
            </div>
            <h3 className="text-sm m-2"><span className=' font-bold'>Tools :</span> {data?.tools}</h3>
            <h3 className="text-sm mx-2 my-1">{data?.description}</h3>
            <div className='flex  justify-around mt-2'>

                                    <button className='cool-link border border-white  h-8 text-white font-semibold hover:border-0 mr-2 my-2 transition delay-150 transform w-32'><Link className='flex items-center ml-2' to={data?.link}> <span className='mr-2'><FaLink /></span> Live Link </Link></button>

                                    <button className='cool-link border border-white  h-8 text-white font-semibold hover:border-0 mr-2 my-2 transition delay-150 transform w-32'><Link className='flex items-center ml-2' to={data?.clientCode}> <span className='mr-2'><FaGithub /></span> client Code </Link></button>

                                    <button className='cool-link border border-white  h-8 text-white font-semibold hover:border-0 mr-2 my-2 transition delay-150 transform w-32'><Link className='flex items-center ml-2' to={data?.serverCode}> <span className='mr-2'><FaGithub /></span> Server Code </Link></button>
                                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailModal;