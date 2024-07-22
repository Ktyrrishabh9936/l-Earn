import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-black text-white pt-16 px-8 pb-32 relative ">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-7xl font-bold text-gray-900 opacity-10">Our Results</h1>
      </div>
      <div className="relative flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 pb-12">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Marcos Stanley</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center relative">
          <h3 className="text-xl font-bold mb-2">Aisa Daniel</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <img
              src="img/testimonials-3.jpg"
              alt="Aisa Daniel"
              className="rounded-full border-4 border-yellow-500 h-16"
            />
            <div className="absolute top-2 -left-8 transform rotate-45">
              <div className="w-6 h-6 border-4 border-yellow-500 border-t-0 border-r-0"></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Rlyan</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
