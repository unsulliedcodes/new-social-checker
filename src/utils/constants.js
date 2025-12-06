export const SOCIAL_PLATFORMS = [
  { value: "twitter", name: "X (Twitter)", icon: "X" },
  { value: "instagram", name: "Instagram", icon: "IG" },
  { value: "tiktok", name: "TikTok", icon: "TT" },
  { value: "facebook", name: "Facebook", icon: "FB" },
  { value: "youtube", name: "YouTube", icon: "YT" },
  { value: "linkedin", name: "LinkedIn", icon: "IN" },
];

export const TOOLS = [
  {
    id: 1,
    title: "Account Age Checker",
    subtitle: "Find creation dates",
    description:
      "Instantly determine the creation date and age of social media profiles across multiple platforms.",
    icon: "calendar",
    color: "blue",
    path: "/tools/age-checker",
    features: [
      "Exact creation date detection",
      "Account age calculation",
      "Multi-platform support",
      "Instant results",
    ],
    platforms: ["X (Twitter)", "Instagram", "TikTok", "Facebook", "YouTube"],
    stats: [
      { value: "50K+", label: "Checks" },
      { value: "99.8%", label: "Accuracy" },
      { value: "6", label: "Platforms" },
    ],
  },
  {
    id: 2,
    title: "Profile Analysis",
    subtitle: "Deep insights & metrics",
    description:
      "Comprehensive analysis of follower counts, engagement rates, activity trends, and performance metrics.",
    icon: "barChart3",
    color: "green",
    path: "/tools/profile-analysis",
    features: [
      "Engagement rate analysis",
      "Follower growth tracking",
      "Activity pattern insights",
      "Performance benchmarks",
    ],
    platforms: ["Instagram", "X (Twitter)", "TikTok", "YouTube"],
    stats: [
      { value: "25K+", label: "Analyses" },
      { value: "15+", label: "Metrics" },
      { value: "Real-time", label: "Data" },
    ],
  },
  {
    id: 3,
    title: "Account Verification",
    subtitle: "Authenticity check",
    description:
      "Verify account authenticity, identify trust signals, and detect potential fake or bot accounts.",
    icon: "shield",
    color: "purple",
    path: "/tools/verification",
    features: [
      "Authenticity scoring",
      "Trust signal detection",
      "Risk factor analysis",
      "Verification status",
    ],
    platforms: ["All Platforms", "Cross-check", "Multi-factor"],
    stats: [
      { value: "92%", label: "Accuracy" },
      { value: "10+", label: "Signals" },
      { value: "24/7", label: "Monitoring" },
    ],
  },
  {
    id: 4,
    title: "Bulk Analysis",
    subtitle: "Multiple accounts",
    description:
      "Analyze multiple social media accounts simultaneously with our bulk processing tools.",
    icon: "users",
    color: "orange",
    path: "/tools/bulk-analysis",
    features: [
      "Batch account checking",
      "Comparative analysis",
      "Export results",
      "CSV support",
    ],
    platforms: ["All Platforms", "Custom Lists", "API Access"],
    stats: [
      { value: "100+", label: "Accounts" },
      { value: "CSV", label: "Export" },
      { value: "API", label: "Access" },
    ],
  },
];
