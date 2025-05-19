import React from 'react';

const CheckIcon = () => (
  <svg className="h-5 w-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PlanFeature = ({ text }) => (
  <div className="flex items-start space-x-3 mb-4">
    <CheckIcon />
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Learn a single topic or skill",
      price: "49",
      period: "month",
      priceRange: "$49 – $79",
      description: "Perfect for individuals starting their learning journey",
      buttonText: "Get Started",
      buttonVariant: "outline",
      features: [
        "Access to individual course content",
        "Course completion certificate",
        "24/7 online access",
        "Mobile learning support",
        "Basic assessments and quizzes"
      ]
    },
    {
      name: "Pro Plan",
      subtitle: "Most Popular Choice",
      price: "59",
      period: "month",
      isPopular: true,
      description: "Ideal for serious learners seeking comprehensive education",
      buttonText: "Start 7-day free trial",
      buttonVariant: "solid",
      features: [
        "Access 10,000+ courses and Specializations",
        "Unlimited certificates",
        "Interactive assignments",
        "Peer feedback and reviews",
        "Expert instructor support",
        "Group discussion forums",
        "Advanced project assessments"
      ]
    },
    {
      name: "Annual Plan",
      subtitle: "Best Value",
      price: "399",
      period: "year",
      description: "Maximum flexibility with the best savings",
      buttonText: "Try Annual Plan",
      buttonVariant: "outline",
      features: [
        "Everything in Pro Plan",
        "Save 44% compared to monthly",
        "Exclusive webinars and events",
        "Priority support",
        "Early access to new courses",
        "Downloadable course materials",
        "Personal learning coach"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Learning Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your learning goals and budget. All plans include access to world-class education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${plan.isPopular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.isPopular && (
                <div className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className={`${plan.isPopular ? 'pt-8' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.priceRange ? (
                      <div>
                        <span className="text-3xl font-bold">{plan.priceRange}</span>
                        <span className="text-gray-600 text-sm ml-1">/month</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-bold">${plan.price}</span>
                        <span className="text-gray-600 text-sm ml-1">/{plan.period}</span>
                      </div>
                    )}
                  </div>

                  <button 
                    className={`w-full py-3 px-4 rounded-xl font-medium transition-colors duration-200 ${
                      plan.buttonVariant === 'solid'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {plan.buttonVariant === 'solid' ? (
                    <p className="text-sm text-center mt-2 text-gray-600">Cancel anytime</p>
                  ) : plan.name === "Annual Plan" ? (
                    <p className="text-sm text-center mt-2 text-gray-600">14-day money-back guarantee</p>
                  ) : null}
                </div>

                <div className="border-t mt-8 pt-6">
                  <p className="font-medium mb-4 text-sm">Plan includes:</p>
                  {plan.features.map((feature, i) => (
                    <PlanFeature key={i} text={feature} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">All Plans Include</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Certificate",
                description: "Earn recognized certificates upon completion"
              },
              {
                title: "Flexible Learning",
                description: "Learn at your own pace, on your schedule"
              },
              {
                title: "Expert Instructions",
                description: "Learn from industry professionals"
              },
              {
                title: "Lifetime Access",
                description: "Access your completed courses forever"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans; 