import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import {
  PageSkeleton,
  TableSkeleton,
  FormSkeleton,
  ChartSkeleton,
  ProfileSkeleton,
  ListSkeleton,
  AnalyticsSkeleton,
} from "../components/SkeletonLoading";
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
                Audit and correct AI answers to train the best LLM model for
                safety officer in the world 🏆
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
              Test
            </Button>
          </Box>

          {/* <Grid container spacing={3}>
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
          </Grid>  */}

          <Box
            sx={{
              width: "100%",
              height: "80vh", // Adjust height as needed
              border: "1px solid #ccc",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://sta-audit.up.railway.app"
              title="External Web App"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </Box>
        </motion.div>

        {/* <Fab
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
        </Fab> */}
      </Container>
    </Layout>
  );
};
