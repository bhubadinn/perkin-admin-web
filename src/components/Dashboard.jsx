// /src/components/Dashboard.jsx

import React, {useState} from "react";
import Layout from "./Layout";
import LogStream from "./LogStream";
// import {useAuth} from "../hooks/useAuth";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  Paper,
  Typography as MuiTypography,
  Button as MuiButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Box,
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import GavelIcon from "@mui/icons-material/Gavel";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {motion} from "framer-motion";
import {sendLineMessage} from "../services/notificationService";

const Dashboard = () => {
  // const {user} = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [lineMessage, setLineMessage] = useState({
    userLineId: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const stats = [
    {
      title: "Total Users",
      value: "965",
      change: "+27%",
      icon: <People />,
      color: "primary",
    },
    {
      title: "Total Customers",
      value: "12",
      change: "+32%",
      icon: <AccountCircleIcon />,
      color: "primary",
    },
    {
      title: "Total Questions",
      value: "567",
      change: "+36%",
      icon: <DeviceUnknownIcon />,
      color: "info",
    },
    {
      title: "Total Law",
      value: "72",
      change: "+28%",
      icon: <GavelIcon />,
      color: "info",
    },
    {
      title: "Total Revenue",
      value: "฿1,231",
      change: "+8%",
      icon: <MonetizationOnIcon />,
      color: "success",
    },
  ];

  // const recentActivities = [
  //   {action: "New user registered", time: "2 minutes ago", type: "success"},
  //   {action: "System backup completed", time: "1 hour ago", type: "info"},
  //   {action: "Payment processed", time: "2 hours ago", type: "success"},
  //   {action: "Database maintenance", time: "4 hours ago", type: "warning"},
  // ];

  const handleOpenModal = () => {
    setOpenModal(true);
    setError(null);
    setLineMessage({userLineId: "", message: ""});
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setError(null);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setLineMessage((prev) => ({...prev, [name]: value}));
  };

  const handleSendMessage = async () => {
    if (!lineMessage.userLineId || !lineMessage.message) {
      setError("Please fill in all fields");
      return;
    }
    if (!/^U[a-f0-9]{32,34}$/.test(lineMessage.userLineId)) {
      setError("Invalid Line User ID format");
      return;
    }
    if (lineMessage.message.length > 5000) {
      setError("Message too long (max 5000 characters)");
      return;
    }

    setIsSending(true);
    try {
      await sendLineMessage(lineMessage.userLineId, lineMessage.message);
      setSuccess("Message sent successfully!");
      handleCloseModal();
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(null);
  };

  return (
    <Layout title="Dashboard">
      <Container maxWidth="xl" sx={{py: 3}}>
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
                {label: "ส่งข้อความไลน์", action: handleOpenModal},
                {label: "แจ้งกฎหมาย", action: "/action/#"},
                {label: "แจ้งข่าวสาร", action: "/action/#"},
                {label: "แจ้งบัคระบบ", action: "/action/#"},
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={
                      typeof item.action === "function"
                        ? item.action
                        : undefined
                    }
                    href={
                      typeof item.action === "string" ? item.action : undefined
                    }
                    sx={{
                      py: 2,
                      borderColor: "#A2D5C6",
                      color: "#000000",
                      "&:hover": {
                        borderColor: "#A2D5C6",
                        backgroundColor: "rgba(162, 213, 198, 0.5)",
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

        {/* Line Message Modal */}
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle sx={{pb: 1}}>ส่งข้อความไลน์</DialogTitle>
          <DialogContent sx={{p: 2}}>
            <TextField
              autoFocus
              margin="dense"
              name="userLineId"
              label="User Line ID"
              type="text"
              fullWidth
              variant="outlined"
              value={lineMessage.userLineId}
              onChange={handleInputChange}
              error={!!error}
            />
            <TextField
              margin="dense"
              name="message"
              label="ข้อความ"
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={lineMessage.message}
              onChange={handleInputChange}
              error={!!error}
              helperText={
                error || `${lineMessage.message.length}/5000 characters`
              }
              inputProps={{maxLength: 5000}}
            />
          </DialogContent>
          <DialogActions sx={{p: 2}}>
            <Button onClick={handleCloseModal} color="primary">
              ยกเลิก
            </Button>
            <Button
              onClick={handleSendMessage}
              color="primary"
              variant="contained"
              disabled={isSending}
            >
              {isSending ? "กำลังส่ง..." : "ส่ง"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Success Feedback Snackbar */}
        <Snackbar
          open={!!success}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{vertical: "bottom", horizontal: "center"}}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{width: "100%"}}
          >
            {success}
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
};

export default Dashboard;
