import React from 'react'
import colors from 'tailwindcss/colors'

export default function MainSection() {
        const theme = 'blue';
  return (
    <div className='h-[80vh] flex justify-center items-center' style={{backgroundColor:colors[theme][800]}}>
      <div className=" text-[clamp(5rem,8vw,9rem)] font-extrabold flex flex-col text-center font-Inter leading-[4rem] md:leading-[5rem] xl:leading-[8rem] text-white">
        <span>Master</span>
        <span>New</span>
        <span>Languages</span>
          
      </div>
    </div>
  )
}
