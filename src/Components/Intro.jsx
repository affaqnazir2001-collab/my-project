import React from 'react'

const Intro = () => {
  return (
    <div className='intro font bg-white   flex justify-center items-center gap-6 m-auto text-center'>
      <div className="int-boxes  w-[50%]">
            <h1 className='text-[30px]  font-[600]' data-aos="fade-up" data-aos-duration="3000">What we do?</h1>
            <br/>
            <p data-aos="fade-up" data-aos-duration="3000">  We are a team of <span className='text-[#6DC77A]  text-[16px] font-[400]' >Geeks</span> with great expertise</p>
        </div>
    </div>
  )
}

export default Intro