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
  const navigate = useNavigate();
  const location = useLocation();
  function handleopenDropdown(e){
    setdropDWN(e.currentTarget);
  }
  function handlecloseDropdown(){
    setdropDWN(null)
  }
    function toggleSideBar(){
        setisOpen(!isOpen);
      }
    function closeSideBar(){
        setisOpen(false);
      }
  return (
    <>
    <JoinConsultation/>
    <div className={`w-[100vw] py-3 whitespace-nowrap  font-RobotoSlab drop-nav-shadow sticky top-0 z-50  transition-colors duration-300 ${
        isScrolled ? "bg-[rgb(29,13,207)]" : "bg-[rgb(0,0,0)]"
      }` }>
      <div className="w-[97%] sm:w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto flex flex-col md:flex-row justify-between">
      <div className=" flex px-2 gap-7  justify-between  ">
        <p className='flex'>
      
        <div className="flex  " onClick={()=>navigate('/')}>
          <img src="/img/LearnAcademy-logo.png" alt="" className=' h-12 md:h-16'/>
        </div>
        
        </p>
        <div className="block md:hidden" onClick={toggleSideBar}>
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
        </div>

      
        <div className={`transition-all h-min my-auto  ${isOpen?'block scale-y-100':'hidden scale-y-0'} md:block md:scale-y-100`}>
      <div className='flex flex-col md:flex-row   gap-x-10  gap-y-8 md:gap-y-4 justify-around flex-wrap-reverse py-10 md:p-0  items-center my-auto ml-5'>
      <div className="  my-auto text-sm">
      <ul className="flex flex-col md:flex-row   gap-7 text-white  font-semibold items-center">
          <li className={`capitalize h-min cursor-pointer hover:text-yellow-200 ${location.pathname === '/'?'text-yellow-600':''}`} onClick={()=>{navigate('/');closeSideBar();}} >Home</li>
          <li className='cursor-pointer hover:text-yellow-200' onMouseLeave={handlecloseDropdown}>
            <Dropdown  >
  <button className=' my-0 md:my-2' style={{color:location.pathname.startsWith("/learn")?"#ca8a04":'white'}} onMouseEnter={handleopenDropdown} onClick={handleopenDropdown} >Languages Courses</button>
  <Menu anchorEl={dropDWN} open={Boolean(dropDWN)} onClose={handlecloseDropdown} >
    <MenuItem style={{color:location.pathname === '/learn/dutch'?'#1d0dcf':'  #1f2937'}} onClick={()=>{navigate('/learn/dutch');closeSideBar();handlecloseDropdown();}}>Dutch</MenuItem>
    <MenuItem style={{color:location.pathname === '/learn/spanish'?'#1d0dcf':'  #1f2937'}} onClick={()=>{navigate('/learn/spanish');closeSideBar();handlecloseDropdown();}}>Spanish</MenuItem>
    <MenuItem style={{color:location.pathname === '/learn/english'?'#1d0dcf':'  #1f2937'}} onClick={()=>{navigate('/learn/english');closeSideBar();handlecloseDropdown();}}>English</MenuItem>
    <MenuItem style={{color:location.pathname === '/learn/japanese'?'#1d0dcf':'  #1f2937'}} onClick={()=>{navigate('/learn/japanese');closeSideBar();handlecloseDropdown();}}>Japanese</MenuItem>
    <MenuItem style={{color:location.pathname === '/learn/chinese'?'#1d0dcf':'  #1f2937'}} onClick={()=>{navigate('/learn/chinese');closeSideBar();handlecloseDropdown();}}>Chinese</MenuItem>
  </Menu>
  </Dropdown>


</li>
<li className=' capitalize h-min cursor-pointer hover:text-yellow-200' onClick={()=>closeSideBar()}><HashLink smooth  to="/#about" scroll={scrollWithOffset}>About Us</HashLink></li>
<li className=' capitalize h-min cursor-pointer hover:text-yellow-200'><HashLink smooth  to="/#contact" scroll={scrollWithOffset} onClick={()=>closeSideBar()}>Contact Us</HashLink></li>
        </ul>
      </div>
       <div className=' my-0 md:my-auto mx-auto md:mx-0 w-max ml-auto text-right'> 
       <button className=' py-2.5 px-5  rounded-full bg-yellow-500 font-semibold h-min font-RobotoSlab text-sm' onClick={()=>closeSideBar()}>Apply Now</button>
        </div>
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
