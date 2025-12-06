import React from "react";
import { Search, User, Clipboard, BarChart3 } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      icon: Search,
      step: 1,
      title: "Select Platform",
      description:
        "Choose the social media platform you want to check (X/Twitter, Instagram, TikTok, etc.)",
    },
    {
      icon: User,
      step: 2,
      title: "Enter Username",
      description:
        "Type the username without the @ symbol. Make sure the username is correct.",
    },
    {
      icon: Clipboard,
      step: 3,
      title: "Check Account",
      description:
        'Click the "Check Account Age" button to analyze the social media profile.',
    },
    {
      icon: BarChart3,
      step: 4,
      title: "View Results",
      description:
        "Get detailed information including creation date, account age, and profile statistics.",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            How to Use Social Check
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to check social media account creation
            date and analyze profiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                <step.icon size={20} sm:size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Step {step.step}: {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-sm border p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Why Check Social Media Account Age?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Verify Authenticity
              </h4>
              <p className="text-gray-600 text-sm">
                Older accounts are generally more trustworthy and legitimate
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Prevent Fraud
              </h4>
              <p className="text-gray-600 text-sm">
                Identify recently created fake accounts and bots
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Research Accounts
              </h4>
              <p className="text-gray-600 text-sm">
                Understand account history for business or personal research
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
