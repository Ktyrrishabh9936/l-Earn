import React, {  useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { MdMenuOpen } from 'react-icons/md';
export default function Navbar() {
  const [isOpen,setisOpen] = useState(false);
  const navlinks = ['Home','Languages Courses','About Us','Contact Us'];
    function openSideBar(){
        setisOpen(!isOpen);
        document.body.style.height = '100vh';
        document.body.style.overflowY = 'hidden';
      }
    function closeSideBar(){
        setisOpen(!isOpen);
        document.body.style.height = 'auto';
        document.body.style.overflowY = 'scroll';
      }

      
  return (
    <div className='w-[100vw]  py-6 whitespace-nowrap  font-Poppins' style={{backgroundColor:'rgba(29,13,207,1)'}}>
      <div className="container mx-auto flex justify-between">
      <div className=" flex px-2 gap-7  justify-between  ">
        <p className='flex'>
      
        <div className="flex items-center gap-1 text-clamp-h4">
          <p className=' text-yellow-500'>
          <AiFillMessage  fontSize={50}/>
          </p>
          <div className="  text-white text-2xl leading-6 font-ChakraPetch font-bold">
                <p>L-Earn</p>
                <p>Academy</p>
          </div>
        </div>
        </p>
        </div>


      <div className="  flex my-auto gap-x-10  justify-around flex-wrap ">
      <div className="block md:hidden" onClick={openSideBar}>
        <MdMenuOpen
          style={{
            backgroundColor:'rgba(29,13,207,1)',
            color: "white",
            fontSize: "40px",
            padding: "4px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className=" md:block hidden my-auto">
        <ul className="flex  gap-7 py-2 text-white ">
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
        <div className={` absolute z-50 top-0 duration-500 w-[100%] min-h-screen  bg-slate-100  ${isOpen?"left-0":"left-[-100%]"}`}>
          <div className=" flex p-2 justify-between">
          <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 text-clamp-h4">
          <p className=''>
          <AiFillMessage className=' text-yellow-500 '  fontSize={50}/>
          </p>
          <div className="   text-2xl leading-6 font-ChakraPetch font-bold">
                <p>L-Earn</p>
                <p>Academy</p>
          </div>
        </div>
        </div>

        <div className="p-3 float-right" onClick={closeSideBar}>
          <IoMdClose  style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "40px",
            padding: "4px",
            borderRadius: "5px",
          }}/>
        </div>
        </div>
        <ul className="flex py-2  text-gray-500 flex-col  text-xl text-center gap-2 mt-7 ">
          {navlinks.map((navlink) => {
          return <li className='py-4'>{navlink}</li>
          })}
       <li className='px-4 py-2 rounded-full bg-yellow-500 font-semibold h-min'>Apply Now</li>
        </ul>
      </div>
      </div>
    </div>
  )
}
