import React, {useState, useEffect} from "react";
import Layout from "./Layout";
import {
  PageSkeleton,
  TableSkeleton,
  FormSkeleton,
  ChartSkeleton,
  ProfileSkeleton,
  ListSkeleton,
  AnalyticsSkeleton,
} from "./SkeletonLoading";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  IconButton,
  TextField,
  MenuItem,
  Fab,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";

import {motion} from "framer-motion";

// Users Page
export const UsersPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="User Management">
        <Container maxWidth="xl" sx={{py: 3}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                User Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage system users and their permissions
              </Typography>
            </Box>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add User
            </Button>
          </Box>
          <TableSkeleton rows={10} columns={6} />
        </Container>
      </Layout>
    );
  }

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

  return (
    <Layout title="User Management">
      <Container maxWidth="xl" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                User Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage system users and their permissions
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                color: "#000000",
              }}
            >
              Add User
            </Button>
          </Box>

          <Card elevation={2} sx={{borderRadius: 3}}>
            <CardContent sx={{p: 0}}>
              <Box sx={{p: 3, borderBottom: "1px solid #e0e0e0"}}>
                <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                  <TextField
                    placeholder="Search users..."
                    variant="outlined"
                    size="small"
                    sx={{minWidth: 300}}
                    InputProps={{
                      startAdornment: (
                        <SearchIcon sx={{color: "text.secondary", mr: 1}} />
                      ),
                    }}
                  />
                  <Button variant="outlined" startIcon={<FilterIcon />}>
                    Filter
                  </Button>
                </Box>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{bgcolor: "#F6F6F6"}}>
                      <TableCell>User</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Last Login</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockUsers.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        component={TableRow}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.4, delay: index * 0.1}}
                        sx={{"&:hover": {bgcolor: "#F6F6F6"}}}
                      >
                        <TableCell>
                          <Box
                            sx={{display: "flex", alignItems: "center", gap: 2}}
                          >
                            <Avatar sx={{width: 32, height: 32}}>
                              {user.name[0]}
                            </Avatar>
                            <Typography fontWeight={500}>
                              {user.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Chip
                            label={user.role}
                            size="small"
                            sx={{
                              bgcolor:
                                user.role === "Admin" ? "#A2D5C6" : "#CFFFE2",
                              color: "#000000",
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={user.status}
                            size="small"
                            color={
                              user.status === "Active"
                                ? "success"
                                : user.status === "Inactive"
                                ? "error"
                                : "warning"
                            }
                          />
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell align="center">
                          <IconButton size="small" sx={{color: "#A2D5C6"}}>
                            <EditIcon />
                          </IconButton>
                          <IconButton size="small" sx={{color: "#f44336"}}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Layout>
  );
};

// Analytics Page
export const AnalyticsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Analytics">
        <AnalyticsSkeleton />
      </Layout>
    );
  }

  return (
    <Layout title="Analytics">
      <Container maxWidth="xl" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Box sx={{mb: 4}}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Analytics Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Track your system performance and user engagement
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{mb: 4}}>
            {[
              {
                title: "Total Users",
                value: "2,847",
                change: "+12%",
                color: "#A2D5C6",
              },
              {
                title: "Active Sessions",
                value: "1,234",
                change: "+8%",
                color: "#CFFFE2",
              },
              {
                title: "Page Views",
                value: "45,231",
                change: "+15%",
                color: "#A2D5C6",
              },
              {
                title: "Conversion Rate",
                value: "3.24%",
                change: "+2%",
                color: "#CFFFE2",
              },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.4, delay: index * 0.1}}
                >
                  <Card elevation={2} sx={{borderRadius: 3}}>
                    <CardContent>
                      <Typography variant="h4" fontWeight="bold" gutterBottom>
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {stat.title}
                      </Typography>
                      <Chip
                        label={stat.change}
                        size="small"
                        sx={{
                          bgcolor: stat.color,
                          color: "#000000",
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Charts Placeholder */}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 3}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    User Activity Over Time
                  </Typography>
                  <Box
                    sx={{
                      height: 300,
                      bgcolor: "#F6F6F6",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      Chart Component Will Go Here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 3}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Traffic Sources
                  </Typography>
                  <Box
                    sx={{
                      height: 300,
                      bgcolor: "#F6F6F6",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      Pie Chart Will Go Here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Layout>
  );
};

// // Projects Page
// export const ProjectsPage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1800);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <Layout title="Projects">
//         <PageSkeleton title={true} cards={6} stats={false} />
//       </Layout>
//     );
//   }

//   const mockProjects = [
//     {
//       id: 1,
//       name: "Website Redesign",
//       status: "In Progress",
//       progress: 75,
//       team: 4,
//       deadline: "2024-02-15",
//     },
//     {
//       id: 2,
//       name: "Mobile App",
//       status: "Planning",
//       progress: 25,
//       team: 6,
//       deadline: "2024-03-01",
//     },
//     {
//       id: 3,
//       name: "Database Migration",
//       status: "Completed",
//       progress: 100,
//       team: 3,
//       deadline: "2024-01-30",
//     },
//     {
//       id: 4,
//       name: "Security Audit",
//       status: "In Progress",
//       progress: 60,
//       team: 2,
//       deadline: "2024-02-20",
//     },
//     {
//       id: 5,
//       name: "API Development",
//       status: "Planning",
//       progress: 10,
//       team: 5,
//       deadline: "2024-04-01",
//     },
//     {
//       id: 6,
//       name: "User Training",
//       status: "On Hold",
//       progress: 0,
//       team: 2,
//       deadline: "2024-03-15",
//     },
//   ];

//   return (
//     <Layout title="Projects">
//       <Container maxWidth="xl" sx={{py: 3}}>
//         <motion.div
//           initial={{opacity: 0, y: 20}}
//           animate={{opacity: 1, y: 0}}
//           transition={{duration: 0.6}}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               mb: 4,
//             }}
//           >
//             <Box>
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 Projects
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Manage and track your project progress
//               </Typography>
//             </Box>
//             <Button
//               variant="contained"
//               startIcon={<AddIcon />}
//               sx={{
//                 background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
//                 color: "#000000",
//               }}
//             >
//               New Project
//             </Button>
//           </Box>

//           <Grid container spacing={3}>
//             {mockProjects.map((project, index) => (
//               <Grid item xs={12} md={6} lg={4} key={project.id}>
//                 <motion.div
//                   initial={{opacity: 0, y: 20}}
//                   animate={{opacity: 1, y: 0}}
//                   transition={{duration: 0.4, delay: index * 0.1}}
//                 >
//                   <Card
//                     elevation={2}
//                     sx={{
//                       borderRadius: 3,
//                       "&:hover": {
//                         transform: "translateY(-4px)",
//                         boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
//                       },
//                       transition: "all 0.3s ease",
//                     }}
//                   >
//                     <CardContent sx={{p: 3}}>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "flex-start",
//                           mb: 2,
//                         }}
//                       >
//                         <Typography variant="h6" fontWeight="bold">
//                           {project.name}
//                         </Typography>
//                         <Chip
//                           label={project.status}
//                           size="small"
//                           color={
//                             project.status === "Completed"
//                               ? "success"
//                               : project.status === "In Progress"
//                               ? "primary"
//                               : project.status === "On Hold"
//                               ? "error"
//                               : "warning"
//                           }
//                         />
//                       </Box>

//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{mb: 3}}
//                       >
//                         Progress: {project.progress}%
//                       </Typography>

//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           mb: 2,
//                         }}
//                       >
//                         <Typography variant="body2">
//                           Team: {project.team} members
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Due: {project.deadline}
//                         </Typography>
//                       </Box>

//                       <Box sx={{display: "flex", gap: 1}}>
//                         <Button size="small" variant="outlined">
//                           View
//                         </Button>
//                         <Button size="small" variant="text">
//                           Edit
//                         </Button>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>

//         <Fab
//           color="primary"
//           sx={{
//             position: "fixed",
//             bottom: 24,
//             right: 24,
//             background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
//             color: "#000000",
//           }}
//         >
//           <AddIcon />
//         </Fab>
//       </Container>
//     </Layout>
//   );
// };

// Audit Page
export const AuditPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Audit">
        <PageSkeleton title={true} cards={6} stats={false} />
      </Layout>
    );
  }

  const mockProjects = [
    {
      id: 1,
      name: "Website Redesign",
      status: "In Progress",
      progress: 75,
      team: 4,
      deadline: "2024-02-15",
    },
    {
      id: 2,
      name: "Mobile App",
      status: "Planning",
      progress: 25,
      team: 6,
      deadline: "2024-03-01",
    },
    {
      id: 3,
      name: "Database Migration",
      status: "Completed",
      progress: 100,
      team: 3,
      deadline: "2024-01-30",
    },
    {
      id: 4,
      name: "Security Audit",
      status: "In Progress",
      progress: 60,
      team: 2,
      deadline: "2024-02-20",
    },
    {
      id: 5,
      name: "API Development",
      status: "Planning",
      progress: 10,
      team: 5,
      deadline: "2024-04-01",
    },
    {
      id: 6,
      name: "User Training",
      status: "On Hold",
      progress: 0,
      team: 2,
      deadline: "2024-03-15",
    },
  ];

  return (
    <Layout title="Audit">
      <Container maxWidth="xl" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Q & A Audit
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage and track your project progress
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                color: "#000000",
              }}
            >
              New Project
            </Button>
          </Box>

          <Grid container spacing={3}>
            {mockProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.4, delay: index * 0.1}}
                >
                  <Card
                    elevation={2}
                    sx={{
                      borderRadius: 3,
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardContent sx={{p: 3}}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold">
                          {project.name}
                        </Typography>
                        <Chip
                          label={project.status}
                          size="small"
                          color={
                            project.status === "Completed"
                              ? "success"
                              : project.status === "In Progress"
                              ? "primary"
                              : project.status === "On Hold"
                              ? "error"
                              : "warning"
                          }
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{mb: 3}}
                      >
                        Progress: {project.progress}%
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <Typography variant="body2">
                          Team: {project.team} members
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Due: {project.deadline}
                        </Typography>
                      </Box>

                      <Box sx={{display: "flex", gap: 1}}>
                        <Button size="small" variant="outlined">
                          View
                        </Button>
                        <Button size="small" variant="text">
                          Edit
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
            color: "#000000",
          }}
        >
          <AddIcon />
        </Fab>
      </Container>
    </Layout>
  );
};

// Settings Page
export const SettingsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Settings">
        <Container maxWidth="md" sx={{py: 3}}>
          <FormSkeleton fields={8} />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Settings">
      <Container maxWidth="md" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Settings
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Configure your system preferences
          </Typography>

          <Card elevation={2} sx={{borderRadius: 3}}>
            <CardContent sx={{p: 4}}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                General Settings
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Site Name"
                    defaultValue="Perkin Admin"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Admin Email"
                    defaultValue="admin@perkin.com"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Site Description"
                    defaultValue="Administrative system for team management"
                    variant="outlined"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Timezone"
                    defaultValue="UTC"
                    variant="outlined"
                  >
                    <MenuItem value="UTC">UTC</MenuItem>
                    <MenuItem value="EST">Eastern Time</MenuItem>
                    <MenuItem value="PST">Pacific Time</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Language"
                    defaultValue="en"
                    variant="outlined"
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              <Box sx={{display: "flex", gap: 2, mt: 4}}>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                    color: "#000000",
                  }}
                >
                  Save Changes
                </Button>
                <Button variant="outlined">Reset</Button>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Layout>
  );
};

// Profile Page
export const ProfilePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Profile">
        <ProfileSkeleton />
      </Layout>
    );
  }

  return (
    <Layout title="My Profile">
      <Container maxWidth="md" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            My Profile
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Manage your personal information and preferences
          </Typography>

          <Card elevation={2} sx={{borderRadius: 3}}>
            <CardContent sx={{p: 4}}>
              <Box sx={{display: "flex", alignItems: "center", gap: 3, mb: 4}}>
                <Avatar sx={{width: 100, height: 100}}>JD</Avatar>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    John Doe
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    admin@perkin.com
                  </Typography>
                  <Chip
                    label="Administrator"
                    sx={{
                      mt: 1,
                      bgcolor: "#A2D5C6",
                      color: "#000000",
                    }}
                  />
                </Box>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    defaultValue="John"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    defaultValue="Doe"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    defaultValue="admin@perkin.com"
                    variant="outlined"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    defaultValue="+1 (555) 123-4567"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    defaultValue="IT Administration"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    defaultValue="System administrator with 5+ years of experience in managing enterprise applications."
                    variant="outlined"
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>

              <Box sx={{display: "flex", gap: 2, mt: 4}}>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                    color: "#000000",
                  }}
                >
                  Update Profile
                </Button>
                <Button variant="outlined">Change Password</Button>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Layout>
  );
};

// Security Page
// export const SecurityPage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1600);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <Layout title="Security">
//         <Container maxWidth="lg" sx={{py: 3}}>
//           <PageSkeleton title={true} cards={4} stats={true} />
//         </Container>
//       </Layout>
//     );
//   }

//   return (
//     <Layout title="Security">
//       <Container maxWidth="lg" sx={{py: 3}}>
//         <motion.div
//           initial={{opacity: 0, y: 20}}
//           animate={{opacity: 1, y: 0}}
//           transition={{duration: 0.6}}
//         >
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             Security Center
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
//             Monitor and manage your system security settings
//           </Typography>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Card elevation={2} sx={{borderRadius: 3}}>
//                 <CardContent sx={{p: 4}}>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     Password Security
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{mb: 3}}
//                   >
//                     Last updated: 30 days ago
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     fullWidth
//                     sx={{
//                       borderColor: "#A2D5C6",
//                       color: "#A2D5C6",
//                       "&:hover": {
//                         borderColor: "#A2D5C6",
//                         backgroundColor: "rgba(162, 213, 198, 0.1)",
//                       },
//                     }}
//                   >
//                     Change Password
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Card elevation={2} sx={{borderRadius: 3}}>
//                 <CardContent sx={{p: 4}}>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     Two-Factor Authentication
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{mb: 3}}
//                   >
//                     Status: Enabled
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       background:
//                         "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
//                       color: "#000000",
//                     }}
//                   >
//                     Manage 2FA
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12}>
//               <Card elevation={2} sx={{borderRadius: 3}}>
//                 <CardContent sx={{p: 4}}>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     Recent Security Activity
//                   </Typography>
//                   <Box sx={{mt: 2}}>
//                     <Typography variant="body2" color="text.secondary">
//                       No suspicious activity detected in the last 30 days.
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </motion.div>
//       </Container>
//     </Layout>
//   );
// };
export const LawPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Law">
        <Container maxWidth="lg" sx={{py: 3}}>
          <PageSkeleton title={true} cards={4} stats={true} />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Law">
      <Container maxWidth="lg" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Law Listing Center
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Monitor and manage your law listing
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 4}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Password Security
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{mb: 3}}
                  >
                    Last updated: 30 days ago
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: "#A2D5C6",
                      color: "#A2D5C6",
                      "&:hover": {
                        borderColor: "#A2D5C6",
                        backgroundColor: "rgba(162, 213, 198, 0.1)",
                      },
                    }}
                  >
                    Change Password
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 4}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Two-Factor Authentication
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{mb: 3}}
                  >
                    Status: Enabled
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background:
                        "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                      color: "#000000",
                    }}
                  >
                    Manage 2FA
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 4}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Recent Security Activity
                  </Typography>
                  <Box sx={{mt: 2}}>
                    <Typography variant="body2" color="text.secondary">
                      No suspicious activity detected in the last 30 days.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Layout>
  );
};

// Notifications Page
export const NotificationsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Notifications">
        <Container maxWidth="md" sx={{py: 3}}>
          <ListSkeleton items={8} showAvatar={true} showActions={true} />
        </Container>
      </Layout>
    );
  }

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

  return (
    <Layout title="Notifications">
      <Container maxWidth="md" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Notifications
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Stay updated with system alerts and activities
          </Typography>

          <Card elevation={2} sx={{borderRadius: 3}}>
            <CardContent sx={{p: 0}}>
              {mockNotifications.map((notification, index) => (
                <Box key={notification.id}>
                  <Box sx={{p: 3}}>
                    <Box
                      sx={{display: "flex", alignItems: "flex-start", gap: 2}}
                    >
                      <Avatar
                        sx={{
                          bgcolor:
                            notification.type === "success"
                              ? "#A2D5C6"
                              : notification.type === "warning"
                              ? "#FFA726"
                              : "#CFFFE2",
                          width: 40,
                          height: 40,
                        }}
                      >
                        {notification.title[0]}
                      </Avatar>
                      <Box sx={{flex: 1}}>
                        <Typography variant="h6" fontWeight="bold">
                          {notification.title}
                        </Typography>
                        <Typography variant="body1" sx={{mt: 0.5}}>
                          {notification.message}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{mt: 1}}
                        >
                          {notification.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  {index < mockNotifications.length - 1 && (
                    <Box sx={{height: 1, bgcolor: "#e0e0e0"}} />
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Layout>
  );
};
