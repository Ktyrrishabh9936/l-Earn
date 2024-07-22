import React from 'react'
import colors from 'tailwindcss/colors'

export default function HomeDetails() {
        const theme = 'blue';
  return (
    
      <section className="container space-y-6">
        <h3 className='  text-[clamp(2rem,2.5vw,3rem)] font-semibold'>Welcome to L-Earn Academy, Where Language Learning Meets Excellence!</h3>
        <p className='text-xl'>At L-Earn Academy, we believe that mastering a new language opens doors to a world of opportunities. Learning a new language is more than just mastering grammar and vocabulary, it's about opening doors to new cultures and connections.</p>
        <button className=' text-white text-lg py-3 px-5 rounded-full'  style={{backgroundColor:colors[theme][900]}} >Apply Now</button>
      </section>

  )
}
