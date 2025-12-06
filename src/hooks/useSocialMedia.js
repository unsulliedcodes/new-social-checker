import { useState } from "react";

export const useSocialMedia = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkAccount = async (platform, username) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call - replace with actual API integration
      const response = await simulateAPICall(platform, username);
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const simulateAPICall = (platform, username) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          username,
          platform,
          creationDate: new Date(
            Date.now() - Math.random() * 3 * 365 * 24 * 60 * 60 * 1000
          )
            .toISOString()
            .split("T")[0],
          followers: Math.floor(Math.random() * 1000000).toLocaleString(),
          following: Math.floor(Math.random() * 10000).toLocaleString(),
          posts: Math.floor(Math.random() * 10000).toLocaleString(),
          isVerified: Math.random() > 0.7,
          engagementRate: (Math.random() * 10).toFixed(1),
        });
      }, 1500);
    });
  };

  return {
    data,
    loading,
    error,
    checkAccount,
  };
};
