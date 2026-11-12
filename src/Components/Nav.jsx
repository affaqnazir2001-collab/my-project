import React from 'react'

const Nav = () => {
  return (
    <div className=' bg-white h-[60px] w-[100%] flex justify-space-around items-center' nav>
      <img src="https://geekinate.com/_next/image?url=%2Fimages%2Fgeekinate-logo.png&w=384&q=75" alt="" className="h-[70%] " />
        <input type="checkbox" name="" id="check" /> 
        <label htmlFor="check display-none"> 
        <i className="fa-solid fa-bars display-none"></i>
        <i className="fa-solid fa-xmark display-none "></i>
       </label>
        <ul className="flex justify-space-around items-center gap-8 ml-160 text-2xl">
            <li className='a text-black decoration-none text-[18px]'><a  href="">ABOUT</a></li>
             <li className='a text-black decoration-none text-[18px]'><a href="">SERVICES</a></li>
              <li className='a text-black decoration-none text-[18px]'><a href="">PORTFOLIO</a></li>
               <li className='a text-black decoration-none text-[18px]'><a href="">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Nav