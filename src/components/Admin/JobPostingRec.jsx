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
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import axios from "axios";

const JobPosting = () => {
  const [openCandidatesModal, setOpenCandidatesModal] = useState(false);
  const hdlCloseCandidatesModal = () => setOpenCandidatesModal(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const token = useSelector((state) => state.user.token);

  const [adminJob, setAdminJob] = useState([]);

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

  const handleDeleteClick = () => {
    // TODO: implement delete logic
    console.log("Delete rows", selectedRows);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/jobpost/all/home",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAdminJob(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  console.log(adminJob?.jobpost);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/jobpost/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);

      // Lọc danh sách phần tử mới sau khi xóa
      const updatedAdminJob = adminJob.jobsPage.filter((job) => job._id !== id);

      // Cập nhật lại state
      setAdminJob(updatedAdminJob);

      // Reload trang
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
            Số bài đăng tuyển dụng
          </Typography>
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
                  <TableCell>Tên tin tuyển dụng</TableCell>
                  <TableCell>Tên công ty</TableCell>
                  <TableCell>Ngày đăng</TableCell>
                  <TableCell>Lượt xem</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              {adminJob?.jobpost?.map((job) => (
                <TableRow key={job?._id}>
                  <TableCell>
                    <Typography>{job?.title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{job?.companyId?.nameCompany}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>{job?.createdAt}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{job?.viewCount}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ height: 30, width: 100 }}
                      onClick={() => handleDelete(job._id)}
                    >
                      Xóa
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default JobPosting;
