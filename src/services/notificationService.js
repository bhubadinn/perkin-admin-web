// src/services/notificationsService.js
const mockNotifications = [
  {
    id: 1,
    title: "System Update",
    message: "System will be updated tonight at 2 AM",
    time: "2 hours ago",
    type: "info",
  },
  {
    id: 2,
    title: "New User Registration",
    message: "Jane Doe has registered for an account",
    time: "4 hours ago",
    type: "success",
  },
  {
    id: 3,
    title: "Security Alert",
    message: "Failed login attempt detected",
    time: "6 hours ago",
    type: "warning",
  },
  {
    id: 4,
    title: "Backup Complete",
    message: "Daily backup completed successfully",
    time: "1 day ago",
    type: "success",
  },
];

export const getNotifications = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockNotifications), 500)
  );
};
