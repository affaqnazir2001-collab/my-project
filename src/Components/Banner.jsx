import React from 'react'

const Banner = () => {
  return (
  <div className='banner  font flex-col w-[100%]  sm:flex-col  md:flex-row flex justify-center items-center gap-4 ' >
   <div className="boxes ml-[70px]  w-[38%] sm:w-[90%]" data-aos="fade-up"   data-aos-doration="1000" >
        <h1 className=" font-[600] text-[45px] ">We <span className="text-[#6DC77A]">Geekinate</span> solutions for <br /> your digital needs</h1> 
        <br />
        <p className=" text-[18px] text-[#8492a6]" >Geekinate is the process of bringing your digital vision to life with our team of Geeks.</p>
        <br />
        <button className=" text-[16px] font-[600]  bg-[#6DC77A] text-white py-2 px-4 rounded hover:bg-[#5aa86a] 
        padding: 8px 15px; border-none border-radius: 5px; hover:cursor-pointer" data-aos="fade-up" data-aos-delay="500"  >let's connect</button>
        <br />
        <br /><br />
      </div>
      <div className="boxe h-[400px] w-[45%] sm:w-[90%]" data-aos="fade-up" data-aos-doration="1000">
        <img className=' h-full w-full' src="https://geekinate.com/images/illustrator/Startup.svg" alt="" />
      </div>

    </div>
  )
}

export default Banner