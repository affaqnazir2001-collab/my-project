import React from 'react'

const Brands = () => {

  return (
    <>
    <div className='brands bg-white w-[100%] flex justify-center items-center gap-10 flex-wrap '>
          <div className="br-boxes text-color-[#929292] w-[22%]  md:w-[10%] flex justify-center items-center font-size-5px" >
        <img src="https://geekinate.com/images/tech/amazon.svg" alt="" className="h-full w-full text-8xl" />
      </div>
      <div className="br-boxes  text-color-[#929292] w-[22%] md:w-[10%] flex justify-center items-center font-size-5px" >
        <img src="https://geekinate.com/images/tech/react.svg" alt="React" className="h-full w-full text-8xl" />
      </div>
      <div className="br-boxes  text-color-[#929292] w-[22%] md:w-[10%] flex justify-center items-center font-size-5px" >
        <img  src="https://geekinate.com/images/tech/mongodb.svg" alt="MongoDB" className="h-[100%]w-[100%] text-8xl" />
      </div>
      <div className="br-boxes  text-color-[#929292] w-[22%] md:w-[10%] flex justify-center items-center font-size-5px" >
        <img src="https://geekinate.com/images/tech/node.svg" alt="Node.js" className="h-full w-full text-8xl" />
      </div>
      <div className="br-boxes  text-color-[#929292] w-[22%] md:w-[10%] flex justify-center items-center font-size-5px" >
        <img src="https://geekinate.com/images/tech/next.svg" alt="Next.js" className="h-full w-full text-8xl" />
      </div>
      <div className="br-boxes  text-color-[#929292] w-[22%]  md:w-[10%]  flex justify-center items-center font-size-5px" >
        <img src="https://geekinate.com/images/tech/unity.svg" alt="Unity" className="h-[100%] w-[100%] text-8xl" />
      </div>
    </div>
      <br />
      <hr />
      <br />
      <br />
     </>
  )
}

export default Brands