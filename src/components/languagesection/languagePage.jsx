import React from 'react'

export default function LanguagePage() {
  return (
    <div className='min-h-[90vh] bg-[rgb(29,13,207)]  pb-28 flex justify-center items-center  ' >
        <div className='w-[97%] sm:w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto flex justify-between items-center  '>
        <div className='  text-white w-1/2 whitespace-break-spaces'>
        <h1 className="text-5xl font-bold mb-6">Learn Dutch with <span className=' whitespace-nowrap text-[rgb(234,179,8)]'>L-Earn</span> Academy</h1>
        <p className="mb-6">At L-Earn Academy, we believe that learning Dutch opens doors to a rich cultural heritage and new opportunities. Our Dutch courses are designed to help you improve your language skills quickly and effectively.</p>
        </div>
        <div className="bg-white text-black max-w-lg ml-auto p-8 rounded-lg shadow-lg w-1/2">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
            <select id="language" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Dutch</option>
              <option>English</option>
              <option>French</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="text" id="contact" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <button type="submit" className=" my-5 w-max mx-auto bg-[rgb(234,179,8)] text-white px-3 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}
