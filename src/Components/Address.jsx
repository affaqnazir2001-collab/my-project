import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Address = () => {
  return (
    <>
    
    <div className='address font relative bg-[#1b2642]   flex justify-center items-center gap-10 flex-col'>
      <div class="custom-shape-divider-top-1788328576">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
     <div className="add-box  w-[90%] mt-[50px]">
        <img className='h-[60px] w-[60p] ml-[30px] mt-[100px]' src="https://geekinate.com/_next/image?url=%2Fimages%2Fgeekinate-logo.png&w=384&q=75" alt=""/>
       </div>
      <div className="add-boxe  w-[100%] flex-col lg:flex-row flex justify-center items-center gap-14">
       <div className="add-boxes   w-[25%] text-left">
            <img className='h-[40px] w-[40px] ' src="https://geekinate.com/images/us.svg" alt=""/>
            <span className=' text-[#adb5bd] text-[16px] font-[700]'>USA - Head Office</span>
            <br />
            <br />
            <FaLocationDot className=' text-[#adb5bd] text-[18px]'/>
         <p className=' text-[#adb5bd] text-[16px] font-[700]'>172 Woodport Road, Suite A #442, Sparta, New Jersey, 07871, USA</p>
            <br />
            <br />
            <FiPhoneCall  className=' text-[#adb5bd] text-[18px]'/>
            <p className=' text-[#adb5bd] text-[16px] font-[700]'><span>+1 (512) 900-6431</span></p>
        </div>
        <div className="add-boxes w-[25%] text-left ">
            <img className='h-[40px] w-[40px] ' src="https://geekinate.com/images/pak.svg" alt=""/>
            <span className=' text-[#adb5bd] text-[16px] font-[700]'>Pakistan</span>
            <br />
            <br />
            <FaLocationDot className=' text-[#adb5bd] text-[18px]'/>
            <p className=' text-[#adb5bd] text-[16px] font-[700]'>Twinhub, 4th Floor, The Interlace, I-8 Markaz, Islamabad</p>
            <br />
            <br />
             <FiPhoneCall  className=' text-[#adb5bd] text-[18px]'/>
             <p><span className=' text-[#adb5bd] text-[16px] font-[700]'>+92 333 5388734</span></p>
            
        </div>
        <div className="add-boxes  w-[25%] text-left flex gap-[13px] items-center mb-[30px]">
           <p className=' text-[16px] font-[600] text-[#adb5bd] ml-[20px]'> Stay in Touch</p>
            <br />
            <FaFacebook  className='text-[25px]  text-[#adb5bd] mt-[50px]  sm:text-[40px]' />
            <FaInstagramSquare className='text-[25px]  text-[#adb5bd] mt-[50px] sm:text-[40px]'/>
            <FaTwitterSquare className='text-[25px]  text-[#adb5bd] mt-[50px] sm:text-[40px]'/>
            <FaLinkedinIn className='text-[25px]  text-[#adb5bd] mt-[50px] sm:text-[40px]'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Address