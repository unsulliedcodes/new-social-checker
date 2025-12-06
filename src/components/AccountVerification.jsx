import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Verified,
  Shield,
  UserCheck,
} from "lucide-react";

// Moved outside as per comment
const VerificationCheck = ({ label, status, description }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex flex-col">
        <span className="font-semibold text-gray-800">{label}</span>
        <span className="text-sm text-gray-600">{description}</span>
      </div>

      <div
        className={`px-3 py-1 rounded-full text-white capitalize ${
          status === "verified" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status}
      </div>
    </div>
  );
};

const AccountVerification = () => {
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState("twitter");
  const [username, setUsername] = useState("");

  const verifyAccount = async () => {
    if (!username) return;
    setLoading(true);

    // Simulated API response
    setTimeout(() => {
      setVerificationData({
        username,
        platform,
        isVerified: true,
        isBusinessAccount: false,
        hasProfilePhoto: true,
        hasBio: true,
        hasWebsite: true,
        emailVerified: null,
        phoneVerified: null,
        accountAge: "3 years",
        authenticityScore: 92,
        riskFactors: [],
        trustSignals: [
          "Verified badge",
          "Consistent activity",
          "Complete profile",
          "Old account age",
        ],
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Account Verification Check
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Identify authenticity signals and verify social media account details
        </p>
      </div>

      {/* Verification Form */}
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
              {/* Add more options */}
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
              onClick={verifyAccount}
              disabled={loading}
              className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              {loading ? "Verifying..." : "Verify Account"}
            </button>
          </div>
        </div>
      </div>

      {verificationData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Authenticity Score */}
          <div className="bg-white rounded-lg border p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              Authenticity Score
            </h4>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
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
                    339.292 * (1 - verificationData.authenticityScore / 100)
                  }
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">
                  {verificationData.authenticityScore}%
                </span>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          {verificationData.trustSignals.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-green-900 mb-3 flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Trust Signals Identified
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {verificationData.trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center text-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Risk Assessment */}
          <div className="bg-white rounded-lg border p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              Risk Assessment
            </h4>

            {verificationData.riskFactors.length === 0 ? (
              <div className="text-center py-6 sm:py-8">
                <CheckCircle
                  className="mx-auto text-green-500 mb-3"
                  size={48}
                />
                <p className="text-green-600 font-semibold">
                  No significant risk factors detected
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  This account appears to be authentic and trustworthy
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {verificationData.riskFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <AlertTriangle className="text-red-500 mr-3" size={20} />
                    <span className="text-red-800">{factor}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountVerification;
