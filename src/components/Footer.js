import React from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=' bg-black p-8 flex flex-col md:flex-row text-gray-500 space-x-8'>
      <div className=" w-full md:w-[60%] space-y-9 ">
      <div className="flex items-center gap-1 text-clamp-h4 ">
          <p className=''>
          <AiFillMessage color='yellow' fontSize={50}/>
          </p>
          <div className=" font-Teko  text-white text-2xl leading-6">
                <p>L-Earn</p>
                <p>Academy</p>
          </div>
        </div>
        <ul className=' list-none flex gap-4'>
                <li className=""><BiLogoFacebook fontSize={30}/></li>
                <li className=""><FaLinkedinIn fontSize={30}/></li>
                <li className=""><FaYoutube fontSize={30}/></li>
                <li className=""><FaInstagram fontSize={30}/></li>
        </ul>
      </div>
      <div className=" w-full md:w-[40%] flex justify-evenly py-5">
      <ul className=' list-none flex flex-col gap-4'>
                <li className=' font-bold'>Home</li>
                <li>About Us </li>
                <li>Gallary</li>
                <li>Testimonials</li>
        </ul>
      <ul className=' list-none flex flex-col gap-4'>
                <li className=' font-bold'>Legal</li>
                <li>Terms & Conditions </li>
                <li>Privacy Policy </li>
                <li>Legal Policy</li>
        </ul>
      </div>
    </footer>
  )
}
