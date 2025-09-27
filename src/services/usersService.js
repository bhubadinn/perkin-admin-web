// src/services/usersService.js

import axios from "axios";

// Real API call to backend
export const updateUser = async (userLineId, updates) => {
  try {
    const response = await axios.patch(
      // `http://localhost:3030/api/v1/user/${userLineId}`,
      `https://sta.up.railway.app/api/v1/user/${userLineId}`,
      updates,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Backend Error:", error.response?.data || error.message);
    if (error.response?.status === 400) {
      throw new Error(error.response?.data?.error || "Invalid request data");
    } else if (error.response?.status === 401) {
      throw new Error("Unauthorized: Invalid or missing authentication");
    } else if (error.response?.status === 404) {
      throw new Error("User not found");
    } else {
      throw new Error(error.response?.data?.error || "Failed to update user");
    }
  }
};

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-14",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "User",
    status: "Inactive",
    lastLogin: "2024-01-10",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Editor",
    status: "Active",
    lastLogin: "2024-01-15",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    role: "User",
    status: "Pending",
    lastLogin: "Never",
  },
];

// Utility function to simulate async delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUsers = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockUsers), 500));
};

export const addUser = async (userData) => {
  await delay(1000);
  const newUser = {
    id: mockUsers.length + 1,
    ...userData,
    status: "Pending",
    lastLogin: "Never",
  };
  mockUsers.push(newUser);
  return {...newUser, password: undefined};
};

// export const updateUser = async (id, userData) => {
//   await delay(1000);
//   const index = mockUsers.findIndex((user) => user.id === id);
//   if (index === -1) throw new Error("User not found");
//   mockUsers[index] = {...mockUsers[index], ...userData};
//   return mockUsers[index];
// };

export const deleteUser = async (id) => {
  await delay(1000);
  const index = mockUsers.findIndex((user) => user.id === id);
  if (index === -1) throw new Error("User not found");
  mockUsers.splice(index, 1);
};
