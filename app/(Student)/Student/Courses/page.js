'use client';

import { useState } from 'react';
import {
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const courses = [
  {
    id: 1,
    title: 'Web Development 101',
    instructor: 'John Smith',
    progress: 65,
    status: 'continuing',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    nextLesson: 'JavaScript Basics',
    totalLessons: 24,
    completedLessons: 16,
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'Sarah Johnson',
    progress: 100,
    status: 'completed',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    completionDate: '2024-02-15',
    grade: 'A',
    certificate: true,
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    instructor: 'Mike Wilson',
    progress: 45,
    status: 'continuing',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    nextLesson: 'Color Theory',
    totalLessons: 18,
    completedLessons: 8,
  },
  {
    id: 4,
    title: 'Python Programming',
    instructor: 'Emily Chen',
    progress: 100,
    status: 'completed',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    completionDate: '2024-01-20',
    grade: 'A+',
    certificate: true,
  },
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('continuing');

  const filteredCourses = courses.filter(course => course.status === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
            <p className="mt-1 text-sm text-gray-600">
              Track your learning progress and achievements
            </p>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 px-4 py-5 sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Total Courses</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{courses.length}</dd>
        </div>
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 px-4 py-5 sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">In Progress</dt>
          <dd className="mt-1 text-3xl font-semibold text-blue-600">
            {courses.filter(c => c.status === 'continuing').length}
          </dd>
        </div>
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 px-4 py-5 sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Completed</dt>
          <dd className="mt-1 text-3xl font-semibold text-green-600">
            {courses.filter(c => c.status === 'completed').length}
          </dd>
        </div>
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 px-4 py-5 sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Certificates Earned</dt>
          <dd className="mt-1 text-3xl font-semibold text-purple-600">
            {courses.filter(c => c.certificate).length}
          </dd>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('continuing')}
            className={`${
              activeTab === 'continuing'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <ClockIcon className="h-5 w-5 mr-2" />
            Continuing
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`${
              activeTab === 'completed'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            Completed
          </button>
        </nav>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
              <p className="mt-1 text-sm text-gray-500">Instructor: {course.instructor}</p>
              
              {course.status === 'continuing' ? (
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-gray-900">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                      <BookOpenIcon className="h-5 w-5 inline mr-1 text-gray-400" />
                      {course.completedLessons}/{course.totalLessons} Lessons
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
                      Continue
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600">
                      <CheckCircleIcon className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(course.completionDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AcademicCapIcon className="h-5 w-5 mr-1 text-purple-600" />
                      <span className="text-sm font-medium text-gray-900">Grade: {course.grade}</span>
                    </div>
                    {course.certificate && (
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-50 transition-colors">
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 