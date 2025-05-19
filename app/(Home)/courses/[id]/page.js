import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CourseDetailPage({ params }) {
  const courseId = parseInt(params.id);
  
  // In a real app, this data would be fetched from an API or database based on the ID
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      level: 'Beginner to Advanced',
      duration: '42 hours',
      rating: 4.8,
      reviews: 1254,
      image: '/images/nasri.jpeg',
      instructor: 'John Williams',
      price: '$94.99',
      students: '12,450',
      lastUpdated: 'August 2023',
      description: 'Master HTML, CSS, JavaScript, React, Node and MongoDB to become a full-stack web developer.',
      longDescription: 'This comprehensive bootcamp takes you from absolute beginner to professional developer. You\'ll learn front-end and back-end technologies including HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB and more. Build real-world projects for your portfolio and gain the skills needed to land your first developer job or freelance clients.',
      whatYouWillLearn: [
        'Build responsive real-world websites with HTML and CSS',
        'Master JavaScript including ES6+ and asynchronous programming',
        'Create full-stack web applications with React, Node and MongoDB',
        'Implement user authentication and authorization',
        'Deploy web applications to production environments',
        'Work with APIs, third-party libraries and developer tools'
      ],
      curriculum: [
        {
          section: 'Introduction to Web Development',
          lectures: ['Web Development Fundamentals', 'Setting Up Your Development Environment', 'HTML Basics'],
          duration: '4 hours'
        },
        {
          section: 'CSS & Responsive Design',
          lectures: ['CSS Fundamentals', 'Flexbox & CSS Grid', 'Responsive Design Principles', 'CSS Frameworks'],
          duration: '8 hours'
        },
        {
          section: 'JavaScript Programming',
          lectures: ['JavaScript Basics', 'DOM Manipulation', 'Event Handling', 'Asynchronous JavaScript'],
          duration: '10 hours'
        },
        {
          section: 'Front-End Frameworks',
          lectures: ['Introduction to React', 'React Components', 'State and Props', 'Hooks', 'Routing'],
          duration: '12 hours'
        },
        {
          section: 'Back-End Development',
          lectures: ['Node.js Basics', 'Express Framework', 'MongoDB & Mongoose', 'RESTful API Design'],
          duration: '8 hours'
        }
      ]
    },
    {
      id: 2,
      title: 'Advanced Data Science with Python',
      level: 'Advanced',
      duration: '28 hours',
      rating: 4.7,
      reviews: 876,
      image: '/images/nasri.jpeg',
      instructor: 'Maria Rodriguez',
      price: '$89.99',
      students: '8,760',
      lastUpdated: 'July 2023',
      description: 'Learn pandas, NumPy, matplotlib, scikit-learn, and machine learning algorithms for data science.',
      longDescription: 'Take your Python skills to the next level with this advanced data science course. Perfect for programmers who already know Python basics, this course covers essential libraries like pandas and NumPy, data visualization with matplotlib and seaborn, and machine learning with scikit-learn. You\'ll work on real-world datasets and build a portfolio of data science projects.',
      whatYouWillLearn: [
        'Process, clean and analyze data with pandas and NumPy',
        'Create stunning data visualizations with matplotlib and seaborn',
        'Build machine learning models with scikit-learn',
        'Implement regression, classification and clustering algorithms',
        'Apply feature engineering and model evaluation techniques',
        'Work with time series data and natural language processing'
      ],
      curriculum: [
        {
          section: 'Python for Data Science',
          lectures: ['Python Review', 'NumPy Arrays', 'Pandas Fundamentals', 'Data Cleaning'],
          duration: '6 hours'
        },
        {
          section: 'Data Visualization',
          lectures: ['Matplotlib Deep Dive', 'Seaborn for Statistical Visualization', 'Interactive Visualizations'],
          duration: '5 hours'
        },
        {
          section: 'Machine Learning Fundamentals',
          lectures: ['Supervised vs. Unsupervised Learning', 'Linear Regression', 'Classification Algorithms'],
          duration: '8 hours'
        },
        {
          section: 'Advanced ML Techniques',
          lectures: ['Ensemble Methods', 'Feature Engineering', 'Model Evaluation', 'Hyperparameter Tuning'],
          duration: '9 hours'
        }
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      level: 'Intermediate',
      duration: '18 hours',
      rating: 4.9,
      reviews: 932,
      image: '/images/nasri.jpeg',
      instructor: 'Sarah Johnson',
      price: '$69.99',
      students: '9,320',
      lastUpdated: 'September 2023',
      description: 'Comprehensive guide to SEO, SEM, social media marketing, content strategy and analytics.',
      longDescription: 'This practical masterclass covers all aspects of modern digital marketing, from SEO and paid advertising to social media management and content creation. Learn to create effective marketing campaigns, optimize for search engines, analyze performance metrics, and drive measurable business results through digital channels.',
      whatYouWillLearn: [
        'Develop comprehensive digital marketing strategies',
        'Optimize websites for search engines (SEO)',
        'Create and manage effective paid advertising campaigns',
        'Build engaged social media communities across platforms',
        'Craft content marketing strategies that drive conversions',
        'Analyze marketing performance using Google Analytics'
      ],
      curriculum: [
        {
          section: 'Digital Marketing Strategy',
          lectures: ['Understanding the Digital Landscape', 'Customer Journey Mapping', 'Goal Setting and KPIs'],
          duration: '3 hours'
        },
        {
          section: 'Search Engine Optimization',
          lectures: ['On-Page SEO Techniques', 'Off-Page SEO Strategies', 'Technical SEO Audits', 'Keyword Research'],
          duration: '5 hours'
        },
        {
          section: 'Paid Advertising',
          lectures: ['Google Ads Fundamentals', 'Facebook & Instagram Ads', 'Campaign Optimization'],
          duration: '4 hours'
        },
        {
          section: 'Social Media & Content Marketing',
          lectures: ['Platform-Specific Strategies', 'Content Calendar Creation', 'Community Management'],
          duration: '4 hours'
        },
        {
          section: 'Analytics & Optimization',
          lectures: ['Google Analytics Deep Dive', 'Conversion Rate Optimization', 'Marketing Automation'],
          duration: '2 hours'
        }
      ]
    }
  ];

  // Find the requested course or default to the first one
  const course = courses.find(c => c.id === courseId) || courses[0];

  return (
    <div className="container mx-auto px-4 pb-16 pt-24">
      <div className="mb-6">
        <Link href="/courses" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to All Courses
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < Math.floor(course.rating) ? "currentColor" : "none"}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-800 ml-1">{course.rating}</span>
            </div>
            <span className="text-sm text-gray-600">({course.reviews} reviews)</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-sm text-gray-600">{course.students} students</span>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-600 mb-4">Instructor: <span className="font-medium text-gray-800">{course.instructor}</span></p>
            <p className="text-gray-600 mb-4">Last Updated: <span className="font-medium text-gray-800">{course.lastUpdated}</span></p>
          </div>
          
          <div className="relative h-72 w-full mb-8 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-200">
              {/* Will be replaced with actual course image later */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">{course.title}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Course</h2>
            <p className="text-gray-700 mb-4">{course.longDescription}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What You Will Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
            <div className="border rounded-lg overflow-hidden">
              {course.curriculum.map((section, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <div className="bg-gray-50 p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{section.section}</h3>
                      <span className="text-sm text-gray-600">{section.duration}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    {section.lectures.map((lecture, idx) => (
                      <div key={idx} className="flex items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{lecture}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-6 shadow-sm sticky top-6">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold mb-2">{course.price}</div>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mb-3 font-medium">
              Enroll Now
            </button>
            
            <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-md mb-6 font-medium hover:bg-blue-50">
              Try For Free
            </button>
            
            <div className="text-center text-sm text-gray-600 mb-6">
              30-Day Money-Back Guarantee<br/>
              Full Lifetime Access
            </div>
            
            <div className="text-sm text-gray-700">
              <div className="flex justify-between py-2 border-b">
                <span>Duration</span>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Level</span>
                <span className="font-medium">{course.level}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Students</span>
                <span className="font-medium">{course.students}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 