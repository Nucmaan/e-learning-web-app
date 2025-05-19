"use client";

import { useState } from "react";
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  ClockIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// Sample revenue data
const revenueData = {
  totalRevenue: "$24,500",
  revenueIncrease: "+8%",
  monthlySales: "$5,230",
  salesIncrease: "+12%",
  pendingPayouts: "$1,200",
  topCourses: [
    {
      id: 1,
      name: "Web Development 101",
      revenue: "$4,250",
      students: 98,
      percentageOfTotal: 17,
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      revenue: "$3,740",
      students: 76,
      percentageOfTotal: 15,
    },
    {
      id: 3,
      name: "UI/UX Design Principles",
      revenue: "$2,970",
      students: 64,
      percentageOfTotal: 12,
    },
    {
      id: 4,
      name: "Python for Data Science",
      revenue: "$2,580",
      students: 53,
      percentageOfTotal: 11,
    },
    {
      id: 5,
      name: "Mobile App Development",
      revenue: "$2,100",
      students: 45,
      percentageOfTotal: 9,
    },
  ],
  recentTransactions: [
    {
      id: 1,
      course: "Advanced JavaScript",
      student: "John Doe",
      amount: "$79.99",
      date: "2023-09-15T14:30:00",
      status: "completed",
    },
    {
      id: 2,
      course: "Python for Data Science",
      student: "Sarah Johnson",
      amount: "$59.99",
      date: "2023-09-14T09:15:00",
      status: "completed",
    },
    {
      id: 3,
      course: "UI/UX Design Principles",
      student: "Mike Wilson",
      amount: "$49.99",
      date: "2023-09-13T16:45:00",
      status: "completed",
    },
    {
      id: 4,
      course: "Mobile App Development",
      student: "Emily Chen",
      amount: "$69.99",
      date: "2023-09-12T11:20:00",
      status: "completed",
    },
    {
      id: 5,
      course: "Web Development 101",
      student: "David Rodriguez",
      amount: "$49.99",
      date: "2023-09-11T13:10:00",
      status: "completed",
    },
    {
      id: 6,
      course: "Advanced JavaScript",
      student: "Lisa Taylor",
      amount: "$79.99",
      date: "2023-09-10T15:30:00",
      status: "refunded",
    },
    {
      id: 7,
      course: "UI/UX Design Principles",
      student: "Robert Garcia",
      amount: "$49.99",
      date: "2023-09-09T10:05:00",
      status: "completed",
    },
  ],
  monthlyRevenue: [
    { month: "Jan", amount: 4200 },
    { month: "Feb", amount: 4800 },
    { month: "Mar", amount: 5100 },
    { month: "Apr", amount: 4900 },
    { month: "May", amount: 5400 },
    { month: "Jun", amount: 5800 },
    { month: "Jul", amount: 6200 },
    { month: "Aug", amount: 6700 },
    { month: "Sep", amount: 7300 },
  ],
};

// Monthly chart data (mock visualization)
const BarChart = () => {
  const maxValue = Math.max(...revenueData.monthlyRevenue.map(item => item.amount));

  return (
    <div className="mt-4">
      <div className="flex items-end space-x-2 h-64">
        {revenueData.monthlyRevenue.map((item, index) => {
          const height = (item.amount / maxValue) * 100;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-indigo-500 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
              <div className="text-xs font-medium text-gray-500 mt-2">{item.month}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Donut chart for course revenue distribution (mock visualization)
const DonutChart = () => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {revenueData.topCourses.slice(0, 5).map((course, index) => {
          const colors = ["#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3"];
          const startAngle = index === 0 ? 0 : revenueData.topCourses.slice(0, index).reduce((sum, c) => sum + c.percentageOfTotal, 0) * 3.6;
          const endAngle = startAngle + course.percentageOfTotal * 3.6;
          
          // Convert angles to radians and calculate x,y coordinates
          const startRad = (startAngle - 90) * Math.PI / 180;
          const endRad = (endAngle - 90) * Math.PI / 180;
          
          const startX = 50 + 40 * Math.cos(startRad);
          const startY = 50 + 40 * Math.sin(startRad);
          const endX = 50 + 40 * Math.cos(endRad);
          const endY = 50 + 40 * Math.sin(endRad);
          
          const largeArcFlag = course.percentageOfTotal > 50 ? 1 : 0;
          
          const pathData = `M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
          
          return (
            <path 
              key={index} 
              d={pathData} 
              fill={colors[index % colors.length]} 
              stroke="white" 
              strokeWidth="1"
            />
          );
        })}
        <circle cx="50" cy="50" r="25" fill="white" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">$24,500</div>
          <div className="text-xs text-gray-500">Total Revenue</div>
        </div>
      </div>
    </div>
  );
};

export default function RevenuePage() {
  const [timeRange, setTimeRange] = useState("This Month");
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Revenue Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">
              Track your platform's financial performance and revenue streams.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <select
                className="pl-10 block w-full rounded-md border-gray-300 py-2 pr-10 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
                <option>All Time</option>
              </select>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="bg-indigo-500 rounded-md p-3 flex-shrink-0">
                <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{revenueData.totalRevenue}</p>
                  <p className="ml-2 text-sm font-medium text-green-600">{revenueData.revenueIncrease}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="bg-emerald-500 rounded-md p-3 flex-shrink-0">
                <ArrowTrendingUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Monthly Sales</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{revenueData.monthlySales}</p>
                  <p className="ml-2 text-sm font-medium text-green-600">{revenueData.salesIncrease}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="bg-amber-500 rounded-md p-3 flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pending Payouts</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{revenueData.pendingPayouts}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-100">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="bg-purple-500 rounded-md p-3 flex-shrink-0">
                <ArrowPathIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">4.8%</p>
                  <p className="ml-2 text-sm font-medium text-green-600">+0.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Monthly Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 lg:col-span-2">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Monthly Revenue</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <BarChart />
          </div>
        </div>

        {/* Revenue Distribution */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Revenue Distribution</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <DonutChart />
            <div className="mt-6 space-y-2">
              {revenueData.topCourses.slice(0, 5).map((course, index) => (
                <div key={course.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: ["#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3"][index % 5] }}
                    ></div>
                    <span className="text-xs font-medium text-gray-500 truncate max-w-[150px]">{course.name}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-900">{course.revenue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Courses by Revenue */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-100">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Top Courses by Revenue</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % of Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {revenueData.topCourses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.revenue}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.students}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-indigo-600 h-2.5 rounded-full" 
                          style={{ width: `${course.percentageOfTotal}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{course.percentageOfTotal}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-100">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Transactions</h3>
          <div className="flex space-x-1">
            <button className="inline-flex items-center p-1.5 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center p-1.5 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {revenueData.recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transaction.student}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(transaction.date).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        transaction.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-200 sm:px-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of{" "}
            <span className="font-medium">125</span> transactions
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Page 1 of 18</span>
            <div className="flex space-x-1">
              <button className="inline-flex items-center p-1.5 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center p-1.5 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 