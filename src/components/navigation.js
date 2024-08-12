import React, {  useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { MdMenuOpen } from 'react-icons/md';
import JoinConsultation from './homesections/JoinConsultation';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from './ProviderFunctions';
export default function Navbar({isScrolled=true}) {
  
  const [isOpen,setisOpen] = useState(false);
  const [dropDWN,setdropDWN] = useState(null);
  const navlinks = ['Home','Languages Courses','About Us','Contact Us'];
  const navigate = useNavigate();
  const location = useLocation();
  function handleopenDropdown(e){
    setdropDWN(e.currentTarget);
  }
  function handlecloseDropdown(){
    setdropDWN(null)
  }
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
    <>
    <JoinConsultation/>
    <div className={`w-[100vw] py-3 whitespace-nowrap  font-RobotoSlab drop-nav-shadow sticky top-0 z-50  transition-colors duration-300 ${
        isScrolled ? "bg-[rgb(29,13,207)]" : "bg-[rgb(0,0,0)]"
      }` }>
      <div className="w-[97%] sm:w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto flex justify-between">
      <div className=" flex px-2 gap-7  justify-between  ">
        <p className='flex'>
      
        <div className="flex  " onClick={()=>navigate('/')}>
          <img src="/img/LearnAcademy-logo.png" alt="" className=' h-12 md:h-16'/>
        </div>
        </p>
        </div>


      <div className="  flex my-auto gap-x-10 gap-y-4 justify-around flex-wrap-reverse ">
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
      <div className=" md:block hidden my-auto text-sm">
      <ul className="flex  gap-7 text-white  font-semibold items-center">
          <li className={`capitalize h-min cursor-pointer hover:text-yellow-200 ${location.pathname === '/'?'text-yellow-600':''}`} onClick={()=>navigate('/')} >Home</li>
          <li className='cursor-pointer hover:text-yellow-200' onMouseLeave={handlecloseDropdown}>
            <Dropdown  >
  <MenuButton className=' hover:text-black' sx={{border:'none',color:location.pathname.startsWith("/learn")?"#ca8a04":'white',background:'transparent' }} onMouseEnter={handleopenDropdown}  >Languages Courses</MenuButton>
  <Menu anchorEl={dropDWN} open={Boolean(dropDWN)} onClose={handlecloseDropdown} >
    <MenuItem onClick={()=>navigate('/learn/dutch')}>Dutch</MenuItem>
    <MenuItem onClick={()=>navigate('/learn/spanish')}>Spanish</MenuItem>
    <MenuItem onClick={()=>navigate('/learn/english')}>English</MenuItem>
    <MenuItem onClick={()=>navigate('/learn/japanese')}>Japanese</MenuItem>
    <MenuItem onClick={()=>navigate('/learn/chinese')}>Chinese</MenuItem>
  </Menu>
  </Dropdown>


</li>
<li className=' capitalize h-min cursor-pointer hover:text-yellow-200' ><HashLink smooth  to="/#about" scroll={scrollWithOffset}>About Us</HashLink></li>
<li className=' capitalize h-min cursor-pointer hover:text-yellow-200'><HashLink smooth  to="/#contact" scroll={scrollWithOffset}>Contact Us</HashLink></li>
        </ul>
      </div>
       <div className='hidden md:block my-auto w-max ml-auto text-right'> 
       <button className=' py-2.5 px-5  rounded-full bg-yellow-500 font-semibold h-min font-RobotoSlab text-sm'>Apply Now</button>
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
        <ul className="flex py-2  text-gray-500 flex-col  text-base text-center gap-2 mt-7 ">
          {navlinks.map((navlink) => {
          return <li className='py-4'>{navlink}</li>
          })}
       <li className='px-4 py-2 rounded-md mx-4 bg-yellow-500 font-semibold h-min text-xs'>Apply Now</li>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}
