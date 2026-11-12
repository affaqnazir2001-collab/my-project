import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";


const Services = () => {
  return (
    <div className='services font bg-white w-[100%] flex flex-wrap justify-center items-center gap-6  text-center'>
      <div className="ser-boxes  w-[90%]   md:w-[45%] lg:w-[22%]  ">
        <div className="diamond bg-gradient-to-r from-[#FAFCFC] to-[#C6F7CC] w-[100px] *: h-[100px]  m-auto rotate-45 mt-5">
            
            <FaUserTie className="text-6xl text-[#6DC77A] ml-[20px] rotate-316 mt-7.5 position-absolute right-15" />
            </div>
            <br/>
            <h1 className='  text-[20px] font-[600]'><span className="text-[#6DC77A] font-bold">Tech-Consultancy</span></h1>
           <p className='text-[16px] font-[400] text-center'> We help you research, discover and define the ideal technology solution to your needs.</p>
           </div>
        <div className="ser-boxes   w-[90%] md:w-[45%] lg:w-[22%] ">
            <div className="diamond  bg-gradient-to-r from-[#FAFCFC] to-[#C6F7CC] w-[100px] *: h-[100px]  m-auto rotate-45 mt-5">
               
            <FaPalette  className="text-6xl text-[#6DC77A] ml-[20px] rotate-316  mt-7.5 position-absolute right-16" />
            </div>
            <br/>
            <h1 className='text-[20px] font-[600]'><span className="text-[#6DC77A] font-bold">Design</span></h1>
           <p className='text-[16px] font-[400] text-center'> We use the industry best practices to design user centric software solutions.</p>
        </div>
        <div className="ser-boxes   w-[90%] md:w-[45%] lg:w-[22%] ">
            <div className="diamond  bg-gradient-to-r from-[#FAFCFC] to-[#C6F7CC] w-[100px] *: h-[100px] m-auto rotate-45 mt-5">
               
            <FaLaptop  className="text-6xl text-[#6DC77A] ml-[20px] rotate-316  mt-7.5 position-absolute right-17" />
            </div>
            <br/>
            <h1 className='text-[20px] font-[600]'><span className="text-[#6DC77A] font-bold">Development</span></h1>
            <p className='text-[16px] font-[400] text-center'>We convert your requirements into fully functional Web, Mobile, or SAAS applications.</p>
        </div>
        <div className="ser-boxes   w-[90%] md:w-[45%] lg:w-[22%]">
            <div className="diamond  bg-gradient-to-r from-[#FAFCFC] to-[#C6F7CC] w-[100px] *: h-[100px] m-auto rotate-45 mt-5 ">
               
            <FaBullhorn  className="text-6xl text-[#6DC77A] ml-[20px] rotate-316 mt-7.5 " />
            </div>
            <br/>
            <h1 className='text-[20px] font-[600]'><span className="text-[#6DC77A] font-bold">Digital Marketing</span></h1>
            <p className='text-[16px] font-[400] text-center'>We help you reach the right audience, build brand loyalty, and drive measurable results.</p>
        </div>
    </div>
  )
}

export default Services