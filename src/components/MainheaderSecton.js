import React from 'react'
import { PiTranslateBold } from 'react-icons/pi';

export default function MainSection() {
  return (
    <div className='min-h-[90vh] bg-image-animate flex justify-center items-center pb-28' >
      <div className=" text-6xl sm:text-[clamp(5rem,8vw,9rem)] font-extrabold  text-center font-Inter  text-white relative ">
      {/* <div className="rounded-md  backdrop-blur-sm bg-[rgba(255,255,255,0.5)]  absolute -bottom-28 left-16 px-6 pt-6 pb-10 -rotate-[30deg] z-10"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" className='rounded-full h-16 w-16' alt="" /></div>
      <div className="rounded-md bg-[rgba(255,255,255,0.5)] absolute -top-16 sm:-top-16 xl:top-24 right-12 xl:right-36 px-4 pt-4 pb-8 rotate-[28deg] z-10 backdrop-blur-sm"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" className='rounded-full h-12 w-12' alt="" /></div> */}
        <div className=' relative flex flex-col z-0 leading-[4rem] md:leading-[5rem] xl:leading-[7rem]'>
        <span>Master</span>
        <span>New</span>
        <span>Languages</span>
        </div>
          <img className='h-[clamp(10rem,11.5vw,12.5rem)] absolute -top-8 md:-top-2 xl:top-10 -right-3 md:right-0 xl:right-20' src='svg/arrow.svg'></img>
          <p className='absolute -top-8 -left-7 lg:left-4 xl:left-12'><PiTranslateBold style={{color:'#F8C045'}} fontSize={100}/></p>
          
          {/* <div className="bg-yellow-500 rounded-full h-24  w-24  mb-4 absolute hidden sm:block -bottom-24 xl:-bottom-16  -right-12"></div> */}
      </div>
    </div>
  )
}
