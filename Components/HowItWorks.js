import React from 'react';

const StepItem = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex flex-col items-center">
      <div className="bg-blue-600 text-white w-14 h-14 rounded-lg flex flex-col items-center justify-center mb-6">
        <div className="text-xs font-medium">Step</div>
        <div className="text-lg font-bold">{number}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Explore Categories",
      description: "Browse through our diverse course categories to find the area that interests you the most."
    },
    {
      number: 2,
      title: "Select course",
      description: "Read course details to get all the details you need to make an informed decision."
    },
    {
      number: 3,
      title: "Enroll Easily",
      description: "Sign up for your chosen course directly through our website."
    },
    {
      number: 4,
      title: "Start Learning",
      description: "Learn at your own pace, track your progress, and celebrate your success."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
          {steps.map((step) => (
            <StepItem
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 