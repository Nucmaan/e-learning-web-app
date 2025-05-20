import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      level: 'Beginner to Advanced',
      duration: '42 hours',
      rating: 4.8,
      reviews: 1254,
      image: '/images/web.jpg',
    },
    {
      id: 2,
      title: 'Advanced Data Science with Python',
      level: 'Advanced',
      duration: '28 hours',
      rating: 4.7,
      reviews: 876,
      image: '/images/data.jpg',
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      level: 'Intermediate',
      duration: '18 hours',
      rating: 4.9,
      reviews: 932,
      image: '/images/marketing.jpg',
    },
    {
      id: 4,
      title: 'UI/UX Design Principles & Practice',
      level: 'Intermediate',
      duration: '24 hours',
      rating: 4.6,
      reviews: 743,
      image: '/images/uiutx.jpg',
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">All the skills you need in one place</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From critical skills to technical topics, E-laerning supports your professional development.</p>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our featured <span className="text-blue-600">courses</span></h2>
          <div className="flex items-center">
            <span className="mr-4 hidden md:inline text-sm font-medium">Most Popular</span>
            <Link href="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
              View All Courses
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="relative h-48 w-full">
                <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
                  {course.id === 1 ? 'Featured • 12.4k students' : 
                   course.id === 2 ? 'Popular • 8.7k students' : 
                   course.id === 3 ? 'Hot • 9.3k students' : 
                   'Trending • 7.4k students'}
                </div>
                <div className="w-full h-full bg-blue-200">
                  {/* Will be replaced with actual course image later */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Image src={course.image} alt={course.title} fill style={{ objectFit: 'cover' }} />
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
                
                <div className="flex items-center mt-2">
                  <div className="flex text-blue-600">
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
    </section>
  );
};

export default FeaturedCourses; 