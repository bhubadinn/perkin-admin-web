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

export const LawPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Law">
        <Container maxWidth="lg" sx={{py: 3}}>
          <PageSkeleton title={true} cards={4} stats={true} />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Law">
      <Container maxWidth="lg" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Comming Soon...
          </Typography>
          {/* <Typography variant="h4" fontWeight="bold" gutterBottom>
            Law Listing Center
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Monitor and manage your law listing
          </Typography> */}

          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 4}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Password Security
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{mb: 3}}
                  >
                    Last updated: 30 days ago
                  </Typography>
                  <Button
                    variant="outlined"
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
                    Change Password
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 4}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Two-Factor Authentication
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{mb: 3}}
                  >
                    Status: Enabled
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background:
                        "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                      color: "#000000",
                    }}
                  >
                    Manage 2FA
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card elevation={2} sx={{borderRadius: 3}}>
                <CardContent sx={{p: 4}}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Recent Security Activity
                  </Typography>
                  <Box sx={{mt: 2}}>
                    <Typography variant="body2" color="text.secondary">
                      No suspicious activity detected in the last 30 days.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
        </motion.div>
      </Container>
    </Layout>
  );
};
