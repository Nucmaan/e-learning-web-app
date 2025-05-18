import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AllCoursesPage() {
  // In a real app, this data would be fetched from an API or database
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Strategy',
      level: 'Intermediate',
      duration: '2 hour',
      rating: 4.5,
      reviews: 42,
      image: '/images/nasri.jpeg',
      description: 'Learn effective digital marketing strategies to grow your business online.'
    },
    {
      id: 2,
      title: 'Digital Marketing Strategy',
      level: 'Intermediate',
      duration: '2 hour',
      rating: 4.8,
      reviews: 56,
      image: '/images/nasri.jpeg',
      description: 'Advanced techniques for digital marketing campaigns and SEO optimization.'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      level: 'Intermediate',
      duration: '2 hour',
      rating: 5.0,
      reviews: 29,
      image: '/images/nasri.jpeg',
      description: 'Master social media marketing and content strategy for maximum engagement.'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      level: 'Intermediate',
      duration: '2 hour',
      rating: 4.8,
      reviews: 36,
      image: '/images/nasri.jpeg',
      description: 'Analytics and data-driven approaches to improve marketing ROI.'
    },
    {
      id: 5,
      title: 'Web Development Fundamentals',
      level: 'Beginner',
      duration: '4 hour',
      rating: 4.9,
      reviews: 78,
      image: '/images/nasri.jpeg',
      description: 'Learn the basics of HTML, CSS, and JavaScript for web development.'
    },
    {
      id: 6,
      title: 'Data Science Essentials',
      level: 'Advanced',
      duration: '6 hour',
      rating: 4.7,
      reviews: 52,
      image: '/images/nasri.jpeg',
      description: 'Master data analysis, visualization and machine learning techniques.'
    },
    {
      id: 7,
      title: 'UI/UX Design Principles',
      level: 'Intermediate',
      duration: '3 hour',
      rating: 4.6,
      reviews: 44,
      image: '/images/nasri.jpeg',
      description: 'Create intuitive user experiences and visually appealing interfaces.'
    },
    {
      id: 8,
      title: 'Business Leadership',
      level: 'Advanced',
      duration: '5 hour',
      rating: 4.9,
      reviews: 61,
      image: '/images/nasri.jpeg',
      description: 'Develop essential leadership skills for managing teams and driving growth.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-gray-600 max-w-2xl">Explore our full range of courses designed to help you develop new skills, advance your career, and achieve your learning goals.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id} className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="relative h-48 w-full">
              <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
                {course.level}
              </div>
              <div className="w-full h-full bg-blue-200">
                {/* Will be replaced with actual course image later */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-800">Course Image</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium mb-2">{course.title}</h3>
              <div className="flex text-xs text-gray-500 mb-2">
                <span>{course.level}</span>
                <span className="mx-1">•</span>
                <span>{course.duration}</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
              
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={i < Math.floor(course.rating) ? "currentColor" : "none"}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs ml-1 text-gray-500">({course.reviews})</span>
              </div>
              
              <button className="mt-3 text-xs font-medium border border-gray-800 rounded px-3 py-1 hover:bg-gray-100">
                Enroll now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 