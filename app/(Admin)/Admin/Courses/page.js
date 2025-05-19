'use client';

import { useState } from 'react';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

const courses = [
  {
    id: 1,
    title: 'Web Development 101',
    instructor: 'John Smith',
    students: 234,
    price: '$49.99',
    status: 'Published',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'Sarah Johnson',
    students: 156,
    price: '$79.99',
    status: 'Draft',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

export default function CoursesPage() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleEditClick = (course) => {
    setCurrentCourse(course);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (course) => {
    setCurrentCourse(course);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your courses and upload new content
          </p>
        </div>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Course
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group relative overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    course.status === 'Published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {course.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">Instructor: {course.instructor}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{course.students} students</span>
                  <span className="text-sm font-medium text-gray-900">{course.price}</span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="rounded p-1 text-gray-400 hover:text-gray-500"
                    onClick={() => handleEditClick(course)}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button 
                    className="rounded p-1 text-gray-400 hover:text-red-500"
                    onClick={() => handleDeleteClick(course)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="relative">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-30" onClick={() => setIsUploadModalOpen(false)} />
            
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-5xl mx-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 mr-4">
                      <VideoCameraIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Upload New Course
                      </h3>
                      <p className="text-sm text-gray-500">
                        Fill in the details below to create a new course.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <form className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                          Course Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                          Price
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
                          Instructor
                        </label>
                        <input
                          type="text"
                          name="instructor"
                          id="instructor"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="col-span-1">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                        <div className="mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md h-64">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                          Status
                        </label>
                        <select
                          id="status"
                          name="status"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value="published">Published</option>
                          <option value="draft">Draft</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setIsUploadModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                  >
                    Create Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && currentCourse && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="relative">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-30" onClick={() => setIsEditModalOpen(false)} />
            
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 mr-4">
                      <PencilIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Edit Course
                      </h3>
                      <p className="text-sm text-gray-500">
                        Update the details for {currentCourse.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <form className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <div className="mb-4">
                        <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700">
                          Course Title
                        </label>
                        <input
                          type="text"
                          name="edit-title"
                          id="edit-title"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={currentCourse.title}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="edit-instructor" className="block text-sm font-medium text-gray-700">
                          Instructor
                        </label>
                        <input
                          type="text"
                          name="edit-instructor"
                          id="edit-instructor"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={currentCourse.instructor}
                        />
                      </div>

                      <div>
                        <label htmlFor="edit-price" className="block text-sm font-medium text-gray-700">
                          Price
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            name="edit-price"
                            id="edit-price"
                            className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            defaultValue={currentCourse.price.replace('$', '')}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-1">
                      <div className="mb-4">
                        <label htmlFor="edit-status" className="block text-sm font-medium text-gray-700">
                          Status
                        </label>
                        <select
                          id="edit-status"
                          name="edit-status"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          defaultValue={currentCourse.status.toLowerCase()}
                        >
                          <option value="published">Published</option>
                          <option value="draft">Draft</option>
                        </select>
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Current Thumbnail</label>
                        <div className="mt-1 overflow-hidden rounded-md border border-gray-300 h-32">
                          <img 
                            src={currentCourse.thumbnail} 
                            alt={`Thumbnail for ${currentCourse.title}`}
                            className="h-full w-full object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                  >
                    Update Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && currentCourse && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="relative">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-30" onClick={() => setIsDeleteModalOpen(false)} />
            
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mr-4">
                    <TrashIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Delete Course
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete the course "{currentCourse.title}"? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setIsDeleteModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 