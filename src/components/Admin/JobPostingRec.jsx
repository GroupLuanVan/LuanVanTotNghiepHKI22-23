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

const JobPosting = () => {
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
            Báo cáo tuyển dụng
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
                xem
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
                  <TableCell></TableCell>
                  <TableCell>Tên tin tuyển dụng</TableCell>
                  <TableCell>Tên Công Ty</TableCell>
                  <TableCell>Tên Nhà Tuyển Dụng</TableCell>
                  <TableCell>Ngày đăng</TableCell>

                  <TableCell>Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    onChange={(e) => handleCheckboxChange(e, rowCount)}
                    checked={selectedRows.includes(rowCount)}
                  />
                </TableCell>
                <TableCell>
                  <Typography>Intern ReactJS </Typography>
                </TableCell>
                <TableCell>
                  <Typography>FPT Sof</Typography>
                </TableCell>
                <TableCell>
                  <Typography>HR FPT</Typography>
                </TableCell>
                <TableCell>
                  <Typography>17/04/2022</Typography>
                </TableCell>

                <TableCell>
                  <Button variant="text" color="success">
                    Đã Đăng
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Checkbox
                    onChange={(e) => handleCheckboxChange(e, rowCount + 1)}
                    checked={selectedRows.includes(rowCount + 1)}
                  />
                </TableCell>
                <TableCell>
                  <Typography>Intern ReactJS </Typography>
                </TableCell>
                <TableCell>
                  <Typography>FPT Sof</Typography>
                </TableCell>
                <TableCell>
                  <Typography>HR FPT</Typography>
                </TableCell>
                <TableCell>
                  <Typography>17/04/2022</Typography>
                </TableCell>

                <TableCell>
                  <Button variant="text" color="success">
                    Đã Đăng
                  </Button>
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default JobPosting;
