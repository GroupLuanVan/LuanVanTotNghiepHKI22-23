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
import axios from "axios";
import { useSelector } from "react-redux";

const ManageSeeker = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/contact/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
            Số lượng ứng viên ứng tuyển
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
                    {" "}
                    <Typography ml={0} variant="h6">
                      Tên tin tuyển dụng
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography ml={0} variant="h6">
                      Tên công ty
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography ml={-3} variant="h6">
                      Số lượng ứng tuyển
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    {/* <TableCell>
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(e, user._id)}
                        checked={selectedRows.includes(user._id)}
                      />
                    </TableCell> */}
                    <TableCell>
                      <Typography variant="h6">{user.jobpostId} </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{user.companyId}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="h6">2 người</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ height: 30, width: 100 }}
                        // onClick={() => handleDelete(item._id)}
                      >
                        Xóa
                      </Button>
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

export default ManageSeeker;
