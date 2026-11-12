import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
const About = () => {
  return (
    <div className='about font flex-col bg-white sm:flex-col md:flex-row w-[100%] flex justify-center items-center gap-6'>
    <div className="abt-boxe h-[400px] w-[45%] sm:wd-[90%] " data-aos="zoom-in" data-aos-doration="800">
        <img src="https://geekinate.com/images/illustrator/geekinate-team.svg" alt="" className="h-full w-full" />
      </div>
      <div className="abt-boxes w-[45%] sm:wd-[90%]">
        <h2 className=" font-semibold text-[30px] " data-aos="fade-up" data-aos-doration="1000">Who we are?</h2>
        <p className="text-[16px]   font-[600] text-gray-800 " data-aos="fade-up" data-aos-doration="1000">We are a team of geeks that provides exceptional technology solutions to businesses, startups, and enterprises.
          <br/><br />
          Our vision is to spread the power of technology across the globe and help businesses grow by delivering innovative software solutions.
           <br/><br />
           Following are the top priorities for us at <span>Geekinate</span> with an aim to build long term successful business relationships with our clients. </p>
        
          <p className='flex  text-[16px] font-[600] items-center gap-1.5 ' data-aos="fade-left" data-aos-delay="500"><CiCircleCheck   className=' text-[#6EC77B]' />Quality</p>
          
          <p className='flex  text-[16px] font-[600] items-center gap-1.5 ' data-aos="fade-left" data-aos-delay="500"><CiCircleCheck className='text-[#6EC77B]' />Customer Satisfaction</p>
        
          <p className='flex  text-[16px] font-[600]  items-center gap-1.5 ' data-aos="fade-left" data-aos-delay="500"><CiCircleCheck className='text-[#6EC77B]' />Efficient Communication</p>
    
           <p className='flex  text-[16px] font-[600] items-center gap-1.5 ' data-aos="fade-left" data-aos-delay="500" ><CiCircleCheck className='text-[#6EC77B]' />Professional Services & Support</p>
      </div>
    </div>
  )
}

export default About