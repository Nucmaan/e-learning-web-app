import React from 'react';
import Image from 'next/image';

const LearningStats = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center md:items-start p-6 bg-white rounded-lg shadow-sm max-w-md">
              <div className="relative w-full h-60 mb-6">
                <div className="w-full h-full bg-gray-200 rounded-lg">
                  {/* Will be replaced with actual image later */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/nasri.jpeg"
                      alt="Student learning"
                      width={300}
                      height={200}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">87%</span>
                    <span className="text-xs text-blue-600">Average Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-sm text-gray-500 mb-2">Online Courses</h3>
            <h2 className="text-3xl font-bold mb-4">Consistent <span className="text-orange-500">learning</span></h2>
            <p className="mb-6 text-gray-600">
              Easier online video/learning platform to practice for Product Design teams and build back confidence.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold mb-2">400+</div>
                <p className="text-sm text-gray-500">Hours of learning content across 100+ courses</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100,000+</div>
                <p className="text-sm text-gray-500">Students actively learning right now</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-md font-medium">
                Learn More
              </button>
              <button className="border border-black px-6 py-2 rounded-md font-medium">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningStats; 