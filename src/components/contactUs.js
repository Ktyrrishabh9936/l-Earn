import React from 'react';

const ContactForm = () => {
  return (
    <div className=" flex flex-col items-center justify-center container ">
        <h2 className=" text-[clamp(2rem,2.5vw,3rem)] font-semibold mb-6 text-center px-6">Let’s Get Connected</h2>
        <p className="mb-6 text-center text-xl px-6">If You Have Any Query, Please Contact Us</p>
      <div className=" p-8 rounded-lg  w-full flex flex-col-reverse lg:flex-row gap-8">
        <form className='w-full lg:w-[60%] pb-8'>
          <div className="flex gap-6">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
              First name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
              Last name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last-name"
              type="text"
              placeholder="Smitherton"
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email@janesfakedomain.net"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Your message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your question or message"
              rows="4"
            ></textarea>
          </div>
          <div className=" text-lg ">
            <button
              className="bg-yellow-500 hover:bg-yellow-600  font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-xl"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center rounded-full w-full lg:w-[40%] px-6">
          <img src="img/testimonials-3.jpg " className='rounded-full ' alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
