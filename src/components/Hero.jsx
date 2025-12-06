import React from "react";
import { Search, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    {
      icon: Search,
      title: "Account Age Checker",
      description:
        "Instantly determine the creation date and age of social media profiles",
    },
    {
      icon: TrendingUp,
      title: "Profile Analysis",
      description:
        "Get insights on follower counts, engagement metrics, and activity trends",
    },
    {
      icon: Shield,
      title: "Account Verification",
      description: "Identify authenticity signals and public account details",
    },
    {
      icon: CheckCircle,
      title: "Multi-Platform",
      description: "Support for X (Twitter), Instagram, TikTok, and more",
    },
  ];

  return (
    <div className="bg-[yell]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Social Media Account
            <span className="text-primary-600"> Age Checker</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover the True Age of Any Social Profile. Our advanced tool
            provides precise creation dates for accounts across TikTok, X,
            Twitch, Discord, YouTube, Reddit, Facebook, Instagram, and many
            upcoming platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/tools"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
            >
              <Search className="mr-2" size={20} />
              Start Checking Accounts
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-primary-600 text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
