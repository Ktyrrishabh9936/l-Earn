import React from 'react'
import colors from 'tailwindcss/colors'

export default function Training() {
        const theme = 'blue';
  return (
    
      <section className="container space-y-6  relative">
        <h3 className='  text-[clamp(2rem,2.5vw,3rem)] font-semibold'>We Prepare You For International Exam</h3>
        <div className=" absolute top-1/2 left-[45%]">
        <p className='text-xl'>Our Numbers</p>
        <p className='text-3xl'>10+ Languages</p>
        <p className='text-3xl'>30+ Trainers</p>
        </div>
        <div className=" flex">
                <div className="w-[50%]">
                        <ul className=' list-none space-y-20'>
                                <li className='w-20 relative left-[70%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" /></li>
                                <li className='w-20  relative left-[40%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></li>
                                <li className='w-20 relative left-[40%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" /></li>
                                <li className='w-20 relative left-[70%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></li>
                        </ul>
                </div>
                <div className="w-[50%]">
                <ul className=' list-none space-y-20'>
                                <li className='w-20 relative left-[30%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></li>
                                <li className='w-20  relative left-[60%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></li>
                                <li className='w-20 relative left-[60%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></li>
                                <li className='w-20 relative left-[30%] '><img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" /></li>
                        </ul>
                </div>
        </div>
      </section>

  )
}
