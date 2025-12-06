import React, { useState } from "react";
import {
  BarChart3,
  Users,
  Heart,
  MessageCircle,
  TrendingUp,
  Calendar,
} from "lucide-react";

const ProfileAnalysis = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState("twitter");
  const [username, setUsername] = useState("");

  const analyzeProfile = async () => {
    if (!username) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysisData({
        username,
        platform,
        engagementRate: 4.2,
        avgLikes: 1250,
        avgComments: 89,
        postsPerWeek: 12,
        followerGrowth: 15.5,
        mostActiveHours: ["14:00-16:00", "19:00-21:00"],
        topHashtags: ["#socialmedia", "#digital", "#tech"],
        accountHealth: 87,
      });
      setLoading(false);
    }, 3000);
  };

  const metrics = [
    {
      icon: BarChart3,
      label: "Engagement Rate",
      value: analysisData ? `${analysisData.engagementRate}%` : "--",
      description: "Average interactions per post",
    },
    {
      icon: Heart,
      label: "Avg Likes",
      value: analysisData ? analysisData.avgLikes.toLocaleString() : "--",
      description: "Per post",
    },
    {
      icon: MessageCircle,
      label: "Avg Comments",
      value: analysisData ? analysisData.avgComments.toLocaleString() : "--",
      description: "Per post",
    },
    {
      icon: TrendingUp,
      label: "Follower Growth",
      value: analysisData ? `${analysisData.followerGrowth}%` : "--",
      description: "Monthly growth",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Profile Analysis & Insights
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Get detailed analytics on engagement metrics, activity trends, and
          account performance
        </p>
      </div>

      {/* Analysis Form */}
      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Platform
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="twitter">X (Twitter)</option>
              <option value="instagram">Instagram</option>
              {/* Add more */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter username"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={analyzeProfile}
              disabled={loading}
              className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              {loading ? "Analyzing..." : "Analyze Profile"}
            </button>
          </div>
        </div>
      </div>

      {analysisData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Metrics */}
          <div className="bg-white rounded-lg border p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              Key Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <metric.icon className="mx-auto mb-2" size={24} />
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Account Health */}
          <div className="bg-white rounded-lg border p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              Account Health
            </h3>
            <div className="relative inline-block mx-auto">
              <svg className="w-28 h-28 sm:w-32 sm:h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  stroke="#10b981"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="339.292"
                  strokeDashoffset={
                    339.292 * (1 - analysisData.accountHealth / 100)
                  }
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {analysisData.accountHealth}%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Health Score
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              Based on engagement, activity, and growth metrics
            </div>
          </div>

          {/* Top Hashtags */}
          <div className="bg-white rounded-lg border p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              Top Hashtags
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysisData.topHashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium"
                >
                  {hashtag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAnalysis;
