import {
  Container,
  Box,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Typography,
  createTheme,
  Grid,
  CircularProgress,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "mui-image";
import Image1 from "../../asset/13095.jpg";
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import PaidIcon from "@mui/icons-material/Paid";
import { alpha } from "@mui/material/styles";
import PeopleIcon from "@mui/icons-material/People";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WcIcon from "@mui/icons-material/Wc";
import StarIcon from "@mui/icons-material/Star";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { RichTextDisplay } from "../RichText";
import { useLocation } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import EditIcon from "@mui/icons-material/Edit";
import RecommentJobs from "./RecommentJobs";
import { useEffect } from "react";
import SimilarJob from "./SimilarJob";
import axios from "axios";
import { toast } from "react-toastify";

import { setidApplyJob } from "../../store/userSlice";
import Loading from "../Loading";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function JobDetail({ user }) {
  const idApply = useSelector((state) => state.user.idApplyJob);
  //const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  //const [isApplied, setIsApplied] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const role = useSelector((state) => state.user.token);
  const token = localStorage.getItem("token");

  let salaryChip = "";
  if (data.salaryMin == 0 && data.salaryMax == 0) salaryChip = "Thỏa thuận";
  if (data.salaryMin == data.salaryMax && data.salaryMin > 0)
    salaryChip = `${data.salaryMin / 1000000} Triẹu`;
  if (
    data.salaryMin > 0 &&
    data.salaryMax < 999999999 &&
    data.salaryMin < data.salaryMax
  ) {
    salaryChip = `${data.salaryMin / 1000000} Triệu  -  ${
      data.salaryMax / 1000000
    } Triệu`;
  }
  if (data.salaryMin == 0 && data.salaryMax > 0) {
    salaryChip = `Đến ${data.salaryMax / 1000000} Triệu`;
  }
  if (data.salaryMax == 999999999 && data.salaryMin > 0) {
    salaryChip = `Từ ${data.salaryMin / 1000000} Triệu`;
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (user.isLogin) {
          const res = await axios.get(
            `http://localhost:5000/api/jobpost/detail/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setData(res.data);
          console.log(res.data);
        } else {
          const res = await axios.get(
            `http://localhost:5000/api/jobpost/${id}`
          );
          setData(res.data);
          //console.log(res.data);
        }
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [id, user.isLogin]);

  const [isApplied, setIsApplied] = useState(
    localStorage.getItem("isApplied") === "true" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("isApplied", isApplied);
  }, [isApplied]);

  const theme = createTheme();

  const applyJob = async () => {
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
        `http://localhost:5000/api/candidate/applyjob/${id}`,
        contact,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);

      if (res.data.status && res.data.status !== 200) {
        toast.warning("Ứng tuyển thất bại");
      } else {
        setIsApplied(true);
        toast.success("Ứng tuyển thành công");
      }
    }
  };

  // const cancelApplyJob = async () => {
  //   let sendApply = 0;
  //   let userAgrees = false;

  //   const message = `Bạn có muốn hủy ứng tuyển công việc này không?`;
  //   if (window.confirm(message)) {
  //     userAgrees = true;
  //   }

  //   if (userAgrees) {
  //     sendApply = 1;
  //     const contact = {
  //       jobId: id,
  //     };

  //     const res = await axios.post(
  //       `http://localhost:5000/api/candidate/cancelapplyjob/${id}`,
  //       contact,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (res.data.status && res.data.status !== 200) {
  //       console.log(res);
  //       toast.warning("Hủy Ứng tuyển thất bại");
  //     } else {
  //       const newIdApply = idApply.filter((item) => item !== id);
  //       const action = setidApplyJob(newIdApply);
  //       dispatch(action);
  //       setIsApplied(false);
  //       toast.success("Hủy ứng tuyển thành công");
  //     }
  //   }
  // };

  console.log(data);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container
          disableGutters
          maxWidth
          sx={{
            background: "#f1f2f6",
            py: 4,
          }}
        >
          <Container
            maxWidth
            disableGutters
            sx={{
              background: "#f1f2f6",
              mt: 15,
            }}
          >
            {/* Title */}
            <Stack
              direction="row"
              spacing={12}
              sx={{
                background: "white",
                py: 3,
                mb: 2,
                width: "70%",
                mx: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image
                  src={data?.companyId?.linkToLogo}
                  sx={{
                    borderRadius: "100%",
                    border: "1px solid gray",
                  }}
                  width="200px"
                  height="200px"
                  duration={0}
                  fit="scale-down"
                ></Image>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  color="initial"
                  fontWeight={600}
                  sx={{
                    // color: theme.palette.success.light,
                    color: "#105aa3",
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  variant="h5"
                  color="initial"
                >
                  Công Ty: {data?.companyId?.nameCompany}
                </Typography>
              </Box>
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ color: "rgba(0,0,0,0.7)" }}
                >
                  <LocalPhoneIcon fontSize="small" />
                  <Typography variant="body1">
                    Số Điện Thoại {data?.companyId?.phone}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ color: "rgba(0,0,0,0.7)" }}
                >
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="body1">
                    Ngày tạo {data?.createdAt}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ color: "rgba(0,0,0,0.7)" }}
                >
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="body1">
                    Hạn nộp hồ sơ:{" "}
                    {new Date(data?.endDate).toLocaleDateString()}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                {user.role === "candidate" &&
                  (!isApplied ? (
                    <Button
                      sx={{
                        backgroundColor: "#7cb1e6",
                        color: "black",
                        border: "1px solid #000000",
                        fontSize: "15px",
                      }}
                      onClick={() => applyJob()}
                      startIcon={<SendIcon />}
                    >
                      Ứng tuyển ngay
                    </Button>
                  ) : (
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "20px",
                      }}
                      // onClick={() => cancelApplyJob()}
                      startIcon={<CheckCircleIcon />}
                      variant="contained"
                      color="primary"
                    >
                      Đã Ứng Tuyển
                    </Typography>
                  ))}
                {user.role === "recruiter" && (
                  <Button
                    startIcon={<EditIcon />}
                    variant="contained"
                    color="success"
                  >
                    Chỉnh sửa tin tuyển dụng
                  </Button>
                )}
              </Box>
            </Stack>
            <Grid
              container
              sx={{
                background: "white",
                my: 2,
                mx: "auto",
                width: "70%",
                pb: 3,
              }}
            >
              <Grid xs={12} sx={{ my: 2 }}>
                <Typography
                  sx={{
                    px: 2,
                    ml: 3,
                    borderLeft: "7px solid #7cb1e6",
                  }}
                  variant="h5"
                  fontWeight={600}
                >
                  Chi tiết tuyển dụng
                </Typography>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  py: 2,
                  //background: alpha(theme.palette.success.main, 0.08),
                  background: "#c7e8fc",
                  borderRadius: "10px",
                }}
              >
                <Grid item sx={12}>
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      ml: 3,
                    }}
                  >
                    Thông tin chung
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  container
                  sx={{
                    mt: 2,
                    ml: 3,
                    rowGap: 3,
                    columnGap: 2,
                  }}
                  item
                >
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <PaidIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Mức lương
                      </Typography>
                      <br></br>
                      <Typography variant="p">{salaryChip}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <PeopleIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Số lượng tuyển
                      </Typography>
                      <br></br>
                      <Typography variant="p">{data.amount}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <MilitaryTechIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Vị Trí
                      </Typography>
                      <br></br>
                      <Typography variant="p">
                        {data?.positionId?.title}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <WorkIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Hình thức làm việc
                      </Typography>
                      <br></br>
                      <Typography variant="p">{data?.workType}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <WcIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Giới tính
                      </Typography>
                      <br></br>
                      <Typography variant="p">{data.gender}</Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    item
                  >
                    <StarIcon fontSize="small" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="p" fontWeight={600}>
                        Kinh nghiệm
                      </Typography>
                      <br></br>
                      <Typography variant="p">{data.workExp}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  //background: alpha(theme.palette.success.main, 0.08),
                  background: "#c7e8fc",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Địa điểm làm việc
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    ml: 3,
                    mt: 2,
                  }}
                >
                  {data?.fullAddress}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  //background: alpha(theme.palette.success.main, 0.08),
                  background: "#c7e8fc",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Mô tả công việc
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <RichTextDisplay data={JSON.parse(data.description)} />
                  {/* {data.description} */}
                </Box>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  //background: alpha(theme.palette.success.main, 0.08),
                  background: "#c7e8fc",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Yêu cầu ứng viên
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <RichTextDisplay data={JSON.parse(data.required)} />
                  {/* {data.required} */}
                </Box>
              </Grid>
              <Grid
                xs={12}
                container
                item
                sx={{
                  mx: 3,
                  mt: 2,
                  py: 2,
                  //background: alpha(theme.palette.success.main, 0.08),
                  background: "#c7e8fc",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    ml: 3,
                  }}
                >
                  Quyền lợi
                </Typography>
                <Box
                  sx={{
                    ml: 3,
                    py: 1,
                  }}
                >
                  <RichTextDisplay data={JSON.parse(data.benefit)} />
                  {/* {data.benefit} */}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  mt: 3,
                }}
              >
                <SimilarJob jobPostId={data._id} />
              </Grid>
            </Grid>
          </Container>
        </Container>
      )}
    </>
  );
}
