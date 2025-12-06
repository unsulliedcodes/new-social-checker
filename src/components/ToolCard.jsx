import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  BarChart3,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const ToolCard = ({ tool }) => {
  const getIcon = (iconName) => {
    const icons = {
      calendar: Calendar,
      barChart3: BarChart3,
      shield: Shield,
      users: Users,
      zap: Zap,
    };
    const IconComponent = icons[iconName] || Calendar;
    return <IconComponent className="text-primary-600" size={24} />;
  };

  const getGradient = (color) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    };
    return gradients[color] || "from-primary-500 to-primary-600";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden group">
      {/* Header with Gradient */}
      <div
        className={`bg-linear-to-r ${getGradient(
          tool.color
        )} p-4 sm:p-6 text-white`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              {getIcon(tool.icon)}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">{tool.title}</h3>
              <p className="text-white/80 text-sm">{tool.subtitle}</p>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
          {tool.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {tool.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Supported Platforms */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">
            Supported Platforms:
          </p>
          <div className="flex flex-wrap gap-2">
            {tool.platforms.map((platform, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={tool.path}
          className="w-full flex items-center justify-center px-4 py-2 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium group/btn"
        >
          <span>Use {tool.title}</span>
          <ArrowRight
            className="ml-2 group-hover/btn:translate-x-1 transition-transform"
            size={16}
          />
        </Link>
      </div>

      {/* Quick Stats */}
      {tool.stats && (
        <div className="border-t border-gray-200 bg-gray-50 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between text-sm text-gray-600">
            {tool.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-semibold text-gray-900">{stat.value}</div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCard;
