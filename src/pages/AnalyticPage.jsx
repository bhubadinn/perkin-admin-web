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
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Comming Soon...
          </Typography>
          {/* <Box sx={{mb: 4}}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Analytics Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Track your system performance and user engagement
            </Typography>
          </Box> */}

          {/* Stats Cards */}
          {/* <Grid container spacing={3} sx={{mb: 4}}>
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
          </Grid> */}

          {/* Charts Placeholder */}
          {/* <Grid container spacing={3}>
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
          </Grid> */}
        </motion.div>
      </Container>
    </Layout>
  );
};
