import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function JoinConsultation() {
  return (
    <div className=' bg-[rgba(19,19,19,1)] py-2 px-4 text-white flex flex-wrap relative '>
      <div className=' flex flex-wrap text-center mx-auto whitespace-break-spaces text-sm mg-text-base '>
        <p className='mx-auto line-clamp-1'> Join Our Free Gen Consultation. Request a callback or Chat with us on </p>
        <p className='flex mx-auto'>
               <span><IoLogoWhatsapp style={{color:'rgba(30,221,26,1)',fontSize:'21px', marginLeft:'8px',marginRight:'8px'}}/></span> <a href='tel:8920743393' className=' text-yellow-500'>+91 89207 43393 , </a> <a href='tel:9968818047' className=' text-yellow-500'> +91 99688 18047</a>
        </p>
      </div>
    </div>
  )
}
