// src/components/UsersTable.jsx

import React from "react";
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
} from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
  {id: "name", numeric: false, disablePadding: true, label: "User"},
  {id: "line_user_id", numeric: false, disablePadding: false, label: "Line ID"},
  {
    id: "token_usage",
    numeric: true,
    disablePadding: false,
    label: "Token Usage",
  },
  {
    id: "subscription",
    numeric: false,
    disablePadding: false,
    label: "Subscription",
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: false,
    label: "Created At",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
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

// Remove all sorting logic from this component
export default function UsersTable({mockUsers, order, orderBy, onRequestSort}) {
  return (
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
              <TableCell>{user.created_at}</TableCell>
              <TableCell align="center">
                <IconButton size="small" sx={{color: "#A2D5C6"}}>
                  <EditIcon />
                </IconButton>
                {user.subscription.includes("Customer") && (
                  <IconButton size="small" sx={{color: "#dbd970ff"}}>
                    <CurrencyExchangeIcon />
                  </IconButton>
                )}
                {user.subscription.includes("Subscribed") && (
                  <IconButton size="small" sx={{color: "#dbd970ff"}}>
                    <CurrencyExchangeIcon />
                  </IconButton>
                )}
                <IconButton size="small" sx={{color: "#f44336"}}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
