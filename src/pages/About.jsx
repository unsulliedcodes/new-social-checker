import React from "react";
import { Shield, Zap, Users, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We prioritize your privacy and data security. All checks are performed using publicly available information.",
    },
    {
      icon: Zap,
      title: "Fast & Accurate",
      description:
        "Get instant results with high accuracy. Our tools are optimized for speed and reliability.",
    },
    {
      icon: Users,
      title: "User-Focused",
      description:
        "Built with users in mind. Simple, intuitive interface that works for everyone.",
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description:
        "Support for all major social media platforms with continuous updates and new features.",
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Social Check
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Social Check is your comprehensive solution for analyzing social
            media accounts. We help you verify authenticity, check account
            creation dates, and gain valuable insights across multiple
            platforms.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                In today's digital world, verifying the authenticity of social
                media accounts is more important than ever. Social Check was
                created to provide reliable, fast, and free tools for account analysis.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Empower users with accurate insights</li>
                <li>Promote online safety and trust</li>
                <li>Simplify social media research</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Privacy first
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Accurate data
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Completely free to use
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <feature.icon size={28} sm:size={32} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Trusted by Users Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                50K+
              </div>
              <div className="text-gray-600">Accounts Checked</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">6+</div>
              <div className="text-gray-600">Platforms Supported</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                99.8%
              </div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;