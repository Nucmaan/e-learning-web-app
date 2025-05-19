"use client";
import { useState } from "react";
import AdminSidebar from "@/Components/AdminSidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AdminMainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar - fixed position on desktop, slide over on mobile */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-white border-r border-gray-200 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AdminSidebar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 transition-opacity md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200 sm:px-6 md:px-8">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              {sidebarOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
            <div className="flex items-center ml-3 md:ml-0">
              <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">Admin Dashboard</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:items-center md:gap-4">
              <button className="p-1 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
            
            <div className="flex-shrink-0">
              <button className="flex items-center focus:outline-none">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
                  A
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
