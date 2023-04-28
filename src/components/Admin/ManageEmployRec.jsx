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
import axios from "axios";

const ManageEmploy = () => {
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
        const [userResponse, companyResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/user/", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:5000/api/company", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const usersWithCompany = userResponse.data.map((user) => {
          const matchedCompany = companyResponse.data.find(
            (company) => company.userId === user._id
          );
          const nameCompany = matchedCompany ? matchedCompany.nameCompany : "";
          const name = user.role === "recruiter" ? user.username : user.name;
          return {
            ...user,
            nameCompany,
            name,
          };
        });
        const recruiters = usersWithCompany.filter(
          (user) => user.role === "recruiter"
        );

        setUsers(usersWithCompany);
        setRecruiters(recruiters); // set recruiters in state
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
            Số Nhà Tuyển Dụng
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
                  <TableCell></TableCell>
                  <TableCell>Tên Nhà Tuyển Dụng</TableCell>
                  <TableCell>Tên Công Ty</TableCell>
                  <TableCell>Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recruiter.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(e, user._id)}
                        checked={selectedRows.includes(user._id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography>{user?.name} </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{user?.nameCompany}</Typography>
                    </TableCell>

                    <TableCell>
                      <Button variant="text" color="success">
                        Đã Đăng Ký
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

export default ManageEmploy;
