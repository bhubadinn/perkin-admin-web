// src/services/projectsService.js
const mockProjects = [
  { id: 1, name: "Website Redesign", status: "In Progress", progress: 75, team: 4, deadline: "2024-02-15" },
  { id: 2, name: "Mobile App", status: "Planning", progress: 25, team: 6, deadline: "2024-03-01" },
  { id: 3, name: "Database Migration", status: "Completed", progress: 100, team: 3, deadline: "2024-01-30" },
  { id: 4, name: "Security Audit", status: "In Progress", progress: 60, team: 2, deadline: "2024-02-20" },
  { id: 5, name: "API Development", status: "Planning", progress: 10, team: 5, deadline: "2024-04-01" },
  { id: 6, name: "User Training", status: "On Hold", progress: 0, team: 2, deadline: "2024-03-15" },
];

export const getProjects = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockProjects), 500));
};