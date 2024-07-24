import React from 'react'
import colors from 'tailwindcss/colors'

export default function NewCareers() {
        const theme = 'blue';
  return (
    
      <section className="container space-y-6 px-6 sm:px-0 font-ChakraPetch">
        <h3 className=' text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-Salsa'>New Language, New Career</h3>
        <p className='text-xl'>Choose The Right Foreign Language</p>
        <div className="w-full  overflow-x-scroll ">
        <div className="flex gap-5  mx-auto w-min">
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" />                
                </div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" />                
                </div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></div>
        </div>
        </div>
      </section>

  )
}
