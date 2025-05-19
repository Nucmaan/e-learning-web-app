"use client";

import {
  UsersIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    name: "Total Students",
    value: "2,543",
    icon: UsersIcon,
    change: "+12%",
    changeType: "positive",
    bgColor: "bg-blue-500",
  },
  {
    name: "Active Courses",
    value: "45",
    icon: BookOpenIcon,
    change: "+5%",
    changeType: "positive",
    bgColor: "bg-emerald-500",
  },
  {
    name: "Total Revenue",
    value: "$24,500",
    icon: CurrencyDollarIcon,
    change: "+8%",
    changeType: "positive",
    bgColor: "bg-purple-500",
  },
  {
    name: "Pending Requests",
    value: "12",
    icon: ClockIcon,
    change: "-2%",
    changeType: "negative",
    bgColor: "bg-amber-500",
  },
];

const recentActivity = [
  {
    id: 1,
    type: "student",
    content: "New student registration",
    subject: "John Doe",
    time: "3h ago",
    icon: UsersIcon,
    iconColor: "bg-green-500",
  },
  {
    id: 2,
    type: "course",
    content: "New course added",
    subject: "Web Development 101",
    time: "5h ago",
    icon: BookOpenIcon,
    iconColor: "bg-blue-500",
  },
  {
    id: 3,
    type: "revenue",
    content: "Course purchased",
    subject: "Advanced JavaScript",
    time: "12h ago",
    icon: CurrencyDollarIcon,
    iconColor: "bg-purple-500",
  },
  {
    id: 4,
    type: "request",
    content: "Course request approved",
    subject: "UI/UX Design Masterclass",
    time: "1d ago",
    icon: ChartBarIcon,
    iconColor: "bg-amber-500",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Welcome back! Here's what's happening with your courses today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100 transition duration-200 hover:shadow-md"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className={`${stat.bgColor} rounded-md p-3 flex-shrink-0`}>
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-4 w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </p>
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        stat.changeType === "positive"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {stat.changeType === "positive" ? (
                        <ArrowUpIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-3" />
                      ) : (
                        <ArrowDownIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-3" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-3xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 lg:col-span-2">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {recentActivity.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivity.length - 1 ? (
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex items-start space-x-3">
                        <div>
                          <div className={`relative px-1 ${activity.iconColor} rounded-full flex h-10 w-10 items-center justify-center ring-8 ring-white`}>
                            <activity.icon className="h-5 w-5 text-white" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between">
                            <p className="text-sm text-gray-500">
                              {activity.content}{" "}
                              <span className="font-medium text-gray-900">
                                {activity.subject}
                              </span>
                            </p>
                            <p className="text-sm text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-4 py-4 sm:px-6 border-t border-gray-100">
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View all activity
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Quick Actions</h3>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-3">
            <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-indigo-50 text-left text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition duration-150 ease-in-out">
              <span className="flex items-center">
                <BookOpenIcon className="mr-3 h-5 w-5 text-indigo-500" />
                Add New Course
              </span>
              <span>&rarr;</span>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-emerald-50 text-left text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition duration-150 ease-in-out">
              <span className="flex items-center">
                <UsersIcon className="mr-3 h-5 w-5 text-emerald-500" />
                Manage Users
              </span>
              <span>&rarr;</span>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-amber-50 text-left text-sm font-medium text-amber-700 hover:bg-amber-100 transition duration-150 ease-in-out">
              <span className="flex items-center">
                <ChartBarIcon className="mr-3 h-5 w-5 text-amber-500" />
                View Course Requests
              </span>
              <span>&rarr;</span>
            </button>
            
            <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-purple-50 text-left text-sm font-medium text-purple-700 hover:bg-purple-100 transition duration-150 ease-in-out">
              <span className="flex items-center">
                <CurrencyDollarIcon className="mr-3 h-5 w-5 text-purple-500" />
                View Revenue Reports
              </span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
