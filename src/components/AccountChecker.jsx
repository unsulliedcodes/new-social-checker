import React, { useState } from "react";
import { Search, Calendar, User, Clock } from "lucide-react";
import { SOCIAL_PLATFORMS } from "../utils/constants";

const AccountChecker = () => {
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("twitter");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);

    // Simulated API call
    setTimeout(() => {
      setResult({
        username,
        platform,
        creationDate: "2020-03-15",
        accountAge: "3 years, 10 months",
        profileExists: true,
        platformData: {
          followers: "15.2K",
          following: "892",
          posts: "1,247",
        },
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* HEADER */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Social Media Account Age Checker
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Check social media account creation date and find account age online
          instantly.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleCheck}
        className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 mb-6 sm:mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 sm:mb-6">
          {/* Platform */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Platform
            </label>

            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {SOCIAL_PLATFORMS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter username (without @)"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 sm:py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium"
        >
          {loading ? "Checking..." : "Check Account Age"}
        </button>
      </form>

      {result && (
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
            Results for @{result.username} on {result.platform}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Creation Date */}
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Calendar className="mx-auto mb-2 text-blue-600" size={24} />
              <p className="text-sm text-gray-600">Creation Date</p>
              <p className="font-semibold text-gray-900">
                {result.creationDate}
              </p>
            </div>

            {/* Account Age */}
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <Clock className="mx-auto mb-2 text-green-600" size={24} />
              <p className="text-sm text-gray-600">Account Age</p>
              <p className="font-semibold text-gray-900">{result.accountAge}</p>
            </div>

            {/* Platform */}
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="mx-auto mb-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {
                    SOCIAL_PLATFORMS.find((p) => p.value === result.platform)
                      ?.icon
                  }
                </span>
              </div>

              <p className="text-sm text-gray-600">Platform</p>
              <p className="font-semibold text-gray-900">
                {
                  SOCIAL_PLATFORMS.find((p) => p.value === result.platform)
                    ?.name
                }
              </p>
            </div>
          </div>

          {/* Stats */}
          {result.platformData && (
            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold text-gray-900 mb-3">Profile Stats</h4>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {result.platformData.followers}
                  </p>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {result.platformData.following}
                  </p>
                  <p className="text-sm text-gray-600">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {result.platformData.posts}
                  </p>
                  <p className="text-sm text-gray-600">Posts</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountChecker;