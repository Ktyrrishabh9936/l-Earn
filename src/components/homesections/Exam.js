import React from 'react'
import colors from 'tailwindcss/colors'

export default function Training() {
        const theme = 'blue';
  return (
    
      <section className="container space-y-6  ">
        <h3 className='  text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-Salsa'>We Prepare You For International Exam</h3>
        <div className=" relative  mx-auto w-full sm:w-[90%] lg:w-[50%] ">
        <span className="text-[clamp(1.4rem,2vw,2rem)]  my-auto absolute top-1/3 left-[30%] sm:left-1/3 font-Agbalumo">

        <p className='text-xl font-Poppins'>Our Numbers</p>
        <p >10+ Languages</p>
        <p>30+ Trainers</p>
        </span>
        <div className=" flex">
                <div className="w-[50%]">
                        <ul className=' list-none space-y-20'>
                                <li className='w-[clamp(4rem,5vw,5rem)] relative left-[60%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" /></li>
                                <li className='w-[clamp(4rem,5vw,5rem)] relative left-[13%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></li>
                                <li className='w-[clamp(4rem,5vw,5rem)] relative left-[13%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" /></li>
                                <li className='w-[clamp(4rem,5vw,5rem)] relative left-[60%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></li>
                        </ul>
                </div>
                <div className="w-[50%]">
                <ul className=' list-none space-y-20'>
                                <li className='w-[clamp(4rem,5vw,5rem)] relative left-[10%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></li>
                                <li className='w-[clamp(4rem,5vw,5rem)]  relative left-[55%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></li>
                                <li className='w-[clamp(4rem,5vw,5rem)] relative left-[55%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></li>
                                <li className='w-[clamp(4rem,5vw,5rem)] relative left-[10%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" /></li>
                        </ul>
                </div>
        </div>
        </div>
      </section>

  )
}
