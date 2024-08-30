import React from 'react'

export default function Training() {
        const exam = [
                {image:'/img/Rectangle_18.png',examname:'IELTS (International English Language Testing System)'},
                {image:'/img/Rectangle_16.png',examname:'TOEFL (Test of English as a Foreign Language)'},
                {image:'/img/Rectangle_12.png',examname:'NT2 (Dutch as a Second Language)'},
                {image:'/img/Rectangle_13.png',examname:'DELE (Diplomas de Español como Lengua Extranjera)'},
                {image:'/img/Rectangle_15.png',examname:'Goethe-Zertifikat'},
                {image:'/img/Rectangle_18.png',examname:'ILTS (International Hindi Proficiency Test)'},
                {image:'/img/Rectangle_19.png',examname:'TOPIK (Test of Proficiency in Korean)'},
                {image:'/img/Rectangle_19.png',examname:'ALPT (Arabic Language Proficiency Test)'},
                // {image:'/img/Rectangle_19.png',examname:'UKBI (Uji Kemahiran Berbahasa Indonesia)'},
        ]
  return (
    
      <section className="container space-y-6  ">
        <h3 className='  text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-RobotoSlab px-3 pb-4'>We Prepare You For International Exam</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-3  mx-auto ">
        {exam.map((exam)=>{
                return <div className=" rounded-lg   bg-white ">
                <img
                  className="w-30 h-30 max-w-30 overflow-hidden  object-contain mx-auto"
                  src={exam.image}
                  alt="Card Image"
                />
                <div className="p-3">
                  <p className="text-gray-700 mb-4">
                    {exam.examname}
                  </p>
          
                </div>
              </div>
        })}
        </div>
      </section>

  )
}
