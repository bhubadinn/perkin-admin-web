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
} from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {id: "name", numeric: false, disablePadding: true, label: "User"},
  {
    id: "line_user_id",
    numeric: false,
    disablePadding: false,
    label: "Line User ID",
  },
  {id: "role", numeric: false, disablePadding: false, label: "Role"},
  {id: "status", numeric: false, disablePadding: false, label: "Status"},
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
            align="center" // Center align text for all headers
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
export default function UsersTable({mockUsers}) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(
    () => [...mockUsers].sort(getComparator(order, orderBy)),
    [order, orderBy, mockUsers]
  );

  return (
    <TableContainer>
      <Table>
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {visibleRows.map((user, index) => (
            <motion.tr
              key={user.id}
              component={TableRow}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: index * 0.1}}
              sx={{"&:hover": {bgcolor: "#F6F6F6"}}}
            >
              <TableCell>
                <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                  <Avatar sx={{width: 32, height: 32}}>{user.name[0]}</Avatar>
                  <Typography fontWeight={500}>{user.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{user.line_user_id}</TableCell>
              <TableCell>
                <Chip
                  label={user.role}
                  size="small"
                  sx={{
                    bgcolor: user.role === "Admin" ? "#A2D5C6" : "#CFFFE2",
                    color: "#000000",
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={user.status}
                  size="small"
                  color={
                    user.status === "Active"
                      ? "success"
                      : user.status === "Inactive"
                      ? "error"
                      : "warning"
                  }
                />
              </TableCell>
              <TableCell align="center">
                <IconButton size="small" sx={{color: "#A2D5C6"}}>
                  <EditIcon />
                </IconButton>
                {user.status.includes("Customer") && (
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
