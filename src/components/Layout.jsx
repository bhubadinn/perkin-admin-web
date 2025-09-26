import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Tooltip,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  Settings,
  Person,
  Logout,
  Security,
} from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Layout = ({ children, title = "Dashboard" }) => {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarCollapsedToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const sidebarWidth = isMobile ? 0 : sidebarCollapsed ? 64 : 280;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onToggle={handleSidebarToggle}
        collapsed={sidebarCollapsed}
        onCollapsedToggle={handleSidebarCollapsedToggle}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: isMobile ? "100%" : `calc(100% - ${sidebarWidth}px)`,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {/* Top App Bar */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #e0e0e0",
            color: "#000000",
            zIndex: theme.zIndex.drawer - 1,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Left side */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {isMobile && (
                <IconButton
                  edge="start"
                  onClick={handleSidebarToggle}
                  sx={{ color: "#000000" }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#000000"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Welcome back, {user?.name}
                </Typography>
              </motion.div>
            </Box>

            {/* Right side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Tooltip title="Notifications">
                  <IconButton sx={{ color: "#666666" }}>
                    <Badge badgeContent={4} color="error">
                      <Notifications />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Settings">
                  <IconButton sx={{ color: "#666666" }}>
                    <Settings />
                  </IconButton>
                </Tooltip>

                <Button
                  onClick={handleMenuOpen}
                  startIcon={
                    <Avatar 
                      src={user?.avatar} 
                      sx={{ width: 32, height: 32 }} 
                    />
                  }
                  sx={{
                    color: "#000000",
                    textTransform: "none",
                    ml: 1,
                    "&:hover": {
                      backgroundColor: "rgba(162, 213, 198, 0.1)",
                    },
                  }}
                >
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {user?.name}
                  </Box>
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      minWidth: 220,
                      borderRadius: 2,
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box sx={{ px: 2, py: 1.5, borderBottom: "1px solid #e0e0e0" }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {user?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user?.email}
                    </Typography>
                  </Box>
                  
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
                  
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                      <Security />
                    </ListItemIcon>
                    <ListItemText primary="Security" />
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

        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#F6F6F6",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;