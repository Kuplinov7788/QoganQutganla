import React from 'react'

const Event = (Props) => {
  return (
    
      <div className="wrapper-event py-[50px]  bg-gradient-to-r from-[#FFC1C1] to-[#FF7F7F]">
         <div className="container mx-auto w-[85%]">
            <div className="title">
                <p className='text-center text-[16px]'>Our Events</p>
            <h1 className='font-bold text-[30px] text-center'>Lectures & workshops</h1>
            </div>
            <div className="cards  py-[50px]">  
        <ul className="list bg-base-100 rounded-box shadow-md  ">
  
  
  <li className="list-row">
    <div style={{color: Props.color}} className="text-4xl  font-bold ">05 </div>
    <div className="flex flex-col  ">
        <p className="font-semibold">August</p>
    <p className="opacity-35">11:00 – 14:00</p>
    </div>
    <div className="list-col-grow">
      <div className="font-bold tetx-[20px]">Formation of the organizational structure of the company in the face of uncertainty</div>
      <div className="text-xs uppercase font-medium opacity-40">Onine master-class</div>
    </div>
      <button className="border-2 border-red-500 hover:bg-red-500 text-red hover:text-white w-[100px] rounded-2xl   transition">
        View more
    </button>
  </li>
  
  <li className="list-row">
    <div style={{color: Props.color}} className="text-4xl font-bold">24</div>
     <div className="flex flex-col  ">
        <p className="font-semibold">July</p>
    <p className="opacity-35">11:00 – 12:30</p>
    </div>
    <div className="list-col-grow">
      <div className="font-bold tetx-[20px]">Formation of the organizational structure of the company in the face of uncertainty</div>
      <div className="text-xs uppercase font-medium opacity-40">Onine master-class</div>
    </div>
      <button className="border-2 border-red-500 hover:bg-red-500 text-red hover:text-white w-[100px] rounded-2xl   transition">
        View more
    </button>
  </li>
  
  <li className="list-row">
    <div style={{color: Props.color}} className="text-4xl font-bold">16</div>
     <div className="flex flex-col  ">
        <p className="font-semibold">July</p>
    <p className="opacity-35">10:00 – 13:00</p>
    </div>
    <div className="list-col-grow">
      <div className="font-bold tetx-[20px]">Formation of the organizational structure of the company in the face of uncertainty</div>
      <div className="text-xs uppercase font-medium opacity-40">Onine master-class</div>
    </div>
    <button className="border-2 border-red-500 hover:bg-red-500 text-red hover:text-white w-[100px] rounded-2xl   transition">
        View more
    </button>
  </li>
  
        </ul>
            </div>
            <div className="more flex items-center gap-[40px] justify-center">
                <h2 className='font-semibold text-[28px]'>Do you want more?</h2>
                <button className='bg-[#FF3F3A] w-[214px] h-[52px] rounded-[5px] text-white'>Explore all events</button>
            </div>


        </div>
    </div>
    
  )
}

export default Event

