import React from 'react'

const Certificate = () => {
  return (
    <div className='py-[100px] '>
      <div className="container mx-auto w-[85%]">
        <div className="page">
            <div className="left w-[392px] h-[152px] flex gap-[25px] flex-col">
                <h5 className='font-semibold tetx-[16px]'>Createx Certificate</h5>
                <h1 className='font-bold text-[40px]'>Your expertise will be confirmed</h1>
                <p>We are accredited by international professional organizations and institutes:</p>
            </div>
            <div className="right pb-[80px]">   
            <img src={image} alt="image" />
            </div>
        </div>


      </div>
    </div>
  )
}

export default Certificate
