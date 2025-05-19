'use client';

import { useState } from 'react';
import {
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const settings = [
  {
    name: 'General',
    description: 'Basic platform settings and configuration',
    icon: Cog6ToothIcon,
    fields: [
      {
        name: 'Platform Name',
        type: 'text',
        value: 'E-Learning Platform',
        description: 'The name of your platform as it appears to users',
      },
      {
        name: 'Support Email',
        type: 'email',
        value: 'support@example.com',
        description: 'Email address for user support',
      },
      {
        name: 'Maintenance Mode',
        type: 'toggle',
        value: false,
        description: 'Enable maintenance mode to temporarily disable the platform',
      },
    ],
  },
  {
    name: 'Notifications',
    description: 'Configure notification settings for the platform',
    icon: BellIcon,
    fields: [
      {
        name: 'Email Notifications',
        type: 'toggle',
        value: true,
        description: 'Enable email notifications for platform events',
      },
      {
        name: 'Push Notifications',
        type: 'toggle',
        value: true,
        description: 'Enable push notifications for platform events',
      },
      {
        name: 'Notification Frequency',
        type: 'select',
        value: 'daily',
        options: ['immediate', 'daily', 'weekly'],
        description: 'How often to send notification digests',
      },
    ],
  },
  {
    name: 'Security',
    description: 'Security and privacy settings',
    icon: ShieldCheckIcon,
    fields: [
      {
        name: 'Two-Factor Authentication',
        type: 'toggle',
        value: true,
        description: 'Require two-factor authentication for admin accounts',
      },
      {
        name: 'Session Timeout',
        type: 'number',
        value: 30,
        description: 'Session timeout in minutes',
      },
      {
        name: 'Password Policy',
        type: 'select',
        value: 'strong',
        options: ['basic', 'strong', 'very-strong'],
        description: 'Password strength requirements',
      },
    ],
  },
  {
    name: 'Payments',
    description: 'Payment and pricing settings',
    icon: CurrencyDollarIcon,
    fields: [
      {
        name: 'Currency',
        type: 'select',
        value: 'USD',
        options: ['USD', 'EUR', 'GBP'],
        description: 'Default currency for payments',
      },
      {
        name: 'Enable Refunds',
        type: 'toggle',
        value: true,
        description: 'Allow course refunds within 30 days',
      },
      {
        name: 'Tax Rate',
        type: 'number',
        value: 0,
        description: 'Default tax rate percentage',
      },
    ],
  },
  {
    name: 'Localization',
    description: 'Language and regional settings',
    icon: GlobeAltIcon,
    fields: [
      {
        name: 'Default Language',
        type: 'select',
        value: 'en',
        options: ['en', 'es', 'fr', 'de'],
        description: 'Default language for the platform',
      },
      {
        name: 'Time Zone',
        type: 'select',
        value: 'UTC',
        options: ['UTC', 'EST', 'PST', 'GMT'],
        description: 'Default time zone for the platform',
      },
      {
        name: 'Date Format',
        type: 'select',
        value: 'MM/DD/YYYY',
        options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'],
        description: 'Default date format',
      },
    ],
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General');
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
        <h1 className="text-2xl font-semibold text-gray-900">Platform Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure your platform settings and preferences
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
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <section.icon
                  className={`mr-3 h-5 w-5 ${
                    activeTab === section.name ? 'text-gray-500' : 'text-gray-400'
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
                <currentSection.icon className="h-6 w-6 text-gray-400" />
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
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                            formData[field.name] ? 'bg-indigo-600' : 'bg-gray-200'
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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