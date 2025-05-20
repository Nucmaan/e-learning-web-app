"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

// Sample request data
const courseRequests = [
  {
    id: 1,
    courseName: "Advanced React Patterns",
    instructor: "John Doe",
    requestDate: "2024-03-15",
    status: "pending",
    message: "Interested in learning advanced React techniques and state management strategies.",
    price: "$79.99",
    duration: "8 weeks",
  },
  {
    id: 2,
    courseName: "Python for Data Science",
    instructor: "Sarah Johnson",
    requestDate: "2024-03-10",
    status: "approved",
    message: "Looking for comprehensive coverage of pandas, numpy, and matplotlib.",
    price: "$89.99",
    duration: "10 weeks",
    startDate: "2024-04-01",
  },
  {
    id: 3,
    courseName: "Mobile App Development with Flutter",
    instructor: "Mike Smith",
    requestDate: "2024-03-08",
    status: "rejected",
    message: "Need to learn cross-platform development for an upcoming project at work.",
    price: "$99.99",
    duration: "12 weeks",
    rejectionReason: "Course currently not available in your region.",
  },
];

export default function RequestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Filter requests based on search
  const filteredRequests = courseRequests.filter((request) =>
    request.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status badge styling
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const StatusIcon = ({ status }) => {
    switch (status) {
      case "approved":
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case "rejected":
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Course Requests</h1>
            <p className="mt-1 text-sm text-gray-600">
              Track your course enrollment requests and their status
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => setShowRequestForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              New Request
            </button>
          </div>
        </div>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Search requests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500">Active Requests</dt>
          <dd className="mt-1 text-2xl font-semibold text-yellow-600">
            {courseRequests.filter((r) => r.status === "pending").length}
          </dd>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500">Approved</dt>
          <dd className="mt-1 text-2xl font-semibold text-green-600">
            {courseRequests.filter((r) => r.status === "approved").length}
          </dd>
        </div>
      </div>

      {/* Requests List */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-100 divide-y divide-gray-100">
        {filteredRequests.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No requests found</div>
        ) : (
          filteredRequests.map((request) => (
            <div key={request.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <StatusIcon status={request.status} />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{request.courseName}</h3>
                    <p className="text-sm text-gray-500">Instructor: {request.instructor}</p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    statusStyles[request.status]
                  }`}
                >
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Request Date</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {new Date(request.requestDate).toLocaleDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Course Price</dt>
                  <dd className="mt-1 text-sm text-gray-900">{request.price}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Duration</dt>
                  <dd className="mt-1 text-sm text-gray-900">{request.duration}</dd>
                </div>
              </div>

              <div className="mt-4">
                <dt className="text-sm font-medium text-gray-500">Message</dt>
                <dd className="mt-1 text-sm text-gray-900">{request.message}</dd>
              </div>

              {request.status === "approved" && (
                <div className="mt-4 flex items-center justify-between bg-green-50 rounded-lg p-4">
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Course starts on {new Date(request.startDate).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-green-600">
                      Check your email for enrollment details
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors">
                    View Course
                  </button>
                </div>
              )}

              {request.status === "rejected" && (
                <div className="mt-4 bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-700">
                    Reason: {request.rejectionReason}
                  </p>
                </div>
              )}

              {request.status === "pending" && (
                <div className="mt-4 flex justify-end">
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    Cancel Request
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* New Request Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">New Course Request</h2>
              <button
                onClick={() => setShowRequestForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
                  Course Name
                </label>
                <input
                  type="text"
                  id="courseName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Why do you want to take this course?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 