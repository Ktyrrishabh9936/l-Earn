import React from 'react';

const CourseInfo = ({language}) => {
  return (
    <div className=" w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto font-Poppins">
      <div className="bg-white max-w-xl  mx-auto md:mx-0 w-full md:w-[40%]  rounded-lg  space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center md:text-left ">Unlock the Door to <span className=' capitalize'>{language}</span> Culture and Opportunities</h1>
        <div className='space-y-6 '>
          <h2 className=" text-gray-800">Why Learn <span className=' capitalize'>{language}</span>?</h2>
          <ul className="list-disc pl-7 space-y-4">
            <li>Cultural Enrichment: Dive into the rich history and traditions of the Netherlands.</li>
            <li>Career Advancement: Increase your job prospects in  <span className=' capitalize'>{language}</span>-speaking countries.</li>
            <li>Travel with Confidence: Enjoy your travels to  <span className=' capitalize'>{language}</span>-speaking regions with ease.</li>
          </ul>
        </div>
      
        <div className=''>
        <h1 className="text-3xl  text-gray-900 ">Course Structure:</h1>
          <div className="mt-4  bg-[#EBEBEB]">
            <h3 className="text-xl font-semibold bg-[#1D0DCF] text-white px-4 lg:px-6 py-3">A1 (Beginner)</h3>
            <div className="p-4 lg:p-6  space-y-7">
            <p>Duration: 80-150 hours</p>
            <p>Objectives: Basic phrases, introductions, everyday expressions, simple sentences, basic grammar</p>
            </div>
          </div>
          <div className="mt-4 bg-[#EBEBEB]">
        <h3 className="text-xl font-semibold bg-[#1D0DCF] text-white px-4 lg:px-6 py-3">A2 (Elementary)</h3>
        <div className="p-4 lg:p-6 space-y-7">
            <p>Duration: 100-180 hours</p>
            <p>Objectives: Everyday routines, simple communication on familiar topics, more complex grammar</p>
        </div>
    </div>

    <div className="mt-4 bg-[#EBEBEB]">
        <h3 className="text-xl font-semibold bg-[#FFC02E] text-black px-4 lg:px-6 py-3">B1 (Intermediate)</h3>
        <div className="p-4 lg:p-6 space-y-7">
            <p>Duration: 100-180 hours</p>
            <p>Objectives: Everyday routines, simple communication on familiar topics, more complex grammar</p>
        </div>
    </div>

    <div className="mt-4 bg-[#EBEBEB]">
        <h3 className="text-xl font-semibold bg-[#FFC02E] text-black px-4 lg:px-6 py-3">B2 (Upper Intermediate)</h3>
        <div className="p-4 lg:p-6 space-y-7">
            <p>Duration: 200-300 hours</p>
            <p>Objectives: Complex texts, technical discussions, fluent interaction, advanced grammar</p>
        </div>
    </div>

    <div className="mt-4 bg-[#EBEBEB]">
        <h3 className="text-xl font-semibold bg-[#080808]  text-[#FFC02E]  px-4 lg:px-6 py-3">C1 (Advanced)</h3>
        <div className="p-4 lg:p-6 space-y-7">
            <p>Duration: 250-350 hours</p>
            <p>Objectives: Long texts, implicit meanings, fluent communication, professional and academic language</p>
        </div>
    </div>

    <div className="mt-4 bg-[#EBEBEB]">
        <h3 className="text-xl font-semibold bg-[#080808] text-[#FFC02E]  px-4 lg:px-6 py-3">C2 (Proficient)</h3>
        <div className="p-4 lg:p-6 space-y-7">
            <p>Duration: 300-450 hours</p>
            <p>Objectives: Virtually everything heard or read, fluent expression, detailed argumentation, nuanced understanding</p>
        </div>
    </div>
        </div>
        <p className=' font-Agbalumo '>Included Course Materials</p>
      </div>
        <h1 className="text-3xl font-semibold text-gray-900 mx-auto text-center my-7 w-[70%] lg:w-[50%] ">
        Start today and experience the benefits of speaking <span className=' capitalize'>{language}!</span> </h1>
    </div>
  );
}

export default CourseInfo;
