'use client';

import { useState } from 'react';
import {
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  GlobeAltIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const settings = [
  {
    name: 'Account',
    description: 'Manage your account settings and preferences',
    icon: UserIcon,
    fields: [
      {
        name: 'Display Name',
        type: 'text',
        value: 'John Smith',
        description: 'Name displayed on your profile and discussions',
      },
      {
        name: 'Time Zone',
        type: 'select',
        value: 'UTC',
        options: ['UTC', 'EST', 'PST', 'GMT'],
        description: 'Your local time zone for schedules and deadlines',
      },
      {
        name: 'Language',
        type: 'select',
        value: 'en',
        options: ['en', 'es', 'fr', 'de'],
        description: 'Preferred language for the learning platform',
      },
    ],
  },
  {
    name: 'Learning Preferences',
    description: 'Customize your learning experience',
    icon: AcademicCapIcon,
    fields: [
      {
        name: 'Course Display',
        type: 'select',
        value: 'grid',
        options: ['grid', 'list'],
        description: 'How courses are displayed on your dashboard',
      },
      {
        name: 'Show Progress',
        type: 'toggle',
        value: true,
        description: 'Display progress bars for course completion',
      },
      {
        name: 'Auto-play Videos',
        type: 'toggle',
        value: false,
        description: 'Automatically play video lessons',
      },
    ],
  },
  {
    name: 'Notifications',
    description: 'Configure your notification preferences',
    icon: BellIcon,
    fields: [
      {
        name: 'Assignment Reminders',
        type: 'toggle',
        value: true,
        description: 'Get notified about upcoming assignments',
      },
      {
        name: 'Course Updates',
        type: 'toggle',
        value: true,
        description: 'Receive notifications about course content updates',
      },
      {
        name: 'Discussion Replies',
        type: 'toggle',
        value: true,
        description: 'Get notified when someone replies to your posts',
      },
      {
        name: 'Grade Notifications',
        type: 'toggle',
        value: true,
        description: 'Receive notifications when grades are posted',
      },
    ],
  },
  {
    name: 'Privacy',
    description: 'Manage your privacy settings',
    icon: ShieldCheckIcon,
    fields: [
      {
        name: 'Profile Visibility',
        type: 'select',
        value: 'enrolled',
        options: ['public', 'enrolled', 'private'],
        description: 'Who can see your profile information',
      },
      {
        name: 'Show Progress to Others',
        type: 'toggle',
        value: false,
        description: 'Allow others to see your course progress',
      },
      {
        name: 'Activity Status',
        type: 'toggle',
        value: true,
        description: 'Show when you are active on the platform',
      },
    ],
  },
  {
    name: 'Study Preferences',
    description: 'Customize your study environment',
    icon: BookOpenIcon,
    fields: [
      {
        name: 'Study Reminders',
        type: 'toggle',
        value: true,
        description: 'Get daily reminders to study',
      },
      {
        name: 'Study Goal',
        type: 'select',
        value: '2hours',
        options: ['1hour', '2hours', '3hours', '4hours'],
        description: 'Daily study time goal',
      },
      {
        name: 'Focus Mode',
        type: 'toggle',
        value: false,
        description: 'Minimize distractions during study sessions',
      },
    ],
  },
  {
    name: 'Accessibility',
    description: 'Customize accessibility settings',
    icon: GlobeAltIcon,
    fields: [
      {
        name: 'Font Size',
        type: 'select',
        value: 'medium',
        options: ['small', 'medium', 'large', 'x-large'],
        description: 'Adjust text size for better readability',
      },
      {
        name: 'High Contrast',
        type: 'toggle',
        value: false,
        description: 'Enable high contrast mode',
      },
      {
        name: 'Screen Reader',
        type: 'toggle',
        value: false,
        description: 'Optimize content for screen readers',
      },
    ],
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Account');
  const [formData, setFormData] = useState(
    settings.reduce((acc, section) => {
      section.fields.forEach((field) => {
        acc[field.name] = field.value;
      });
      return acc;
    }, {})
  );

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const currentSection = settings.find((section) => section.name === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Learning Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Customize your learning experience and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {settings.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveTab(section.name)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === section.name
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <section.icon
                  className={`mr-3 h-5 w-5 ${
                    activeTab === section.name ? 'text-blue-500' : 'text-gray-400'
                  }`}
                />
                {section.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <currentSection.icon className="h-6 w-6 text-blue-500" />
                <h3 className="ml-3 text-lg font-medium leading-6 text-gray-900">
                  {currentSection.name}
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-500">{currentSection.description}</p>

              <div className="mt-6 space-y-6">
                {currentSection.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {field.name}
                    </label>
                    <div className="mt-1">
                      {field.type === 'toggle' ? (
                        <button
                          type="button"
                          onClick={() => handleInputChange(field.name, !formData[field.name])}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            formData[field.name] ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              formData[field.name] ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      ) : field.type === 'select' ? (
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        >
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          value={formData[field.name]}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{field.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 