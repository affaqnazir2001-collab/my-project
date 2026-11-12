import React from 'react'

const Form = () => {
  return (
    <div className='form font bg-white  w-[100%] flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-30 text-center relative z-20'>
      <div className="form-boxes w-[90%] mr-[80px] " data-aos="zoom-in">
          <img className='w-[100%] h-[100%] lg:w-full' src="https://www.geekinate.com/images/contact.svg" alt="" />
        </div>
        <div className="form-boxe  w-[90%] p-[40px] mr-[30px] flex justify-center flex-col gap-[30px] border-2 border-[black] " data-aos="zoom-in-left" data-aos-delay="500">
            <div className="form-box   w-[100%] flex gap-[30px] mt-[80px]">
                <div className="box1 w-[45%] border-[black]">
              <label className='text-[16px] font-[600]' htmlFor="">Your Name*</label>
              <br /><br />
              <input className='h-[40px] w-[90%] border-2 border-black' type="text" name="" id="" />
                </div>
                <div className="box1 w-[45%] ">
              <label className='text-[16px] font-[600]' htmlFor="">Your Email</label>
              <br /><br />
              <input className='h-[40px] w-[90%] border-2 border-black' type="text" name="" id="" />
                </div>
            </div>
            <div className="form-box  text-white w-[100%]  mt-[15px] mb-[15px] rounded-lg  text-base border-none padding-[0px] ">
                <div className="box2">
            <label className=' text-[16px] font-[600] text-[black] mr-100 ' htmlFor="">Message*</label>
            <br />
                <textarea className='h-[100px] w-[100%] border-2 border-black' name="" id=""></textarea>
                </div>
            </div>
            <div className="form-box">
                <button className='text-[16px] font-[600] bg-[#48B958] w-[100%] text-white px-6 py-3 rounded-md hover:bg-[#0e9e23] mb-[20px]'>SEND MESSAGE</button>
            </div>
        </div>
    </div>
    
  )
}

export default Form