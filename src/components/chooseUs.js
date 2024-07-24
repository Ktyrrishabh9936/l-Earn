import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-blue-700 text-white py-16 px-8 font-ChakraPetch ">
      <div className="container mx-auto">
      <h2 className=" text-center mb-12  text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-Salsa">Why Choose Us</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-8 md:space-y-0 text-center">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold mb-2">Personalized Learning</h3>
          <p className=" text-xl">Tailored courses to fit individual learning styles and goals.</p>
          <div className="bg-yellow-500 rounded-lg h-24 w-44 mb-4 -rotate-12  relative top-8 "></div>
        </div>
        <div className="flex flex-col items-center gap-4">

          <h3 className="text-2xl font-bold mb-2">Cultural Immersion</h3>
          <p className=" text-xl">Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="bg-yellow-500 rounded-lg h-24 w-44 mb-4"></div>

        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold mb-2">Interactive Classes</h3>
          <p className=" text-xl">Encouraging and nurturing atmosphere that fosters growth and confidence.</p>
          <div className=" relative ">
        <p className='absolute -right-20 lg:-right-24 top-1/6 lg:top-1/4 '><img className=' h-14 lg:h-20' src="svg/ApplyArrow.svg" alt="" /></p>
        <div className="bg-yellow-500 rounded-full h-20 lg:h-28 w-20 lg:w-28 mb-4"></div>
        </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full">Apply Now</button>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;
