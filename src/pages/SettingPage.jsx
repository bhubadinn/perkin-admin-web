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

// Settings Page
export const SettingsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="Settings">
        <Container maxWidth="md" sx={{py: 3}}>
          <FormSkeleton fields={8} />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title="Settings">
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
            Settings
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{mb: 4}}>
            Configure your system preferences
          </Typography> */}

          {/* <Card elevation={2} sx={{borderRadius: 3}}>
            <CardContent sx={{p: 4}}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                General Settings
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Site Name"
                    defaultValue="Perkin Admin"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Admin Email"
                    defaultValue="admin@perkin.com"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Site Description"
                    defaultValue="Administrative system for team management"
                    variant="outlined"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Timezone"
                    defaultValue="UTC"
                    variant="outlined"
                  >
                    <MenuItem value="UTC">UTC</MenuItem>
                    <MenuItem value="EST">Eastern Time</MenuItem>
                    <MenuItem value="PST">Pacific Time</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Language"
                    defaultValue="en"
                    variant="outlined"
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                  </TextField>
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
                  Save Changes
                </Button>
                <Button variant="outlined">Reset</Button>
              </Box>
            </CardContent>
          </Card> */}
        </motion.div>
      </Container>
    </Layout>
  );
};
