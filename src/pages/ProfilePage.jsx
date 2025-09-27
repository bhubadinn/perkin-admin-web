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

// Profile Page
export const ProfilePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Profile">
        <ProfileSkeleton />
      </Layout>
    );
  }

  return (
    <Layout title="My Profile">
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
            My Profile
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Manage your personal information and preferences
          </Typography> */}

          {/* <Card elevation={2} sx={{borderRadius: 3}}>
            <CardContent sx={{p: 4}}>
              <Box sx={{display: "flex", alignItems: "center", gap: 3, mb: 4}}>
                <Avatar sx={{width: 100, height: 100}}>JD</Avatar>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    John Doe
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    admin@perkin.com
                  </Typography>
                  <Chip
                    label="Administrator"
                    sx={{
                      mt: 1,
                      bgcolor: "#A2D5C6",
                      color: "#000000",
                    }}
                  />
                </Box>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    defaultValue="John"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    defaultValue="Doe"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    defaultValue="admin@perkin.com"
                    variant="outlined"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    defaultValue="+1 (555) 123-4567"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    defaultValue="IT Administration"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    defaultValue="System administrator with 5+ years of experience in managing enterprise applications."
                    variant="outlined"
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>

              <Box sx={{display: "flex", gap: 2, mt: 4}}>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                    color: "#000000",
                  }}
                >
                  Update Profile
                </Button>
                <Button variant="outlined">Change Password</Button>
              </Box>
            </CardContent>
          </Card> */}
        </motion.div>
      </Container>
    </Layout>
  );
};
