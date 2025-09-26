import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import {Security} from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

const ProtectedRoute = ({children}) => {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
        }}
      >
        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          <Paper
            elevation={24}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(162, 213, 198, 0.3)",
            }}
          >
            <motion.div
              animate={{rotate: 360}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                  bgcolor: "#A2D5C6",
                }}
              >
                <Security sx={{fontSize: 40, color: "#000000"}} />
              </Avatar>
            </motion.div>
            
            <Typography variant="h6" fontWeight="bold" gutterBottom color="#000000">
              Authenticating...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please wait while we verify your credentials
            </Typography>
            
            <Box sx={{mt: 3}}>
              <CircularProgress 
                size={40} 
                sx={{
                  color: "#A2D5C6",
                }}
              />
            </Box>
          </Paper>
        </motion.div>
      </Box>
    );
  }

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;