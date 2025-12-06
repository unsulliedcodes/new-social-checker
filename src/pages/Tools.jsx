import React from "react";
import { Link } from "react-router-dom";
import ToolCard from "../components/ToolCard";
import { TOOLS } from "../utils/constants";
import { Search, BarChart3, Shield, Users } from "lucide-react";

const Tools = () => {
  const featuredTools = TOOLS.slice(0, 3);

  return (
    <div className="py-8 sm:py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Social Media Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive suite of social media analysis tools.
            Check account ages, analyze profiles, verify authenticity, and much
            more.
          </p>
        </div>

        {/* Featured Tools */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Featured Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        {/* All Tools Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            All Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r ${
                    tool.color === "blue"
                      ? "from-blue-500 to-blue-600"
                      : tool.color === "green"
                      ? "from-green-500 to-green-600"
                      : tool.color === "purple"
                      ? "from-purple-500 to-purple-600"
                      : "from-orange-500 to-orange-600"
                  } rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                >
                  {tool.icon === "calendar" && <Search size={24} />}
                  {tool.icon === "barChart3" && <BarChart3 size={24} />}
                  {tool.icon === "shield" && <Shield size={24} />}
                  {tool.icon === "users" && <Users size={24} />}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{tool.subtitle}</p>
                <Link
                  to={tool.path}
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  Use Tool
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-primary-600 to-primary-700 rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Ready to Start Analyzing?
          </h2>
          <p className="text-primary-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust Social Check for their social
            media analysis needs. Get started with our most popular tool today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tools/age-checker"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Check Account Age
            </Link>
            <Link
              to="/about"
              className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
