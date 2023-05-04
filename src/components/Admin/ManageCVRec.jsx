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
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManageCVRec = () => {
  const [openCandidatesModal, setOpenCandidatesModal] = useState(false);
  const hdlCloseCandidatesModal = () => setOpenCandidatesModal(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const [Cv, setCV] = useState([]);
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
        const response = await axios.get(
          "http://localhost:5000/api/resume/all",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCV(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);
  console.log(Cv);

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
            Số cv được tạo
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
                  <TableCell>Tên ứng viên</TableCell>
                  <TableCell>Tên tiêu đề cv</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>Mẫu CV</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              {Cv?.map((cv) => (
                <TableRow key={cv._id}>
                  <TableCell>
                    <Typography>{cv?.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{cv?.title}</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>{cv?.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{cv?.cvTemplate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => navigate(`/viewcv/${cv?._id}`)}
                    >
                      Xem CV
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

export default ManageCVRec;
