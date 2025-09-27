import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  Avatar,
  Divider,
  Chip,
  Tooltip,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  Collapse,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Analytics as AnalyticsIcon,
  Assignment as AssignmentIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
  AccountCircle as ProfileIcon,
  ChevronRight,
  ChevronLeft,
  Menu as MenuIcon,
  AdminPanelSettings,
  Group,
  PersonAdd,
  BarChart,
  TrendingUp,
  Assessment,
  Build,
  NotificationsActive,
  ContactSupport,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

import GavelIcon from "@mui/icons-material/Gavel";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import VisibilityIcon from "@mui/icons-material/Visibility";

import {motion} from "framer-motion";

import SupportIcon from "@mui/icons-material/Support";

const DRAWER_WIDTH = 280;
const COLLAPSED_WIDTH = 64;

const Sidebar = ({open, onToggle, collapsed, onCollapsedToggle}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [expandedMenus, setExpandedMenus] = useState({});

  const handleExpandMenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const menuItems = [
    {
      key: "dashboard",
      title: "แดชบอร์ด",
      icon: <DashboardIcon />,
      path: "/dashboard",
      roles: ["admin", "user"],
    },

    {
      key: "analytics",
      title: "วิเคราะห์ข้อมูล",
      icon: <AnalyticsIcon />,
      roles: ["admin", "user"],
      children: [
        {
          key: "analytics-overview",
          title: "Overview",
          icon: <BarChart />,
          path: "/analytics",
          roles: ["admin", "user"],
        },
        {
          key: "analytics-trends",
          title: "Trends",
          icon: <TrendingUp />,
          path: "/analytics/trends",
          roles: ["admin"],
        },
        {
          key: "analytics-reports",
          title: "Reports",
          icon: <Assessment />,
          path: "/analytics/reports",
          roles: ["admin"],
        },
      ],
    },
    {
      key: "users",
      title: "จัดการผู้ใช้",
      icon: <PeopleIcon />,
      roles: ["admin"],
      children: [
        {
          key: "users-list",
          title: "รายชื่อผู้ใช้",
          icon: <Group />,
          path: "/users",
          roles: ["admin"],
        },
        // {
        //   key: "users-add",
        //   title: "Add User",
        //   icon: <PersonAdd />,
        //   path: "/users/add",
        //   roles: ["admin"],
        // },
        {
          key: "support",
          title: "รายงานปัญหา",
          icon: <SupportIcon />,
          path: "/support",
          roles: ["admin", "user"],
        },
      ],
    },
    // {
    //   key: "projects",
    //   title: "Projects",
    //   icon: <AssignmentIcon />,
    //   path: "/projects",
    //   roles: ["admin", "user"],
    // },
    {
      key: "audit",
      title: "ตรวจทานคำตอบ",
      icon: <SavedSearchIcon />,
      path: "/audit",
      roles: ["admin", "user"],
    },
    {
      key: "law",
      title: "จัดการกฎหมาย",
      icon: <GavelIcon />,
      path: "/law",
      roles: ["admin"],
    },
    {
      key: "ocr",
      title: "ระบบ OCR",
      icon: <VisibilityIcon />,
      path: "/ocr",
      roles: ["admin", "user"],
    },
    // {
    //   key: "security",
    //   title: "Security",
    //   icon: <SecurityIcon />,
    //   path: "/security",
    //   roles: ["admin"],
    // },

    {
      key: "notifications",
      title: "การแจ้งเตือน",
      icon: <NotificationsIcon />,
      path: "/notifications",
      roles: ["admin", "user"],
    },
    {
      key: "settings",
      title: "การตั้งค่า",
      icon: <SettingsIcon />,
      roles: ["admin", "user"],
      children: [
        {
          key: "settings-general",
          title: "ทั่วไป",
          icon: <Build />,
          path: "/settings/general",
          roles: ["admin", "user"],
        },
        {
          key: "settings-notifications",
          title: "ตั้งค่าการแจ้งเตือน",
          icon: <NotificationsActive />,
          path: "/settings/notifications",
          roles: ["admin", "user"],
        },
        {
          key: "settings-admin",
          title: "ตั้งค่าผู้ดูแลระบบ",
          icon: <AdminPanelSettings />,
          path: "/settings/admin",
          roles: ["admin"],
        },
      ],
    },
  ];

  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(user?.role)
  );

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
    if (isMobile) {
      onToggle();
    }
  };

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const isParentActive = (children) => {
    return children?.some((child) => isActive(child.path));
  };

  // eslint-disable-next-line no-unused-vars
  const renderMenuItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus[item.key];
    const isItemActive = isActive(item.path);
    const isParentItemActive = hasChildren && isParentActive(item.children);

    // Filter children based on user role
    const filteredChildren = hasChildren
      ? item.children.filter((child) => child.roles.includes(user?.role))
      : [];

    return (
      <React.Fragment key={item.key}>
        <ListItem disablePadding sx={{display: "block"}}>
          <Tooltip title={collapsed ? item.title : ""} placement="right" arrow>
            <ListItemButton
              onClick={() => {
                if (hasChildren) {
                  handleExpandMenu(item.key);
                } else {
                  handleNavigation(item.path);
                }
              }}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? "center" : "initial",
                px: 2.5,
                py: 1.5,
                mx: 1,
                my: 0.5,
                borderRadius: 2,
                backgroundColor:
                  isItemActive || isParentItemActive
                    ? "rgba(162, 213, 198, 0.15)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(162, 213, 198, 0.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 0 : 2,
                  justifyContent: "center",
                  color:
                    isItemActive || isParentItemActive ? "#A2D5C6" : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>

              {!collapsed && (
                <>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: 1,
                      "& .MuiListItemText-primary": {
                        fontSize: "0.9rem",
                        fontWeight:
                          isItemActive || isParentItemActive ? 600 : 400,
                        color:
                          isItemActive || isParentItemActive
                            ? "#A2D5C6"
                            : "inherit",
                      },
                    }}
                  />

                  {hasChildren && (
                    <Box sx={{ml: 1}}>
                      {isExpanded ? (
                        <ExpandLess sx={{color: "#A2D5C6"}} />
                      ) : (
                        <ExpandMore sx={{color: "#666"}} />
                      )}
                    </Box>
                  )}
                </>
              )}
            </ListItemButton>
          </Tooltip>
        </ListItem>

        {hasChildren && !collapsed && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {filteredChildren.map((child) => (
                <ListItem
                  key={child.key}
                  disablePadding
                  sx={{display: "block"}}
                >
                  <ListItemButton
                    onClick={() => handleNavigation(child.path)}
                    sx={{
                      minHeight: 40,
                      pl: 4,
                      pr: 2.5,
                      py: 1,
                      mx: 1,
                      my: 0.25,
                      borderRadius: 2,
                      backgroundColor: isActive(child.path)
                        ? "rgba(162, 213, 198, 0.15)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(162, 213, 198, 0.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 2,
                        justifyContent: "center",
                        color: isActive(child.path) ? "#A2D5C6" : "#666",
                      }}
                    >
                      {child.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={child.title}
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontSize: "0.85rem",
                          fontWeight: isActive(child.path) ? 600 : 400,
                          color: isActive(child.path) ? "#A2D5C6" : "inherit",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  const drawerContent = (
    <Box sx={{display: "flex", flexDirection: "column", height: "100%"}}>
      {/* Header */}
      <Box
        sx={{
          p: 2,
          background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
          color: "#000000",
          borderBottom: "1px solid rgba(162, 213, 198, 0.2)",
        }}
      >
        {!collapsed ? (
          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            <Box sx={{display: "flex", alignItems: "center", gap: 2, mb: 2}}>
              <Avatar
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                  width: 40,
                  height: 40,
                }}
              >
                <AdminPanelSettings sx={{color: "#000000"}} />
              </Avatar>
              <Typography variant="h6" fontWeight="bold" color="#000000">
                Perkin Admin
              </Typography>
            </Box>

            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                <Avatar src={user?.avatar} sx={{width: 32, height: 32}} />
                <Box sx={{flex: 1, minWidth: 0}}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    color="#000000"
                    noWrap
                  >
                    {user?.name}
                  </Typography>
                  <Chip
                    label={user?.role}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: "0.7rem",
                      bgcolor: "#A2D5C6",
                      color: "#000000",
                      textTransform: "capitalize",
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </motion.div>
        ) : (
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <Avatar
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.1)",
                width: 32,
                height: 32,
              }}
            >
              <AdminPanelSettings sx={{color: "#000000", fontSize: 20}} />
            </Avatar>
          </Box>
        )}
      </Box>

      {/* Navigation Menu */}
      <Box sx={{flex: 1, overflow: "auto"}}>
        <List sx={{pt: 2}}>
          {filteredMenuItems.map((item) => renderMenuItem(item))}
        </List>
      </Box>

      {/* Profile Section */}
      {!collapsed && (
        <Box sx={{p: 2, borderTop: "1px solid #e0e0e0"}}>
          <ListItemButton
            onClick={() => handleNavigation("/profile")}
            sx={{
              borderRadius: 2,
              backgroundColor: isActive("/profile")
                ? "rgba(162, 213, 198, 0.15)"
                : "transparent",
              "&:hover": {
                backgroundColor: "rgba(162, 213, 198, 0.1)",
              },
            }}
          >
            <ListItemIcon
              sx={{color: isActive("/profile") ? "#A2D5C6" : "inherit"}}
            >
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText
              primary="My Profile"
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "0.9rem",
                  fontWeight: isActive("/profile") ? 600 : 400,
                  color: isActive("/profile") ? "#A2D5C6" : "inherit",
                },
              }}
            />
          </ListItemButton>
        </Box>
      )}

      {/* Collapse Toggle Button */}
      {!isMobile && (
        <Box sx={{p: 1, borderTop: "1px solid #e0e0e0"}}>
          <Tooltip title={collapsed ? "Expand" : "Collapse"} placement="right">
            <IconButton
              onClick={onCollapsedToggle}
              sx={{
                width: "100%",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "rgba(162, 213, 198, 0.1)",
                },
              }}
            >
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            backgroundColor: "#FFFFFF",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
          boxSizing: "border-box",
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #e0e0e0",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
      open
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
