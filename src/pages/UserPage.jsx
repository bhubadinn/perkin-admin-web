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
import UsersTable from "../components/UsersTable";

// Users Page
export const UsersPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout title="User Management">
        <Container maxWidth="xl" sx={{py: 3}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                User Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage system users and their permissions
              </Typography>
            </Box>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add User
            </Button>
          </Box>
          <TableSkeleton rows={10} columns={6} />
        </Container>
      </Layout>
    );
  }

  const mockUsers = [
    {
      id: 1,
      name: "User #1",
      line_user_id: "LdfjriLOr49fmO(0440",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "User #2",
      line_user_id: "fiFR$fLfrijirt*40334",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "User #3",
      line_user_id: "Lfjrfkgn(*04Lkfe3#4",
      role: "User",
      status: "Customer 1MS",
    },
    {
      id: 4,
      name: "User #4",
      line_user_id: "EIRUJMFEoijrt9jORj",
      role: "Auditor",
      status: "Inactive",
    },
    {
      id: 5,
      name: "User #5",
      line_user_id: "FKI$Ji4(4j54k)OOP3",
      role: "User",
      status: "Customer 1Y",
    },
  ];

  return (
    <Layout title="User Management">
      <Container maxWidth="xl" sx={{py: 3}}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                User Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage system users and their permissions
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                background: "linear-gradient(135deg, #A2D5C6 0%, #CFFFE2 100%)",
                color: "#000000",
              }}
            >
              Add User
            </Button>
          </Box>

          <Card elevation={2} sx={{borderRadius: 3}}>
            <CardContent sx={{p: 0}}>
              <Box sx={{p: 3, borderBottom: "1px solid #e0e0e0"}}>
                <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                  <TextField
                    placeholder="Search users..."
                    variant="outlined"
                    size="small"
                    sx={{minWidth: 300}}
                    InputProps={{
                      startAdornment: (
                        <SearchIcon sx={{color: "text.secondary", mr: 1}} />
                      ),
                    }}
                  />
                  <Button variant="outlined" startIcon={<FilterIcon />}>
                    Filter
                  </Button>
                </Box>
              </Box>

              <UsersTable mockUsers={mockUsers} />
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Layout>
  );
};
