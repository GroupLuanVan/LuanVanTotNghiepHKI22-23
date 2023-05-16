import {
  Button,
  createTheme,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import WorkIcon from "@mui/icons-material/Work";
import { setidApplyJob } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
export default function AppliedJobs({ user }) {
  const idApply = useSelector((state) => state.user.idApplyJob);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [result, setResult] = useState([]);

  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isApplied, setIsApplied] = useState();
  const [loading, setLoading] = useState(true);
  const theme = createTheme();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact/applylist/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const applyListData = response.data[1].data;
        const messageData = response.data[0];

        setResult(applyListData);
        setLoading(false);

        // kiểm tra nếu có thông báo từ server thì lưu vào state và hiển thị
        if (messageData.message) {
          setMessage(messageData.message);
          setShowMessage(true);
        }
        // kiểm tra nếu mảng data thứ nhất và mảng thứ hai đều có giá trị thì ghép mảng và lưu vào state
        if (response.data[0].data.length > 0 && applyListData.length > 0) {
          const newData = response.data[0].data.concat(applyListData);
          setResult(newData);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleCancelMessage = () => {
    // hủy thông báo và ẩn nút
    setMessage(null);
    setShowMessage(false);
  };
  console.log(result);

  // const [isApplied, setIsApplied] = useState(
  //   localStorage.getItem("isApplied") === "true" ? true : false
  // );

  // useEffect(() => {
  //   localStorage.setItem("isApplied", isApplied);
  // }, [isApplied]);

  // const cancelApplyJob = async (id, index) => {
  //   const message = `Bạn có muốn hủy ứng tuyển công việc này không?`;
  //   if (!window.confirm(message)) {
  //     return;
  //   }

  //   const contact = { jobId: id };
  //   try {
  //     const res = await axios.post(
  //       `http://localhost:5000/api/candidate/cancelapplyjob/${id}`,
  //       contact,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     if (res.data.status && res.data.status !== 200) {
  //       console.log(res);
  //       toast.warning("Hủy Ứng tuyển thất bại");
  //     } else {
  //       setIsApplied(false);
  //       localStorage.setItem("isApplied", false); // cập nhật lại giá trị trong localStorage
  //       result.splice(index, 1);
  //       let tmp = result;
  //       setResult(tmp);
  //       toast.success("Hủy ứng tuyển thành công");
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.warning("Hủy Ứng tuyển thất bại");
  //   }
  // };

  const cancelApplyJob = async (id, index) => {
    let sendApply = 0;
    let userAgrees = false;

    const message = `Bạn có muốn ứng tuyển công việc này không?`;
    if (window.confirm(message)) {
      userAgrees = true;
    }

    if (userAgrees) {
      sendApply = 1;
      const contact = {
        jobId: id,
      };
      console.log(id);

      const res = await axios.post(
        `http://localhost:5000/api/candidate/cancelapplyjob/${id}`,
        contact,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res.data);

      if (res.data.status && res.data.status !== 200) {
        toast.warning("Hủy Ứng tuyển thất bại");
      } else {
        const action = setidApplyJob(res.data.data.applyJobs);
        dispatch(action);
        result.splice(index, 1);
        let tmp = result;
        setResult(tmp);

        toast.success("Hủy ứng tuyển thành công");
      }
    }
  };

  console.log(message);

  return (
    <Grid
      container
      sx={{
        background: "#f1f2f7",
        justifyContent: "center",
        p: 8,
        mt: 10,
      }}
    >
      <Grid
        xs={10}
        item
        container
        sx={{
          mb: 3,
          alignItems: "center",
          gap: 2,
        }}
      >
        <Grid item>
          <WorkIcon fontSize="large" />
        </Grid>
        <Grid item>
          <Typography fontWeight={600} variant="h4">
            Công việc bạn đã ứng tuyển
          </Typography>
          <Divider />
        </Grid>
      </Grid>

      <Grid item xs={10}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ background: theme.palette.primary.dark }}>
              <TableRow sx={{ fontWeight: 800 }}>
                <TableCell sx={{ minWidth: 200 }}>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "white" }}
                  >
                    Tên công việc
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: 250 }}>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "white" }}
                  >
                    Tên công ty
                  </Typography>
                </TableCell>
                <TableCell sx={{ minWidth: 150 }}>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "white" }}
                  >
                    Ngày hết hạn
                  </Typography>
                </TableCell>
                <TableCell sx={{ minWidth: 250 }}>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "white" }}
                  >
                    Địa chỉ
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: 120 }}>
                  {" "}
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    fontSize={20}
                    sx={{ color: "white" }}
                  >
                    Tình Trạng
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {result &&
                result.map((value, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 18,
                          }}
                        >
                          {value?.jobpostId?.title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 18,
                          }}
                        >
                          {value?.companyId?.nameCompany}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 18,
                          }}
                        >
                          {new Date(
                            value?.jobpostId?.endDate
                          ).toLocaleDateString()}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 18,
                          }}
                        >
                          {value?.jobpostId?.fullAddress}
                        </Typography>
                      </TableCell>
                      {value.process === 1 ? (
                        <TableCell>
                          <Typography
                            style={{
                              fontWeight: "bold",
                              color: "green",
                              fontSize: 18,
                            }}
                          >
                            Xem xét
                          </Typography>
                        </TableCell>
                      ) : value.process === 2 ? (
                        <TableCell>
                          <Typography
                            style={{
                              fontWeight: "bold",
                              color: "blue",
                              fontSize: 18,
                            }}
                          >
                            Đồng ý
                          </Typography>
                        </TableCell>
                      ) : value.process === 3 ? (
                        <TableCell>
                          <Typography
                            style={{
                              fontWeight: "bold",
                              color: "red",
                              fontSize: 18,
                            }}
                          >
                            Từ chối
                          </Typography>
                        </TableCell>
                      ) : null}
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => cancelApplyJob(value?._id, index)}
                        >
                          Hủy ứng tuyển
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
