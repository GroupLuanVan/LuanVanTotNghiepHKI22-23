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
  console.log(user);
  const [openCandidatesModal, setOpenCandidatesModal] = useState(false);
  const hdlOpenCandidatesModal = () => setOpenCandidatesModal(true);
  const hdlCloseCandidatesModal = () => setOpenCandidatesModal(false);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const navigate = useNavigate();

  const jobsFetch = useFetch(
    `http://localhost:5000/api/jobpost/showallpost/${user.idCompany}`
  );

  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    if (!user.isLogin && user.user.role != "rec") {
      navigateTo("/hrlogin");
    }
  });

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

  console.log(jobsFetch.data.jobsPage);

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
          <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
            Báo cáo tuyển dụng
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
                <TableCell>Tên tin tuyển dụng</TableCell>
                <TableCell>Ngày đăng</TableCell>
                <TableCell>Ngày hết hạn</TableCell>
                <TableCell>Lượt xem</TableCell>
                {/* <TableCell>Đã ứng tuyển</TableCell> */}
                <TableCell>Trạng thái</TableCell>
                <TableCell>Xem danh sách ứng Viên</TableCell>
              </TableHead>
              {jobsFetch &&
                jobsFetch.data &&
                jobsFetch.data.jobsPage &&
                jobsFetch.data.jobsPage.map((item) => {
                  console.log(item?._id);

                  return (
                    <TableRow key={item._id}>
                      <TableCell
                        onClick={() => {
                          navigate({
                            pathname: `/jobdetail/${item?._id}`,
                          });
                        }}
                      >
                        {item?.title}
                      </TableCell>
                      <TableCell>{item?.createdAt}</TableCell>
                      <TableCell>{item?.endDate}</TableCell>
                      <TableCell>{item?.viewCount} lượt xem</TableCell>
                      {/* <TableCell>
                        <Button>{item.contactCnt}</Button>
                      </TableCell> */}
                      <TableCell>
                        <Button variant="text" color="success">
                          Đã đăng
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
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
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{ mr: 1, height: 30, width: 100 }}
                            //onClick={() => hdlSuaBaiDang(item._id)}
                          >
                            Sửa
                          </Button>
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
