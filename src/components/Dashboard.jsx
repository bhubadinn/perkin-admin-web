// /src/components/Dashboard.jsx

import React from "react";
import Layout from "./Layout";
import LogStream from "./LogStream";
import {useAuth} from "../hooks/useAuth";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Tooltip,
} from "@mui/material";
import {
  TrendingUp,
  People,
  Assessment,
  Star,
  CheckCircle,
  Warning,
  Info,
  Analytics,
  Settings,
} from "@mui/icons-material";

import {motion} from "framer-motion";

const Dashboard = () => {
  const {user} = useAuth();

  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      icon: <People />,
      color: "primary",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+8%",
      icon: <TrendingUp />,
      color: "success",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+15%",
      icon: <Assessment />,
      color: "info",
    },
    {
      title: "Growth",
      value: "23.5%",
      change: "+3%",
      icon: <Star />,
      color: "warning",
    },
  ];

  const recentActivities = [
    {action: "New user registered", time: "2 minutes ago", type: "success"},
    {action: "System backup completed", time: "1 hour ago", type: "info"},
    {action: "Payment processed", time: "2 hours ago", type: "success"},
    {action: "Database maintenance", time: "4 hours ago", type: "warning"},
  ];

  return (
    <Layout title="Dashboard">
      <Container maxWidth="xl" sx={{py: 3}}>
        {/* Welcome Section */}
        {/* <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
              color: "#000000",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box sx={{position: "relative", zIndex: 1}}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                color="#000000"
              >
                Welcome back, {user?.name}! 👋
              </Typography>
              <Typography
                variant="h6"
                sx={{opacity: 0.8, mb: 2, color: "#000000"}}
              >
                Here's what's happening with your admin dashboard today.
              </Typography>
              <Chip
                label={`${user?.role} Access`}
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                  color: "#000000",
                }}
                icon={<Star />}
              />
            </Box> */}

        {/* Decorative elements */}
        {/* <Box
              sx={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -30,
                left: -30,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0.1)",
              }}
            />
          </Paper>
        </motion.div> */}

        <LogStream />

        {/* Stats Grid */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          <Grid container spacing={3} sx={{mb: 4}}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.3 + index * 0.1}}
                >
                  <Card
                    elevation={2}
                    sx={{
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 2,
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "#A2D5C6",
                            width: 56,
                            height: 56,
                          }}
                        >
                          {stat.icon}
                        </Avatar>
                        <Chip
                          label={stat.change}
                          size="small"
                          sx={{
                            bgcolor: "#CFFFE2",
                            color: "#000000",
                          }}
                          icon={<TrendingUp />}
                        />
                      </Box>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        color="#000000"
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Content Grid */}
        <Grid container spacing={3}>
          {/* User Information Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: 0.4}}
            >
              <Card elevation={2} sx={{borderRadius: 3, height: "100%"}}>
                <CardContent sx={{padding: 4}}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    color="#000000"
                    sx={{mb: 3}}
                  >
                    User Information
                  </Typography>
                  <List sx={{padding: 0}}>
                    <ListItem sx={{paddingY: 2}}>
                      <ListItemIcon>
                        <Avatar
                          sx={{width: 40, height: 40, bgcolor: "#A2D5C6"}}
                        >
                          {user?.name?.[0]}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary="Name"
                        secondary={user?.name}
                        sx={{ml: 2}}
                      />
                    </ListItem>
                    <ListItem sx={{paddingY: 2}}>
                      <ListItemIcon>
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: "#CFFFE2",
                            color: "#000000",
                          }}
                        >
                          @
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary="Email"
                        secondary={user?.email}
                        sx={{ml: 2}}
                      />
                    </ListItem>
                    <ListItem sx={{paddingY: 2}}>
                      <ListItemIcon>
                        <Avatar
                          sx={{width: 40, height: 40, bgcolor: "#A2D5C6"}}
                        >
                          <Star />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary="Role"
                        secondary={
                          <Chip
                            label={user?.role}
                            size="small"
                            sx={{
                              bgcolor: "#A2D5C6",
                              color: "#000000",
                              textTransform: "capitalize",
                              mt: 0.5,
                            }}
                          />
                        }
                        sx={{ml: 2}}
                      />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{padding: 3, paddingTop: 0}}>
                  <Button
                    variant="outlined"
                    startIcon={<Settings />}
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
                    Edit Profile
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>

          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              <Card elevation={2} sx={{borderRadius: 3, height: "100%"}}>
                <CardContent sx={{padding: 4}}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    color="#000000"
                    sx={{mb: 3}}
                  >
                    Recent Activities
                  </Typography>
                  <List sx={{padding: 0}}>
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + index * 0.1,
                        }}
                      >
                        <ListItem sx={{paddingY: 2}}>
                          <ListItemIcon>
                            <Avatar
                              sx={{
                                width: 40,
                                height: 40,
                                bgcolor:
                                  activity.type === "success"
                                    ? "#A2D5C6"
                                    : activity.type === "warning"
                                    ? "#FFA726"
                                    : "#CFFFE2",
                              }}
                            >
                              {activity.type === "success" && <CheckCircle />}
                              {activity.type === "warning" && <Warning />}
                              {activity.type === "info" && <Info />}
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText
                            primary={activity.action}
                            secondary={activity.time}
                            sx={{ml: 2}}
                          />
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{padding: 3, paddingTop: 0}}>
                  <Button
                    variant="outlined"
                    startIcon={<Analytics />}
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
                    View All Activities
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.8}}
        >
          <Paper
            elevation={2}
            sx={{
              p: 4,
              mt: 4,
              borderRadius: 3,
              background: "rgba(162, 213, 198, 0.05)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{mb: 3}}
            >
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              {[
                {label: "Add New User", action: "/users/add"},
                {label: "View Analytics", action: "/analytics"},
                {label: "Manage Projects", action: "/projects"},
                {label: "System Settings", action: "/settings"},
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 2,
                      borderColor: "#A2D5C6",
                      color: "#A2D5C6",
                      "&:hover": {
                        borderColor: "#A2D5C6",
                        backgroundColor: "rgba(162, 213, 198, 0.1)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
