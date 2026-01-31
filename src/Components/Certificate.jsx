import React from 'react'
import image from "../assets/image (3).png";
import logos from "../assets/logos.png";

const Certificate = () => {
  return (
    <div className='pt-[100px] '>
      <div className="container mx-auto w-[85%]">
        <div className="page flex gap-[40px]">
            <div className="left w-[392px] h-[152px] flex gap-[25px] flex-col">
                <h5 className='font-semibold tetx-[16px]'>Createx Certificate</h5>
                <h1 className='font-bold text-[40px]'>Your expertise will be confirmed</h1>
                <p>We are accredited by international professional organizations and institutes:</p>
                <img src={logos} alt="" />
            </div>
            <div className="right">   
            <img src={image} alt="image" />
            </div>
        </div>


      </div>
    </div>
  )
}

export default Certificate
