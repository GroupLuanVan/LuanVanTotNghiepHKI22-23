import {
  Autocomplete,
  Box,
  Button,
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
  createTheme,
  Select,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import "draft-js/dist/Draft.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import logoImage from "../../asset/camera_icon.png";
import Image from "mui-image";
import { useEffect, useState } from "react";
import RichText from "../../components/RichText";
import axios from "axios";
import { maxHeight, maxWidth } from "@mui/system";
import env from "../../asset/env.json";
import useFetch from "../../hook/useFetch";
import Loading from "../Loading";
import { Modal } from "@mui/material";
import Contact from "./Contact";
export default function Charts({ user }) {
  const [data, setData] = useState([]);
  const [selectValue, setSelectValue] = useState({});
  const options = [
    { value: 1, label: "đang tuyển" },
    { value: 2, label: "ngừng tuyển" },
    { value: 3, label: "hết hạn" },
  ];
  const theme = createTheme();
  console.log(user);
  const token = localStorage.getItem("token");
  const [openCandidatesModal, setOpenCandidatesModal] = useState(false);
  const hdlOpenCandidatesModal = () => setOpenCandidatesModal(true);
  const hdlCloseCandidatesModal = () => setOpenCandidatesModal(false);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const navigate = useNavigate();

  const jobsFetch = useFetch(
    `http://localhost:5000/api/jobpost/showallpost/${user.idCompany}`
  );

  console.log(jobsFetch.data.jobsPage);

  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    if (!user.isLogin && user.user.role != "rec") {
      navigateTo("/hrlogin");
    }
  });
  useEffect(() => {
    setData(jobsFetch.data.jobsPage);
  }, [jobsFetch.data.jobsPage]);

  function handleStatusChange(e, jobID) {
    const status = e.target.value;
    console.log(status, jobID);
    async function contactData() {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/jobpost/jobstatus/${jobID}`,
          { status: status }, // pass updated data to the API
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    contactData();
    setSelectValue({ ...selectValue, [jobID]: status });
    const updatedData = jobsFetch?.data?.jobsPage?.map((item) => {
      if (item._id === jobID) {
        return {
          ...item,
          status: status,
        };
      }
      return item;
    });
    setData(updatedData);
  }
  console.log(data);
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/jobpost",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa bài đăng này?");
    if (confirmDelete) {
      axiosInstance
        .delete(`/${id}`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          // handle error
        });
    }
  };

  return (
    <>
      <Grid
        sx={{
          m: 3,
        }}
      >
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
          <Typography variant="h4" fontWeight={550} sx={{ ml: 1 }}>
            Công việc đã đăng
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
              <TableHead sx={{ background: " #5490cc" }}>
                <TableCell>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "Black" }}
                  >
                    Tên tin tuyển dụng
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "Black" }}
                  >
                    Ngày đăng
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "Black" }}
                  >
                    Ngày hết hạn
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "Black" }}
                  >
                    Lượt xem
                  </Typography>
                </TableCell>

                <TableCell>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "Black" }}
                  >
                    Ứng viên ứng tuyển
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "Black" }}
                  >
                    Gợi ý ứng viên phù hợp
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "Black" }}
                  >
                    Trạng thái
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableHead>
              {jobsFetch &&
                jobsFetch.data &&
                jobsFetch.data.jobsPage &&
                jobsFetch.data.jobsPage.map((item) => {
                  console.log(item);

                  return (
                    <TableRow key={item._id}>
                      <TableCell
                        onClick={() => {
                          navigate({
                            pathname: `/JobDetailHR/${item?._id}`,
                          });
                        }}
                      >
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 17,
                          }}
                        >
                          {item?.title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 17,
                          }}
                        >
                          {item?.createdAt}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 17,
                          }}
                        >
                          {item?.updatedAt}
                        </Typography>{" "}
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 17,
                          }}
                        >
                          {item?.enDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 17,
                          }}
                        >
                          {item?.viewCount} lượt xem
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Button
                          sx={{
                            ml: 7,
                            backgroundColor: "#00A7AC",
                            color: "black",
                          }}
                          variant="text"
                          color="success"
                          onClick={() => {
                            navigateTo({
                              pathname: `../contacts/${item._id}`,
                              state: { jobsPage: jobsFetch.data.jobsPage },
                            });
                          }}
                        >
                          Chi Tiết
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          sx={{
                            ml: 10,
                            backgroundColor: "#00A7AC",
                            color: "black",
                          }}
                          variant="text"
                          color="success"
                          onClick={() => {
                            navigateTo({
                              pathname: `../CvForYou/${item._id}`, // update the pathname to the correct URL
                              state: { job: item }, // pass the item as a prop to the new page
                            });
                          }}
                        >
                          Xem
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Select
                            sx={{
                              width: 150,
                            }}
                            value={selectValue[item._id] || item.status}
                            size="small"
                            onChange={(e) => handleStatusChange(e, item._id)}
                          >
                            {options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          {/* <Button
                            variant="contained"
                            color="primary"
                            sx={{ mr: 1, height: 30, width: 100 }}
                            //onClick={() => hdlSuaBaiDang(item._id)}
                          >
                            Sửa
                          </Button> */}
                          <Button
                            variant="contained"
                            color="error"
                            sx={{ height: 30, width: 100 }}
                            onClick={() => handleDelete(item._id)}
                          >
                            Gỡ bài
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* MODAL SECTION */}
      <Modal
        open={openCandidatesModal}
        onClose={hdlCloseCandidatesModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            background: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <DialogTitle id="id">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                TIÊU ĐỀ
              </Typography>
              <Box>
                <IconButton onClick={hdlCloseCandidatesModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </DialogTitle>
        </Box>
      </Modal>
      {/* MODAL SECTION */}
    </>
  );
}
