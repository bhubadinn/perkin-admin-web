import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
  Switch,
  FormControlLabel,
  Avatar,
  Container,
  Paper,
  Fade,
  Slide,
  Chip,
  Divider,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Lock,
  Person,
  Email,
  Login,
  PersonAdd,
  Security,
  CheckCircle,
} from "@mui/icons-material";

import {motion} from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {login, register, error, isLoading, clearError, isAuthenticated} =
    useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        // Navigate to dashboard after successful login
        navigate("/dashboard");
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        await register({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        });
        // Navigate to dashboard after successful registration
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
    clearError();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Card
            elevation={24}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(162, 213, 198, 0.3)",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                color: "#000000",
                p: 4,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 0.2, type: "spring", stiffness: 200}}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Security sx={{fontSize: 40, color: "#000000"}} />
                </Avatar>
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  color="#000000"
                >
                  {isLogin ? "Welcome Back" : "Create Account"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{opacity: 0.8, color: "#000000"}}
                >
                  {isLogin
                    ? "Sign in to your Perkin Admin account"
                    : "Join Perkin Admin today"}
                </Typography>
              </motion.div>

              {/* Decorative elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.1)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>

            <CardContent sx={{p: 4}}>
              {/* Error Alert */}
              {error && (
                <motion.div
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.3}}
                >
                  <Alert severity="error" sx={{mb: 3, borderRadius: 2}}>
                    {error}
                  </Alert>
                </motion.div>
              )}

              {/* Form */}
              <Box component="form" onSubmit={handleSubmit}>
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.6}}
                >
                  {!isLogin && (
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={!isLogin}
                      margin="normal"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person color="action" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  )}

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  {!isLogin && (
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      margin="normal"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock color="action" />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.8}}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={isLoading}
                    startIcon={isLogin ? <Login /> : <PersonAdd />}
                    sx={{
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      borderRadius: 2,
                      background:
                        "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                      color: "#000000",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #7BC4B0 0%, #A2D5C6 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(162, 213, 198, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isLoading
                      ? isLogin
                        ? "Signing In..."
                        : "Creating Account..."
                      : isLogin
                      ? "Sign In"
                      : "Create Account"}
                  </Button>
                </motion.div>

                {/* Toggle Mode */}
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 1}}
                >
                  <Box sx={{textAlign: "center", mt: 2}}>
                    <Button
                      onClick={toggleMode}
                      sx={{
                        textTransform: "none",
                        fontWeight: 500,
                        color: "#A2D5C6",
                        "&:hover": {
                          background: "rgba(162, 213, 198, 0.1)",
                        },
                      }}
                    >
                      {isLogin
                        ? "Don't have an account? Sign up"
                        : "Already have an account? Sign in"}
                    </Button>
                  </Box>
                </motion.div>

                {/* Demo Credentials */}
                {/* {isLogin && (
                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1.2}}
                  >
                    <Divider sx={{my: 3}}>
                      <Typography variant="body2" color="text.secondary">
                        Demo Credentials
                      </Typography>
                    </Divider>

                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        bgcolor: "#F6F6F6",
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "#A2D5C6",
                      }}
                    >
                      <Box
                        sx={{display: "flex", flexDirection: "column", gap: 1}}
                      >
                        <Box
                          sx={{display: "flex", alignItems: "center", gap: 1}}
                        >
                          <Chip
                            label="Admin"
                            size="small"
                            sx={{
                              bgcolor: "#A2D5C6",
                              color: "#000000",
                            }}
                            icon={<CheckCircle />}
                          />
                          <Typography variant="body2" color="text.secondary">
                            admin@perkin.com / admin123
                          </Typography>
                        </Box>
                        <Box
                          sx={{display: "flex", alignItems: "center", gap: 1}}
                        >
                          <Chip
                            label="User"
                            size="small"
                            sx={{
                              bgcolor: "#CFFFE2",
                              color: "#000000",
                            }}
                            icon={<Person />}
                          />
                          <Typography variant="body2" color="text.secondary">
                            user@perkin.com / user123
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                )} */}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AuthPage;
