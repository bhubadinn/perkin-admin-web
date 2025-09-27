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
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Comming Soon...
          </Typography>
          {/* <Typography variant="h4" fontWeight="bold" gutterBottom>
            Notifications
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Stay updated with system alerts and activities
          </Typography> */}

          {/* <Card elevation={2} sx={{borderRadius: 3}}>
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
          </Card> */}
        </motion.div>
      </Container>
    </Layout>
  );
};
