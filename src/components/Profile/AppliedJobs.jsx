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

  const [loading, setLoading] = useState(true);
  const theme = createTheme();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/contact/applylist/", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((response) => {
  //       // setResult(response.data[1].data);
  //       setResult(response.data);
  //       setLoading(false); // set loading to false when data is loaded
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/contact/applylist/", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((response) => {
  //       setResult(response.data[1].data);
  //       setLoading(false);

  //       // kiểm tra nếu có thông báo từ server thì lưu vào state
  //       if (response.data.length > 1 && response.data[0].message) {
  //         setMessage(response.data[0].message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  //   console.log(message);
  // }, [message]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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

  const [isApplied, setIsApplied] = useState(
    localStorage.getItem("isApplied") === "true" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("isApplied", isApplied);
  }, [isApplied]);

  const cancelApplyJob = async (id, index) => {
    const message = `Bạn có muốn hủy ứng tuyển công việc này không?`;
    if (!window.confirm(message)) {
      return;
    }

    const contact = { jobId: id };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/candidate/cancelapplyjob/${id}`,
        contact,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.status && res.data.status !== 200) {
        console.log(res);
        toast.warning("Hủy Ứng tuyển thất bại");
      } else {
        setIsApplied(false);
        localStorage.setItem("isApplied", false); // cập nhật lại giá trị trong localStorage
        result.splice(index, 1);
        let tmp = result;
        setResult(tmp);
        toast.success("Hủy ứng tuyển thành công");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.warning("Hủy Ứng tuyển thất bại");
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
            <TableHead
              sx={{
                background: theme.palette.primary.dark,
              }}
            >
              <TableRow sx={{ fontWeight: 600 }}>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Tên công việc
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Tên công ty
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Ngày hết hạn
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{ color: "white" }}
                  >
                    Địa chỉ
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
                      <TableCell>{value?.jobpostId?.title}</TableCell>
                      <TableCell>{value?.companyId?.nameCompany}</TableCell>
                      <TableCell>
                        {new Date(
                          value?.jobpostId?.endDate
                        ).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{value?.jobpostId?.fullAddress}</TableCell>
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

  // return (
  //   <Grid
  //     container
  //     sx={{
  //       background: "#f1f2f7",
  //       justifyContent: "center",
  //       p: 8,
  //       mt: 10,
  //     }}
  //   >
  //     <Grid
  //       xs={10}
  //       item
  //       container
  //       sx={{
  //         mb: 3,
  //         alignItems: "center",
  //         gap: 2,
  //       }}
  //     >
  //       <Grid item>
  //         <WorkIcon fontSize="large" />
  //       </Grid>
  //       <Grid item>
  //         <Typography fontWeight={600} variant="h4">
  //           Công việc bạn đã ứng tuyển
  //         </Typography>
  //         <Divider />
  //       </Grid>
  //     </Grid>
  //     <Grid item xs={10}>
  //       {deletedJobs.length > 0 && (
  //         <Box sx={{ mb: 3 }}>
  //           {deletedJobs.length} job{deletedJobs.length > 1 ? "s" : ""} đã bị
  //           xóa.
  //         </Box>
  //       )}
  //       {result.length > 0 ? (
  //         <TableContainer component={Paper}>
  //           <Table>
  //             <TableHead
  //               sx={{
  //                 background: theme.palette.primary.dark,
  //               }}
  //             >
  //               <TableRow sx={{ fontWeight: 600 }}>
  //                 <TableCell>
  //                   <Typography
  //                     variant="body2"
  //                     fontWeight={600}
  //                     sx={{ color: "white" }}
  //                   >
  //                     Tên công việc
  //                   </Typography>
  //                 </TableCell>
  //                 <TableCell>
  //                   <Typography
  //                     variant="body2"
  //                     fontWeight={600}
  //                     sx={{ color: "white" }}
  //                   >
  //                     Tên công ty
  //                   </Typography>
  //                 </TableCell>
  //                 <TableCell>
  //                   <Typography
  //                     variant="body2"
  //                     fontWeight={600}
  //                     sx={{ color: "white" }}
  //                   >
  //                     Ngày hết hạn
  //                   </Typography>
  //                 </TableCell>
  //                 <TableCell>
  //                   <Typography
  //                     variant="body2"
  //                     fontWeight={600}
  //                     sx={{ color: "white" }}
  //                   >
  //                     Địa chỉ
  //                   </Typography>
  //                 </TableCell>
  //                 <TableCell></TableCell>
  //               </TableRow>
  //             </TableHead>
  //             <TableBody>
  //               {result.map((value, index) => {
  //                 return (
  //                   <TableRow key={index}>
  //                     <TableCell>{value?.jobpostId?.title}</TableCell>
  //                     <TableCell>{value?.companyId?.nameCompany}</TableCell>
  //                     <TableCell>
  //                       {new Date(
  //                         value?.jobpostId?.endDate
  //                       ).toLocaleDateString()}
  //                     </TableCell>
  //                     <TableCell>{value?.jobpostId?.fullAddress}</TableCell>
  //                     <TableCell>
  //                       <Button
  //                         variant="outlined"
  //                         color="error"
  //                         onClick={() =>
  //                           cancelApplyJob(value?.jobpostId?._id, index)
  //                         }
  //                       >
  //                         Hủy ứng tuyển
  //                       </Button>
  //                     </TableCell>
  //                   </TableRow>
  //                 );
  //               })}
  //             </TableBody>
  //           </Table>
  //         </TableContainer>
  //       ) : (
  //         <Box sx={{ textAlign: "center", mt: 3 }}>
  //           Bạn chưa ứng tuyển vào bất kỳ công việc nào.
  //         </Box>
  //       )}
  //     </Grid>
  //   </Grid>
  // );
}
