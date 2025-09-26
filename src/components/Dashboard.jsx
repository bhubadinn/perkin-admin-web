import React from "react";
import {useAuth} from "../hooks/useAuth";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Tooltip,
  Fade,
  Slide,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Logout,
  Person,
  Email,
  Security,
  Notifications,
  Settings,
  Analytics,
  TrendingUp,
  People,
  Assessment,
  Star,
  CheckCircle,
  Warning,
  Info,
} from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

const Dashboard = () => {
  const {user, logout} = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
    <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      {/* Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
          >
            <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
              <Avatar
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <DashboardIcon sx={{color: "#000000"}} />
              </Avatar>
              <Typography variant="h6" fontWeight="bold" color="#000000">
                Perkin Admin
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{flexGrow: 1}} />

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
              <Tooltip title="Notifications">
                <IconButton sx={{color: "#000000"}}>
                  <Badge badgeContent={4} color="error">
                    <Notifications />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Settings">
                <IconButton sx={{color: "#000000"}}>
                  <Settings />
                </IconButton>
              </Tooltip>

              <Button
                onClick={handleMenuOpen}
                startIcon={
                  <Avatar src={user?.avatar} sx={{width: 32, height: 32}} />
                }
                sx={{
                  color: "#000000",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                {user?.name}
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    borderRadius: 2,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </MenuItem>
              </Menu>
            </Box>
          </motion.div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{flexGrow: 1, bgcolor: "#F6F6F6", p: 3}}>
        <Container maxWidth="xl">
          {/* Welcome Section */}
          <motion.div
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
                  icon={<Security />}
                />
              </Box>

              {/* Decorative elements */}
              <Box
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
          </motion.div>

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
                              bgcolor:
                                stat.color === "primary"
                                  ? "#A2D5C6"
                                  : stat.color === "success"
                                  ? "#A2D5C6"
                                  : stat.color === "info"
                                  ? "#A2D5C6"
                                  : "#FFA726",
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
                              bgcolor:
                                stat.color === "primary"
                                  ? "#CFFFE2"
                                  : stat.color === "success"
                                  ? "#CFFFE2"
                                  : stat.color === "info"
                                  ? "#CFFFE2"
                                  : "#FFB74D",
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
                          <Person sx={{color: "#A2D5C6"}} />
                        </ListItemIcon>
                        <ListItemText primary="Name" secondary={user?.name} />
                      </ListItem>
                      <ListItem sx={{paddingY: 2}}>
                        <ListItemIcon>
                          <Email sx={{color: "#A2D5C6"}} />
                        </ListItemIcon>
                        <ListItemText primary="Email" secondary={user?.email} />
                      </ListItem>
                      <ListItem sx={{paddingY: 2}}>
                        <ListItemIcon>
                          <Security sx={{color: "#A2D5C6"}} />
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
                              }}
                            />
                          }
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
                              {activity.type === "success" && (
                                <CheckCircle sx={{color: "#A2D5C6"}} />
                              )}
                              {activity.type === "warning" && (
                                <Warning sx={{color: "#FFA726"}} />
                              )}
                              {activity.type === "info" && (
                                <Info sx={{color: "#A2D5C6"}} />
                              )}
                            </ListItemIcon>
                            <ListItemText
                              primary={activity.action}
                              secondary={activity.time}
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
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
