import React from 'react';

const SubscriptionPlans = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Single learning program */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Single learning program</h3>
            <p className="text-sm text-gray-600 mb-4">Learn a single topic or skill and earn a credential</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">$49 – $79</span>
              <span className="text-gray-600 text-sm">/month</span>
            </div>
            
            <p className="text-sm mb-8">Visit an individual course or Specialization page to purchase.</p>
            
            <div className="border-t pt-6">
              <div className="flex mb-4">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm">Access all courses within the learning program</p>
              </div>
              
              <div className="flex">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm">Earn a certificate upon completion after your trial ends</p>
              </div>
            </div>
          </div>
          
          {/* Coursera Plus Monthly */}
          <div className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="bg-blue-600 text-white text-center py-1 px-4 absolute top-0 inset-x-0 rounded-t-lg">
              Most popular
            </div>
            <h3 className="text-xl font-bold mb-2 mt-6">Coursera Plus Monthly</h3>
            <p className="text-sm text-gray-600 mb-4">Complete multiple courses and earn credentials in the short term</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">$59</span>
              <span className="text-gray-600 text-sm">/month</span>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-md mb-2">
              Start 7-day free trial
            </button>
            <p className="text-sm text-center mb-8">Cancel anytime</p>
            
            <div className="border-t pt-6">
              <div className="flex mb-4">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm">Access 10,000+ courses and Specializations from 170+ leading companies and universities</p>
              </div>
              
              <div className="flex mb-4">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm">Earn unlimited certificates after your trial ends</p>
              </div>
              
              <div className="flex">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm">Learn job-relevant skills and succeed in your career</p>
              </div>
            </div>
          </div>
          
          {/* Coursera Plus Annual */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Coursera Plus Annual</h3>
            <p className="text-sm text-gray-600 mb-4">Combine flexibility and savings with long-term learning goals</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">$399</span>
              <span className="text-gray-600 text-sm">/year</span>
            </div>
            
            <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-md mb-2">
              Try Coursera Plus Annual
            </button>
            <p className="text-sm text-center mb-8">14-day money-back guarantee</p>
            
            <div className="border-t pt-6">
              <p className="text-sm mb-4">Everything included in the monthly plan, plus:</p>
              
              <div className="flex mb-4">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm">Save when you pay up front for the year</p>
              </div>
              
              <div className="flex">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm">Enjoy maximum flexibility to achieve work/life balance and learn at your own pace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans; 