const mockStats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12%",
    icon: "People",
    color: "primary",
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+8%",
    icon: "TrendingUp",
    color: "success",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+15%",
    icon: "Assessment",
    color: "info",
  },
  {
    title: "Growth",
    value: "23.5%",
    change: "+3%",
    icon: "Star",
    color: "warning",
  },
];

const mockRecentActivities = [
  {action: "New user registered", time: "2 minutes ago", type: "success"},
  {action: "System backup completed", time: "1 hour ago", type: "info"},
  {action: "Payment processed", time: "2 hours ago", type: "success"},
  {action: "Database maintenance", time: "4 hours ago", type: "warning"},
];

export const getDashboardData = async () => {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve({stats: mockStats, recentActivities: mockRecentActivities}),
      500
    )
  );
};
