import React, {  useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { MdMenuOpen } from 'react-icons/md';
import { PiCrownCrossFill } from 'react-icons/pi';
import colors from 'tailwindcss/colors'
export default function Navbar() {
  const theme = 'blue';
  const [isOpen,setisOpen] = useState(false);
  const navlinks = ['home','Languages Courses','About Us','Contact Us'];
    function toggleSideBar(){
        setisOpen(!isOpen);
      }

      
  return (
    <div className='flex   w-[100vw] justify-between py-6 whitespace-nowrap shadow-xl shadow-slate-400 px-4 md:px-7 xl:px-9' style={{backgroundColor:colors[theme][800]}}>
      <div className=" flex px-2 gap-7  justify-between  ">
        <p className='flex'>
      
        <div className="flex items-center gap-1 text-clamp-h4">
          <p className=''>
          <AiFillMessage color='yellow' fontSize={50}/>
          </p>
          <div className=" font-Teko  text-white text-2xl leading-6">
                <p>L-Earn</p>
                <p>Academy</p>
          </div>
        </div>
        </p>
        </div>


      <div className="  flex my-auto gap-4  justify-around ">
      <div className="block md:hidden" onClick={toggleSideBar}>
        <MdMenuOpen
          style={{
            backgroundColor: colors[theme][900],
            color: "white",
            fontSize: "40px",
            padding: "4px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className=" md:block hidden my-auto">
        <ul className="flex gap-4 py-2 text-white ">
          {navlinks.map((navlink) => {
          return <li className=' capitalize'>{navlink}</li>
          })}
        </ul>
      </div>
       <div className='hidden md:block my-auto'> 
        <div className="flex gap-8">
       <span className=' h-min  px-2 rounded-full bg-slate-100 my-auto'><BsThreeDots fontSize={30}/></span>
       <span className='px-4 py-2 rounded-full bg-yellow-500 font-semibold h-min'>Apply Now</span>
       </div>
        </div>
        </div>

        {/* SideBar code  */}
        <div className={` absolute z-50 top-0 duration-500 w-[100%]  bg-slate-100  ${isOpen?"left-0":"left-[-100%]"}`}>
          <div className=" flex p-2 justify-between">
          <div className="flex items-center gap-1">
          <div className="font-display   text-xl text-blue-950"><p>L-Earn</p>
          <p>Academy</p></div>
        </div>

        <div className="p-3 float-right" onClick={toggleSideBar}>
          <PiCrownCrossFill  style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "40px",
            padding: "4px",
            borderRadius: "5px",
          }}/>
        </div>
        </div>
        <ul className="flex gap-2 p-2  text-white flex-col ">
          {navlinks.map((navlink) => {
          return <li >{navlink}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
