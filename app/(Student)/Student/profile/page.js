'use client';

import { useState } from 'react';
import { UserCircleIcon, AcademicCapIcon, BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    studentId: 'STU2024001',
    program: 'Computer Science',
    yearLevel: '3rd Year',
    bio: 'Passionate about web development and artificial intelligence. Currently focusing on full-stack development.',
    notifications: {
      courseUpdates: true,
      assignments: true,
      grades: true,
      announcements: true,
      reminders: true,
    },
  });

  const stats = [
    { name: 'Courses Completed', value: '8', icon: AcademicCapIcon },
    { name: 'Current Courses', value: '3', icon: BookOpenIcon },
    { name: 'Study Hours', value: '120', icon: ClockIcon },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Student Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your student profile and learning preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                    Student ID
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="studentId"
                      id="studentId"
                      value={formData.studentId}
                      readOnly
                      className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                    Program
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="program"
                      id="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="bio"
                      name="bio"
                      rows={3}
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Tell us about yourself and your learning goals..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Stats */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Learning Statistics
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="bg-gray-50 px-4 py-5 sm:p-6 rounded-lg text-center"
                  >
                    <dt className="text-sm font-medium text-gray-500 truncate flex items-center justify-center">
                      <stat.icon className="h-5 w-5 mr-2 text-blue-500" />
                      {stat.name}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Learning Notifications
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="course-updates"
                      type="checkbox"
                      checked={formData.notifications.courseUpdates}
                      onChange={() => handleNotificationChange('courseUpdates')}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="course-updates" className="font-medium text-gray-700">
                      Course Updates
                    </label>
                    <p className="text-gray-500">
                      Receive notifications about new course content and materials
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="assignments"
                      type="checkbox"
                      checked={formData.notifications.assignments}
                      onChange={() => handleNotificationChange('assignments')}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="assignments" className="font-medium text-gray-700">
                      Assignments & Deadlines
                    </label>
                    <p className="text-gray-500">
                      Get reminders about upcoming assignments and submission deadlines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="grades"
                      type="checkbox"
                      checked={formData.notifications.grades}
                      onChange={() => handleNotificationChange('grades')}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="grades" className="font-medium text-gray-700">
                      Grades & Feedback
                    </label>
                    <p className="text-gray-500">
                      Be notified when your assignments are graded or when you receive feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="space-y-6">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserCircleIcon className="h-20 w-20 text-gray-400" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {formData.name}
                </h3>
                <p className="text-sm text-gray-500">{formData.program} • {formData.yearLevel}</p>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Student ID</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.studentId}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Enrolled Since</dt>
                    <dd className="mt-1 text-sm text-gray-900">September 2023</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Account Actions
              </h3>
              <div className="mt-6 space-y-4">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Change Password
                </button>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 