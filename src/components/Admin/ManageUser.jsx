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
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { setUserLogin, setRole, setToken } from "../../store/userSlice";
import axios from "axios";
const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [company, setCompanies] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const token = useSelector((state) => state.user.token);

  const [openCandidatesModal, setOpenCandidatesModal] = useState(false);
  const hdlCloseCandidatesModal = () => setOpenCandidatesModal(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [userResponse, companyResponse] = await Promise.all([
  //         axios.get("http://localhost:5000/api/user/", {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }),
  //         axios.get("http://localhost:5000/api/company", {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }),
  //       ]);

  //       const usersWithCompany = userResponse.data.map((user) => {
  //         const matchedCompany = companyResponse.data.find(
  //           (company) => company.userId === user._id
  //         );
  //         const nameCompany = matchedCompany ? matchedCompany.nameCompany : "";
  //         return {
  //           ...user,
  //           nameCompany,
  //         };
  //       });

  //       setUsers(usersWithCompany);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userResponse = await axios.get(
  //         "http://localhost:5000/api/user/",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );

  //       const companyResponse = await axios.get(
  //         "http://localhost:5000/api/company",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );
  //       const candidateResponse = await axios.get(
  //         "http://localhost:5000/api/candidate/all",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );

  //       setUsers(userResponse.data);
  //       setCompanies(companyResponse.data);
  //       setCandidate(candidateResponse.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, companyResponse, candidateResponse] =
          await Promise.all([
            axios.get("http://localhost:5000/api/user/", {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get("http://localhost:5000/api/company", {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get("http://localhost:5000/api/candidate/all", {
              headers: { Authorization: `Bearer ${token}` },
            }),
          ]);

        const usersWithCompanyAndCandidate = userResponse.data.map((user) => {
          const matchedCompany = companyResponse.data.find(
            (company) => company.userId === user._id
          );
          const nameCompany = matchedCompany ? matchedCompany.nameCompany : "";

          const matchedCandidate = candidateResponse.data.find(
            (candidate) => candidate.userId === user._id
          );
          const nameCandidate = matchedCandidate
            ? matchedCandidate.nameCandidate
            : "";

          return {
            ...user,
            nameCompany,
            nameCandidate,
          };
        });

        setUsers(usersWithCompanyAndCandidate);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/user/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Xóa người dùng thành công, cập nhật lại state
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
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
            Quản lý tất cả người dùng
          </Typography>
          {/* {selectedRows.length > 0 && (
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
          )} */}
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
                    <Typography ml={-1} variant="h6">
                      Tên người dùng
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography ml={-2} variant="h6">
                      Tên công ty
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography ml={0} variant="h6">
                      Vai trò
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Typography ml={0} variant="h6">
                      Trạng thái
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>
                      <Typography variant="h6">
                        {user?.nameCompany
                          ? user.nameCompany
                          : user.nameCandidate || ""}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="h6">
                        {user?.nameCompany
                          ? user?.nameCompany
                          : "Ứng Viên Không có công ty"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">{user?.role}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" color="blue">
                        Đã đăng ký
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ height: 30, width: 100 }}
                        onClick={() => handleDelete(user._id)}
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

export default ManageUser;
