import React from 'react';

const CourseInfo = () => {
  return (
    <div className=" p-10  flex justify-center items-center">
      <div className="bg-white max-w-4xl mx-auto p-8 rounded-lg  space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Unlock the Door to Dutch Culture and Opportunities</h1>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Why Learn Dutch?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cultural Enrichment: Dive into the rich history and traditions of the Netherlands.</li>
            <li>Career Advancement: Increase your job prospects in Dutch-speaking countries.</li>
            <li>Travel with Confidence: Enjoy your travels to Dutch-speaking regions with ease.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Course Structure:</h2>
          <div className="mt-4 pl-4 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800">A1 (Beginner)</h3>
            <p>Duration: 80-150 hours</p>
            <p>Objectives: Basic phrases, introductions, everyday expressions, simple sentences, basic grammar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
