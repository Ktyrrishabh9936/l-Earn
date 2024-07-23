import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonials = () => {
  const settings = {
    infinite:true,
    arrows:false,
    slidesToShow:3,
    slidesToScroll:1,
    dots:true,
    autoplay:true,
  }
  return (
    <div className="bg-[rgba(10,10,10,0.9)] text-white pt-20 pb-28 px-8 relative">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-7xl sm:text-9xl font-extrabold text-white opacity-10 ">
        <p className="">Our </p>
        <p>Results</p>
      </div>
      <Slider {...settings} autoplay  responsive={[{breakpoint:600,settings:{slidesToShow:1}},{breakpoint:1024,settings:{slidesToShow:2},}]} >
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-lg shadow-lg text-center relative mb-24">
          <h3 className="text-xl font-bold mb-2">Marcos Stanley</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <img
              src="img/testimonials-1.jpg"
              alt="Marcos Stanley"
              className="rounded-full border-4 border-yellow-500 h-16"
            />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-lg shadow-lg text-center relative mb-24">
          <h3 className="text-xl font-bold mb-2">Aisa Daniel</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <img
              src="img/testimonials-2.jpg"
              alt="Aisa Daniel"
              className="rounded-full border-4 border-yellow-500 h-16"
            />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-lg shadow-lg text-center relative mb-24">
          <h3 className="text-xl font-bold mb-2">Rlyan</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <img
              src="img/testimonials-3.jpg"
              alt="Rlyan"
              className="rounded-full border-4 border-yellow-500 h-16"
            />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-lg shadow-lg text-center relative mb-24">
          <h3 className="text-xl font-bold mb-2">Marcos Stanley</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <img
              src="img/testimonials-1.jpg"
              alt="Marcos Stanley"
              className="rounded-full border-4 border-yellow-500 h-16"
            />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-lg shadow-lg text-center relative mb-24">
          <h3 className="text-xl font-bold mb-2">Aisa Daniel</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <img
              src="img/testimonials-2.jpg"
              alt="Aisa Daniel"
              className="rounded-full border-4 border-yellow-500 h-16"
            />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-lg shadow-lg text-center relative mb-24">
          <h3 className="text-xl font-bold mb-2">Rlyan</h3>
          <p>Exposure to the cultural aspects of language to enhance understanding and appreciation.</p>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <img
              src="img/testimonials-3.jpg"
              alt="Rlyan"
              className="rounded-full border-4 border-yellow-500 h-16"
            />
          </div>
        </div>
        </Slider>
    </div>
  );
};

export default Testimonials;
