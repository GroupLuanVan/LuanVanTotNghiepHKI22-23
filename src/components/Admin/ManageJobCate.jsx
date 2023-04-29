import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Grid,
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TextField,
  Typography,
  TableRow,
  DialogTitle,
  Popover,
  TableBody,
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import AddJobCategoryDialog from "./AddJobCate";
import axios from "axios";

const ManageJobCate = () => {
  const [users, setUsers] = useState([]);
  const [recruiter, setRecruiters] = useState([]);
  const token = useSelector((state) => state.user.token);
  const [openCandidatesModal, setOpenCandidatesModal] = useState(false);
  const hdlCloseCandidatesModal = () => setOpenCandidatesModal(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // handle checkbox change
  let rowCount = 0;

  function handleCheckboxChange(e, id) {
    const checked = e.target.checked;
    if (checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((row) => row !== id));
    }
  }

  // function handleCheckboxChange(e, id) {
  //   const checked = e.target.checked;
  //   if (checked) {
  //     setSelectedRows([...selectedRows, id]);
  //   } else {
  //     setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
  //   }
  // }

  // handle delete button click
  const handleDeleteClick = () => {
    // TODO: implement delete logic
    console.log("Delete rows", selectedRows);
  };

  const [openAddJobCategoryDialog, setOpenAddJobCategoryDialog] =
    useState(false);

  const handleOpenAddJobCategoryDialog = () => {
    setOpenAddJobCategoryDialog(true);
  };

  const handleCloseAddJobCategoryDialog = () => {
    setOpenAddJobCategoryDialog(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/jobcategory",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        // Xử lý dữ liệu tại đây
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(users);

  return (
    <>
      <Grid sx={{ m: 3 }}>
        {/* Header */}

        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
            mt: 25,
          }}
        >
          <BarChartIcon />
          <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
            Các Loại Công Việc
          </Typography>

          {selectedRows.length > 0 && (
            <>
              <Button
                variant="contained"
                color="error"
                sx={{ ml: "auto", width: 150 }}
                onClick={handleDeleteClick}
              >
                Xóa
              </Button>
              <Button
                variant="contained"
                sx={{ ml: 4, width: 150 }}
                onClick={handleDeleteClick}
              >
                Xem
              </Button>
            </>
          )}
        </Box>
        {/* head info */}
        <Grid
          container
          sx={{
            p: 2,
            rowGap: 2,
            columnGap: 2,
            background: "#fff",
            mb: 2,
            alignItems: "center",
          }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Button
                      onClick={handleOpenAddJobCategoryDialog}
                      sx={{
                        backgroundColor: "#5490cc",
                        color: "black",
                        fontWeight: "700",
                        width: "100px",
                      }}
                    >
                      Thêm
                    </Button>
                    <AddJobCategoryDialog
                      open={openAddJobCategoryDialog}
                      onClose={handleCloseAddJobCategoryDialog}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Typography ml={-3} variant="h6">
                      Tên Loại Công Việc
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography ml={7} variant="h6">
                      Ngày Tạo
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography ml={-3} variant="h6">
                      Trạng Thái
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(e, user._id)}
                        checked={selectedRows.includes(user._id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography>{user?.title} </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{user?.createdAt}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="text" color="success">
                        Đã Tạo
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ManageJobCate;
