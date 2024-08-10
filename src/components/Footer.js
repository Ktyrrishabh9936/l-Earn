import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from './ProviderFunctions';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className=' bg-black py-8  text-gray-500 '>
      <div className="w-[97%] sm:w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto flex flex-col md:flex-row ">
      <div className=" w-min md:w-[60%] space-y-9 mx-auto">
      <div className="flex items-center gap-1 " onClick={()=>navigate('/')}>
          <img src="/img/LearnAcademy-logo.png" alt="" className=' h-12 md:h-16'/>
        </div>
        <ul className=' list-none flex gap-4 mx-auto'>
                <li className=""><BiLogoFacebook fontSize={30}/></li>
                <li className=""><FaLinkedinIn fontSize={30}/></li>
                <li className=""><FaYoutube fontSize={30}/></li>
                <li className=""><FaInstagram fontSize={30}/></li>
        </ul>
      </div>
      <div className=" w-max md:w-[40%] flex flex-col gap-y-7 text-center mx-auto  md:flex-row justify-between py-5">
      <ul className=' list-none flex flex-col gap-4'>
      <Link to="/"><li className=' font-bold'>Home</li></Link>
      <HashLink smooth  to="/#about" scroll={scrollWithOffset}><li>About Us </li></HashLink>
                <li>Gallary</li>
                <HashLink smooth  to="/#testimonials"> <li>Testimonials</li></HashLink>
        </ul>
      <ul className=' list-none flex flex-col gap-4'>
                <li className=' font-bold'>Legal</li>
                <li>Terms & Conditions </li>
                <li>Privacy Policy </li>
                <li>Legal Policy</li>
        </ul>
        </div>
      </div>
    </footer>
  )
}
