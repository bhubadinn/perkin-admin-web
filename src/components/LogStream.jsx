import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {Paper, Box, Typography} from "@mui/material";

const LogStream = () => {
  const [logs, setLogs] = useState([
    "[14:35:00] System started successfully.",
    "[14:35:01] User 'admin' logged in.",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toTimeString().split(" ")[0];
      const newLog = `[${timestamp}] New event logged: Task #${Math.floor(
        Math.random() * 100
      )} completed.`;
      setLogs((prevLogs) => [newLog, ...prevLogs.slice(0, 9)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
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
          height: 300, // Fixed height for scrolling
        }}
      >
        <Box sx={{position: "relative", zIndex: 1}}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="#000000"
          >
            System Log Stream
          </Typography>
          <Box
            sx={{
              height: 200, // Scrollable area height
              overflowY: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.7)", // Light overlay for readability
              padding: 2,
              borderRadius: 1,
            }}
          >
            {logs.map((log, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{color: "#333333", mb: 1, whiteSpace: "pre-wrap"}}
              >
                {log}
              </Typography>
            ))}
          </Box>
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
  );
};

export default LogStream;
