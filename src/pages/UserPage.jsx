// src/pages/UserPage.jsx

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
  TablePagination,
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
import {getComparator, descendingComparator} from "../components/UsersTable";

export const UsersPage = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const rowsPerPage = 25;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await fetch("http://localhost:3030/api/v1/user");
        const response = await fetch("https://sta.up.railway.app/api/v1/user");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        const transformedUsers = data.map((user) => ({
          id: user.user_id,
          name: user.user_line_username,
          line_user_id: user.line_id,
          img: user.user_line_img,
          token_usage: user.token_usage,
          subscription: [
            user.is_subscribe ? "Subscribed" : "Not Subscribed",
            user.is_subscribe_length_original,
            user.is_subscribe_length,
            user.is_subscribe_datetime || "N/A",
          ]
            .filter(Boolean)
            .join(", "),
          is_subscribed_raw: user.is_subscribe, // Add raw subscription status
          created_at: new Date(user.created_at).toLocaleString(),
        }));
        setUsers(transformedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredUsers = users.filter(
    (user) =>
      user &&
      (user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.line_user_id?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Custom comparator to prioritize subscribed users
  const prioritizeSubscribed = (a, b) => {
    // Subscribed users come first (true > false)
    if (a.is_subscribed_raw && !b.is_subscribed_raw) return -1;
    if (!a.is_subscribed_raw && b.is_subscribed_raw) return 1;
    // For users with the same subscription status, use the default comparator
    return getComparator(order, orderBy)(a, b);
  };

  const sortedUsers = React.useMemo(() => {
    // Sort by subscription status first, then by the current `orderBy` property
    return [...filteredUsers].sort(prioritizeSubscribed);
  }, [order, orderBy, filteredUsers]);

  const paginatedUsers = sortedUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
                    value={searchQuery}
                    onChange={handleSearchChange}
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
              <UsersTable
                mockUsers={paginatedUsers}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TablePagination
                rowsPerPageOptions={[25, 50, 100]}
                component="div"
                count={filteredUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                sx={{px: 2, py: 1, borderTop: "1px solid #e0e0e0"}}
              />
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Layout>
  );
};
