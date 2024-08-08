import React from 'react'
import { FaLanguage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function NewCareers() {
        const theme = 'blue';
        const navigate = useNavigate();
  return (
    
      <section className="container space-y-6 px-6 sm:px-0 font-ChakraPetch">
        <h3 className=' text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-Salsa'>New Language, New Career</h3>
        <p className='text-xl'>Choose The Right Foreign Language</p>
        <div className="w-full  overflow-x-scroll ">
        {/* <div className="flex gap-5  mx-auto w-min">
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" />                
                </div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" />                
                </div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></div>
        </div> */}

<div className="py-10  flex justify-center items-center text-left">
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center p-4 bg-white shadow-lg rounded-lg relative group">
                 <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 w-full h-full bg-[#2c496499]  flex space-x-4 z-2 text-white flex-col gap-2 justify-center items-center " >
                 <button onClick={()=>navigate('/languages')} className='px-4 py-2 rounded-md  border-2 border-white text-white font-semibold h-min w-max '>Read More</button>
                        </div>
            <div className="p-3 rounded-full bg-gray-200 text-gray-800">
              <FaLanguage size={24} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Dutch (Netherlands)</h2>
              <p>Dutch is a West Germanic language, spoken by about 25 million people as a first language.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>

  )
}
