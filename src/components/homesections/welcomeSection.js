import React from 'react'
import { staggerContainer, textVariants, useScrollAnimation } from '../ProviderFunctions'
import { motion } from 'framer-motion'
export default function HomeDetails() {
  const controls = useScrollAnimation();
  
  return (
    <motion.div
  className="scroll-animated"
  initial="hidden"
  animate={controls}
  variants={staggerContainer}
>
      <section className="container px-4 font-ChakraPetch" id='about' >
        <div className="w-full space-y-6  xl:w-[70%] mx-auto mt-10">
        <motion.h1 variants={textVariants}><h3 className='  text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-Salsa'>Welcome to L-Earn Academy, Where Language Learning Meets Excellence!</h3></motion.h1>
        <motion.p variants={textVariants}> <p className='text-xl'>At L-Earn Academy, we believe that mastering a new language opens doors to a world of opportunities. Learning a new language is more than just mastering grammar and vocabulary, it's about opening doors to new cultures and connections.</p></motion.p>
        <motion.div variants={textVariants}> <div className=" relative ">
        <p className='absolute left-[50%] -bottom-7 '><img src="svg/ApplyArrow.svg" alt="" /></p>
        <button className=' text-white text-lg px-4 py-2.5 rounded-full whitespace-nowrap '  style={{backgroundColor:'rgba(29,13,207,1)'}} > Apply Now </button>
        </div>
        </motion.div>
        </div>
      </section>
      </motion.div>
  )
}
