"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Sample request data
const courseRequests = [
  {
    id: 1,
    courseName: "Advanced React Patterns",
    requestedBy: "John Doe",
    email: "john@example.com",
    date: "2023-09-15",
    status: "pending",
    message: "Interested in learning advanced React techniques and state management strategies.",
  },
  {
    id: 2,
    courseName: "Python for Data Science",
    requestedBy: "Sarah Johnson",
    email: "sarah@example.com",
    date: "2023-09-10",
    status: "approved",
    message: "Looking for comprehensive coverage of pandas, numpy, and matplotlib.",
  },
  {
    id: 3,
    courseName: "Mobile App Development with Flutter",
    requestedBy: "Mike Smith",
    email: "mike@example.com",
    date: "2023-09-08",
    status: "rejected",
    message: "Need to learn cross-platform development for an upcoming project at work.",
  },
  {
    id: 4,
    courseName: "UI/UX Design Principles",
    requestedBy: "Emily Chen",
    email: "emily@example.com",
    date: "2023-09-05",
    status: "pending",
    message: "Would like to improve my design skills and learn modern UI/UX principles.",
  },
  {
    id: 5,
    courseName: "Full-Stack JavaScript Development",
    requestedBy: "David Wilson",
    email: "david@example.com",
    date: "2023-08-30",
    status: "pending",
    message: "Interested in MERN stack development with authentication and deployment.",
  },
];

export default function RequestsPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Filter and search logic
  const filteredRequests = courseRequests.filter((request) => {
    const matchesFilter = filter === "all" || request.status === filter;
    const matchesSearch =
      request.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.requestedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Status badge color mapping
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  // Status icon mapping
  const StatusIcon = ({ status }) => {
    if (status === "approved") return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    if (status === "rejected") return <XCircleIcon className="h-5 w-5 text-red-500" />;
    return <ClockIcon className="h-5 w-5 text-yellow-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Course Requests</h1>
            <p className="mt-1 text-sm text-gray-600">
              Review and manage course requests from students.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <select
                className="pl-10 block w-full rounded-md border-gray-300 py-2 pr-3 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Requests</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="relative rounded-md shadow-sm max-w-xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 px-4 py-5 sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Total Requests</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{courseRequests.length}</dd>
        </div>
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 px-4 py-5 sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Pending Requests</dt>
          <dd className="mt-1 text-3xl font-semibold text-yellow-600">
            {courseRequests.filter((r) => r.status === "pending").length}
          </dd>
        </div>
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 px-4 py-5 sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Approved Rate</dt>
          <dd className="mt-1 text-3xl font-semibold text-green-600">
            {Math.round(
              (courseRequests.filter((r) => r.status === "approved").length /
                courseRequests.length) *
                100
            )}
            %
          </dd>
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Requested By
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                    No requests found
                  </td>
                </tr>
              ) : (
                filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{request.courseName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{request.requestedBy}</div>
                      <div className="text-sm text-gray-500">{request.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(request.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <StatusIcon status={request.status} />
                        <span
                          className={`ml-2 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            statusColors[request.status]
                          }`}
                        >
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => setSelectedRequest(request)}
                        className="text-indigo-600 hover:text-indigo-900 inline-flex items-center"
                      >
                        <EyeIcon className="h-4 w-4 mr-1" />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Request Details
                  </h3>
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setSelectedRequest(null)}
                  >
                    <span className="sr-only">Close</span>
                    <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Request ID: {selectedRequest.id}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Course</p>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.courseName}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Requested By</p>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedRequest.requestedBy} ({selectedRequest.email})
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Message</p>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.message}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <div className="mt-1 flex items-center">
                    <StatusIcon status={selectedRequest.status} />
                    <span
                      className={`ml-2 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        statusColors[selectedRequest.status]
                      }`}
                    >
                      {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="mt-6 sm:flex sm:flex-row-reverse">
                  {selectedRequest.status === "pending" && (
                    <>
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedRequest(null)}
                  >
                    Close
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