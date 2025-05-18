import React from 'react';
import Image from 'next/image';

const CareerBenefits = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-6">
            77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.<sup>1</sup>
          </h2>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md">
            Start 7-day Free Trial
          </button>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-80">
            <div className="absolute top-0 right-0 w-full h-full bg-blue-500 rounded-tl-[100px] rounded-br-[100px] transform rotate-6"></div>
            <div className="absolute top-5 right-5 w-[90%] h-[90%] rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <div className="w-full h-full bg-slate-400 flex items-center justify-center">
                  {/* Will be replaced with actual image later */}
                  <span className="text-white text-2xl font-bold">Student Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits; 