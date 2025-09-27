// src/components/UsersTable.jsx

import React, {useState} from "react";
import {motion} from "framer-motion";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
  Chip,
  IconButton,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Select,
  FormControl,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {updateUser} from "../services/usersService";

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {id: "name", numeric: false, disablePadding: true, label: "ชื่อไลน์"},
  {
    id: "line_user_id",
    numeric: false,
    disablePadding: false,
    label: "ไอดีไลน์",
  },
  {
    id: "token_usage",
    numeric: true,
    disablePadding: false,
    label: "Token ที่ใช้ไป",
  },
  {
    id: "subscription",
    numeric: false,
    disablePadding: false,
    label: "สถานะ, จ่าย, เป็น",
  },
  {
    id: "subscription_date",
    numeric: false,
    disablePadding: false,
    label: "จ่ายล่าสุดเมื่อ",
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: false,
    label: "แอดมาวันที่",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "แก้ไข",
    sortable: false,
  },
];

function EnhancedTableHead({order, orderBy, onRequestSort}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{bgcolor: "#F6F6F6"}}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={
              headCell.sortable === false
                ? false
                : orderBy === headCell.id
                ? order
                : false
            }
          >
            {headCell.sortable !== false && (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
            {headCell.sortable === false && headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// Enum options for subscription length
const subscriptionLengthOptions = [
  {value: "1MS", label: "1MS"},
  {value: "1M", label: "1M"},
  {value: "1Y", label: "1Y"},
  {value: "TEST", label: "TEST"},
  {value: "UNKNOWN", label: "UNKNOWM"},
];

export default function UsersTable({
  mockUsers,
  order,
  orderBy,
  onRequestSort,
  onUserUpdate, // Receive the new prop here
}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    is_subscribe: false,
    is_subscribe_length: "UNKNOWN",
    is_subscribe_length_original: "UNKNOWN",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleOpenModal = (user) => {
    // Use user.is_subscribed_raw, which is the boolean value.
    const isSubscribed = user.is_subscribed_raw;

    // The 'subscription' property is a formatted string, so we need to
    // parse the original subscription lengths from the user object if they exist.
    // We'll use the subscription_date as a proxy to check if they have a subscription
    // since the API response does not have a separate boolean for this.
    const is_subscribe_length = user.subscription
      .split(", ")
      .pop()
      ?.toUpperCase()
      .trim()
      .replace("UNKNOWM", "UNKNOWN");
    const is_subscribe_length_original = user.subscription
      .split(", ")
      .slice(-2, -1)[0]
      ?.toUpperCase()
      .trim()
      .replace("UNKNOWM", "UNKNOWN");

    // Filter for valid options and set to 'UNKNOWN' if not found
    const validLength = subscriptionLengthOptions.some(
      (opt) => opt.value === is_subscribe_length
    )
      ? is_subscribe_length
      : "UNKNOWN";

    const validLengthOriginal = subscriptionLengthOptions.some(
      (opt) => opt.value === is_subscribe_length_original
    )
      ? is_subscribe_length_original
      : "UNKNOWN";

    setSelectedUser(user);
    setFormData({
      // Use the correct property from the transformed user object
      is_subscribe: isSubscribed,
      is_subscribe_length: validLength,
      is_subscribe_length_original: validLengthOriginal,
    });
    setError(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
    setError(null);
  };

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !subscriptionLengthOptions.some(
        (opt) => opt.value === formData.is_subscribe_length
      )
    ) {
      setError("Invalid subscription length");
      return;
    }
    if (
      !subscriptionLengthOptions.some(
        (opt) => opt.value === formData.is_subscribe_length_original
      )
    ) {
      setError("Invalid original subscription length");
      return;
    }

    setIsSubmitting(true);
    try {
      // The updateUser service should return the updated user object.
      // If it doesn't, you might need to make a separate GET request
      // to fetch the updated user.
      const updatedUser = await updateUser(selectedUser.line_user_id, formData);
      setSuccess("User updated successfully!");

      // Call the update function passed from the parent component
      // to update the state in UserPage.jsx.
      if (onUserUpdate && updatedUser) {
        onUserUpdate(updatedUser);
      }

      handleCloseModal();
    } catch (err) {
      setError(err.message || "Failed to update user. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(null);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={onRequestSort}
          />
          <TableBody>
            {mockUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                component={TableRow}
                initial={{opacity: 0, y: 25}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: index * 0.1}}
                sx={{"&:hover": {bgcolor: "#F6F6F6"}}}
              >
                <TableCell>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Avatar src={user.img} sx={{width: 32, height: 32}} />
                    <Typography fontWeight={500}>{user.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{user.line_user_id}</TableCell>
                <TableCell>{user.token_usage}</TableCell>
                <TableCell>
                  <Chip
                    label={user.subscription}
                    size="small"
                    sx={{
                      bgcolor: user.subscription.includes("Subscribed")
                        ? "#A2D5C6"
                        : "#CFFFE2",
                      color: "#000000",
                    }}
                  />
                </TableCell>
                <TableCell>{user.subscription_date}</TableCell>
                <TableCell>{user.created_at}</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    sx={{color: "#A2D5C6"}}
                    onClick={() => handleOpenModal(user)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit User Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle sx={{pb: 1}}>
          แก้ไขผู้ใช้: {selectedUser?.name}
        </DialogTitle>
        <DialogContent sx={{p: 2}}>
          <Box sx={{display: "flex", alignItems: "center", gap: 2, mb: 2}}>
            <Avatar src={selectedUser?.img} sx={{width: 48, height: 48}} />
            <Typography variant="h6">{selectedUser?.name}</Typography>
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                name="is_subscribe"
                checked={formData.is_subscribe}
                onChange={handleInputChange}
                sx={{color: "#A2D5C6", "&.Mui-checked": {color: "#A2D5C6"}}}
              />
            }
            label="สมัครสมาชิก (Subscribed)"
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>ระยะเวลาการสมัคร</InputLabel>
            <Select
              name="is_subscribe_length"
              value={formData.is_subscribe_length}
              onChange={handleInputChange}
              label="ระยะเวลาการสมัคร"
            >
              {subscriptionLengthOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>ระยะเวลาการสมัครที่จ่าย</InputLabel>
            <Select
              name="is_subscribe_length_original"
              value={formData.is_subscribe_length_original}
              onChange={handleInputChange}
              label="ระยะเวลาการสมัครที่จ่าย"
              error={!!error}
            >
              {subscriptionLengthOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {error && (
              <Typography color="error" variant="caption" sx={{mt: 1}}>
                {error}
              </Typography>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions sx={{p: 2}}>
          <Button onClick={handleCloseModal} color="primary">
            ยกเลิก
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            disabled={isSubmitting}
            sx={{bgcolor: "#A2D5C6", "&:hover": {bgcolor: "#8BC4A9"}}}
          >
            {isSubmitting ? "กำลังบันทึก..." : "บันทึก"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success/Error Feedback Snackbar */}
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
    </>
  );
}
