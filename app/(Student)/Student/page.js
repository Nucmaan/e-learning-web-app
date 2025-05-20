"use client";

import {
  BookOpenIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon,
  ChartBarIcon,
  TrophyIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const currentCourses = [
  {
    courseName: 'UX Research & Case Study Program',
    instructor: 'Marvin McKinney',
    progress: 80,
    level: 'Advance',
    nextAssignment: 'Apr 21, 2024 7:33 am',
    instructorImage: '/images/nasri.jpeg'
  },
  {
    courseName: 'Figma Advanced Prototype',
    instructor: 'Kathryn Murphy',
    progress: 60,
    level: 'Medium',
    nextAssignment: 'Apr 1, 2024 11:12 am',
    instructorImage: '/images/nasri.jpeg'
  },
  {
    courseName: 'UX Law Study with Real Example',
    instructor: 'Darlene Robertson',
    progress: 30,
    level: 'Beginner',
    nextAssignment: 'Apr 26, 2024 12:49 am',
    instructorImage: '/images/nasri.jpeg'
  },
  {
    courseName: 'UX More copy and Find out More',
    instructor: 'Jenny Wilson',
    progress: 40,
    level: 'Advance',
    nextAssignment: 'Mar 30, 2024 5:41 pm',
    instructorImage: '/images/nasri.jpeg'
  },
  {
    courseName: 'UI UI Design Beginner Course',
    instructor: 'Devon Lane',
    progress: 95,
    level: 'Medium',
    nextAssignment: 'Apr 18, 2024 6:43 pm',
    instructorImage: '/images/nasri.jpeg'
  }
];

const statsCards = [
  {
    number: '24',
    label: 'Courses',
    status: 'FINISHED',
    icon: '📚',
    bgColor: 'bg-blue-100'
  },
  {
    number: '56',
    label: 'Lesson',
    status: 'Completed',
    icon: '📖',
    bgColor: 'bg-green-100'
  },
  {
    number: '12',
    label: 'Reviews',
    status: 'Earned',
    icon: '⭐',
    bgColor: 'bg-orange-100'
  },
  {
    number: '15',
    label: 'Workshop',
    status: 'Placement',
    icon: '🛠️',
    bgColor: 'bg-red-100'
  }
];

const recommendedCourses = [
  {
    id: 1,
    title: 'The Ultimate Guide to Usability Testing and UX Law',
    description: 'Get a job in UX and build your user research and design skills.',
    image: '/images/marketing.jpg',
    price: '$18',
    level: 'Advance',
    liveClass: true,
    classCount: '24 Class'
  },
  {
    id: 2,
    title: 'How to do quality UX Audit for e-commerce website',
    description: 'Unlock the potential of your e-commerce website with proper...',
    image: '/images/data.jpg',
    price: '$18',
    level: 'Advance',
    liveClass: true,
    classCount: '24 Class'
  },
  {
    id: 3,
    title: 'UX & Design Thinking Quick Start to Become Pro',
    description: 'Learn the principles of user experience design and design...',
    image: '/images/uiutx.jpg',
    price: '$18',
    level: 'Beginner',
    liveClass: true,
    classCount: '24 Class'
  },
  {
    id: 4,
    title: 'Complete Web Design: from Figma to Webflow',
    description: 'Learn to design websites with Figma, build with Webflow and...',
    image: '/images/web.jpg',
    price: '$18',
    level: 'Advance',
    liveClass: true,
    classCount: '24 Class'
  }
];

const popularTopics = [
  {
    name: 'Figma Application',
    icon: '/images/nasri.jpeg'
  },
  {
    name: 'Webflow Basic',
    icon: '/images/nasri.jpeg'
  },
  {
    name: 'Adobe Photoshop',
    icon: '/images/nasri.jpeg'
  },
  {
    name: 'Sketch Application',
    icon: '/images/nasri.jpeg'
  },
  {
    name: 'Blender Basic course',
    icon: '/images/nasri.jpeg'
  }
];

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
        <p className="text-violet-100">Continue your learning journey where you left off.</p>
      </div>

      {/* Course Progress Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Current Courses</h2>
              <p className="mt-1 text-sm text-gray-500">Track your ongoing course progress</p>
            </div>
            <button className="px-4 py-2 text-violet-600 hover:text-violet-700 font-medium">View All Courses</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="px-6 py-4">Course Name</th>
                <th className="px-6 py-4">Instructor</th>
                <th className="px-6 py-4">Progress</th>
                <th className="px-6 py-4">Level</th>
                <th className="px-6 py-4">Next Assignment</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentCourses.map((course, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-x-3">
                      <img
                        src={course.instructorImage}
                        alt={course.instructor}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-900">{course.courseName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{course.instructor}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-violet-500 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      course.level === 'Advance' ? 'bg-violet-100 text-violet-800' :
                      course.level === 'Medium' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {course.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{course.nextAssignment}</td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} rounded-2xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105`}
          >
            <div className="text-3xl mb-3">{card.icon}</div>
            <div className="text-3xl font-bold text-gray-900">{card.number}</div>
            <div className="text-sm font-medium text-gray-600">{card.label}</div>
            <div className="text-xs text-gray-500 mt-1">{card.status}</div>
          </div>
        ))}
      </div>

      {/* Recommended Courses */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Recommended Courses</h2>
            <p className="mt-1 text-sm text-gray-500">Based on your interests and learning history</p>
          </div>
          <button className="px-4 py-2 text-violet-600 hover:text-violet-700 font-medium">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-transform hover:scale-105">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-medium shadow-sm">
                  {course.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[48px]">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[40px]">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                      {course.level}
                    </span>
                    <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                      {course.classCount}
                    </span>
                  </div>
                  <button className="px-4 py-2 text-violet-600 border border-violet-600 rounded-full text-sm font-medium hover:bg-violet-50 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Course Topics */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Popular Topics</h2>
            <p className="mt-1 text-sm text-gray-500">Trending topics in your field of study</p>
          </div>
          <button className="px-4 py-2 text-violet-600 hover:text-violet-700 font-medium">
            Explore All Topics
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {popularTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 flex items-center gap-x-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={topic.icon} alt={topic.name} className="w-10 h-10 rounded-xl" />
              <span className="font-medium text-gray-900">{topic.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
