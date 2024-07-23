import React from 'react'
import { PiTranslateBold } from 'react-icons/pi';
import colors from 'tailwindcss/colors'

export default function MainSection() {
        const theme = 'blue';
  return (
    <div className='h-[80vh] flex justify-center items-center' style={{backgroundColor:colors[theme][800]}}>
      <div className=" text-6xl sm:text-[clamp(5rem,8vw,9rem)] font-extrabold  text-center font-Inter leading-[4rem] md:leading-[5rem] xl:leading-[8rem] text-white relative ">
        <div className=' relative flex flex-col z-10'>
        <span>Master</span>
        <span>New</span>
        <span>Languages</span>
        </div>
          <img className='h-[clamp(10rem,13vw,14rem)] absolute -top-7 -right-3 md:-right-7' src='svg/arrow.svg'></img>
          <p className='absolute -top-14 -left-9'><PiTranslateBold style={{color:'#F8C045'}} fontSize={100}/></p>
          <div className="rounded-md bg-[rgba(255,255,255,0.5)] absolute -bottom-28 -left-9 px-6 pt-6 pb-10 -rotate-12 "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" className='rounded-full h-16 w-16' alt="" /></div>
          <div className="rounded-md bg-[rgba(255,255,255,0.5)] absolute -top-16 sm:top-8 right-10 px-4 pt-4 pb-8 rotate-12 "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" className='rounded-full h-12 w-12' alt="" /></div>
          <div className="bg-yellow-500 rounded-full h-24  w-24  mb-4 absolute -bottom-12 right-0"></div>
      </div>
    </div>
  )
}
