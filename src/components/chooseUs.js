import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-8">
      <h2 className=" text-center mb-12  text-[clamp(2rem,2.5vw,3rem)] font-semibold">Why Choose Us</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
          <p className="text-center text-lg">Tailored courses to fit individual learning styles and goals.</p>
          <div className="bg-yellow-500 rounded-lg h-32 w-48 mb-4 -rotate-12  relative top-10 -left-12"></div>
        </div>
        <div className="flex flex-col items-center gap-4">

          <h3 className="text-xl font-bold mb-2">Cultural Immersion</h3>
          <p className="text-center text-lg">Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="bg-yellow-500 rounded-lg h-32 w-48 mb-4"></div>

        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold mb-2">Interactive Classes</h3>
          <p className="text-center text-lg">Encouraging and nurturing atmosphere that fosters growth and confidence.</p>
          <div className="bg-yellow-500 rounded-full h-32 w-32 mb-4"></div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full">Apply Now</button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
