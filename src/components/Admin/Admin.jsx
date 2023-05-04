import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  OutlinedInput,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import TaskIcon from "@mui/icons-material/Task";
import BusinessIcon from "@mui/icons-material/Business";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SendIcon from "@mui/icons-material/Send";
import { FaUserTie } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsFilePersonFill } from "react-icons/bs";
import { TbDashboard } from "react-icons/tb";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Editor, EditorState, convertToRaw } from "draft-js";
import { useSelector } from "react-redux";
import { styled, alpha, createTheme } from "@mui/material/styles";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import "draft-js/dist/Draft.css";
// import MyCard from "./MyCard";
import { useEffect, useState } from "react";
import JobPosting from "./JobPostingRec";
import ManageEmploy from "./ManageEmployRec";
import ManageSeeker from "./ManageSeekerRec";
import ManageCVRec from "./ManageCVRec";
import ManageUser from "./ManageUser";
import ManageJobCate from "./ManageJobCate";
import AddJobCategoryDialog from "./AddJobCate";
import axios from "axios";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.success.light,
    "& .MuiListItemIcon-root": {
      color: theme.palette.success.light,
    },
  },
}));

export function SideBar({}) {
  const [openAddJobCategoryDialog, setOpenAddJobCategoryDialog] =
    useState(false);

  const handleOpenAddJobCategoryDialog = () => {
    setOpenAddJobCategoryDialog(true);
  };

  const handleCloseAddJobCategoryDialog = () => {
    setOpenAddJobCategoryDialog(false);
  };
  const theme = createTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(0);
  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    switch (location.pathname) {
      case "/admin/":
        setActiveItem(0);
        break;
      case "/admin/User":
        setActiveItem(1);
        break;
      case "/admin/Employer":
        setActiveItem(2);
        break;
      case "/admin/Seeker":
        setActiveItem(3);
        break;
      case "/admin/JobsPosting":
        setActiveItem(4);
        break;
      case "/admin/CV":
        setActiveItem(5);
        break;
      case "/admin/jobCate":
        setActiveItem(6);
        break;
      case "/admin/statistical":
        setActiveItem(7);
        break;
      default:
        break;
    }
  });

  return (
    <Grid
      sx={{
        height: "180vh",
      }}
      item
      container
    >
      <Box
        sx={{
          background: "#fff",
          mt: 15,
        }}
      >
        <MenuList>
          <CustomMenuItem
            sx={{
              color: activeItem === 0 ? theme.palette.success.main : "",
            }}
            onClick={() => {
              navigateTo("./");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <TbDashboard
                fontSize="small"
                style={{
                  color: activeItem === 0 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Typography variant="h5">Dashboard</Typography>
            </ListItemText>
          </CustomMenuItem>
          <CustomMenuItem
            sx={{
              color: activeItem === 1 ? theme.palette.success.main : "",
            }}
            onClick={() => {
              navigateTo("./User");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <FaUserAlt
                fontSize="small"
                style={{
                  color: activeItem === 1 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Typography variant="h6">Quản Lý Người Dùng</Typography>
            </ListItemText>
          </CustomMenuItem>
          <CustomMenuItem
            style={{
              color: activeItem === 2 ? theme.palette.success.main : "",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              navigateTo("./Employer");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <FaUserTie
                fontSize="small"
                style={{
                  color: activeItem === 2 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Quản Lý Nhà Tuyển Dụng</Typography>
            </ListItemText>
          </CustomMenuItem>
          <CustomMenuItem
            sx={{
              color: activeItem === 3 ? theme.palette.success.main : "",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              navigateTo("./Seeker");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <SendIcon
                fontSize="small"
                sx={{
                  color: activeItem === 3 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Quản Lý Số Lượng Ứng Tuyển</Typography>
            </ListItemText>
          </CustomMenuItem>
          <CustomMenuItem
            sx={{
              color: activeItem === 4 ? theme.palette.success.main : "",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              navigateTo("./JobsPosting");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <FaBriefcase
                fontSize="small"
                style={{
                  color: activeItem === 4 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Quản Lý Bài Đăng Tuyển Dụng</Typography>
            </ListItemText>
          </CustomMenuItem>
          <CustomMenuItem
            style={{
              color: activeItem === 5 ? theme.palette.success.main : "",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              navigateTo("./CV");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <ImProfile
                fontSize="small"
                style={{
                  color: activeItem === 5 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Quản Lý CV Ứng Tuyển</Typography>
            </ListItemText>
          </CustomMenuItem>
          <CustomMenuItem
            style={{
              color: activeItem === 6 ? theme.palette.success.main : "",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              navigateTo("./jobCate");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <PlusOneIcon
                fontSize="small"
                style={{
                  color: activeItem === 6 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Thêm Loại Công Việc</Typography>
            </ListItemText>
          </CustomMenuItem>

          <CustomMenuItem
            style={{
              color: activeItem === 7 ? theme.palette.success.main : "",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              navigateTo("./statistical");
            }}
          >
            <ListItemIcon sx={{ py: 2 }}>
              <BarChartIcon
                fontSize="small"
                style={{
                  color: activeItem === 7 ? theme.palette.success.main : "",
                  fontSize: "1.5rem",
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Thống Kê</Typography>
            </ListItemText>
          </CustomMenuItem>
        </MenuList>
      </Box>
    </Grid>
  );
}

function DashboardCard({ title, description, icon }) {
  return (
    <Card>
      <CardHeader
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        title={
          <Typography variant="h5" sx={{ fontSize: "3rem" }}>
            {title}
          </Typography>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ display: "inline" }}
        >
          {description}
        </Typography>
        <IconButton sx={{ marginLeft: "auto", marginRight: 0 }}>
          {icon}
        </IconButton>
      </CardContent>
      {/* <CardActions>
        <Button startIcon={<Edit />} size="small">
          Edit
        </Button>
        <Button startIcon={<Delete />} size="small">
          Delete
        </Button>
      </CardActions> */}
    </Card>
  );
}

function Admin() {
  const token = useSelector((state) => state.user.token);
  const [users, setUsers] = useState([]);
  const [company, setCompanies] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [contact, setContact] = useState([]);
  const [Cv, setCV] = useState([]);
  const [adminJob, setAdminJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/company", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCompanies(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/contact/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/jobpost/all",
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/candidate/all",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );
  //       setCandidate(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [token]);

  return (
    <>
      <Grid sx={{ width: "100%", height: "80vh", mt: 20 }} container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            p: 2,
            rowGap: 1,
            columnGap: 2,

            mb: 2,
          }}
        >
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title={Cv?.length}
              description="Số Lượng CV "
              icon={<ImProfile style={{ color: "red", fontSize: "5rem" }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title={company?.length}
              description="Số Lượng Nhà Tuyển Dụng"
              icon={
                <FaUserTie style={{ color: "#ad86df", fontSize: "5rem" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title={users?.length}
              description="Số Lượng User"
              icon={
                <FaUserAlt style={{ color: "#3f51b5", fontSize: "5rem" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title={contact?.length}
              description="Số Lượng Ứng Tuyển"
              icon={<SendIcon sx={{ fontSize: "5rem" }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title={adminJob?.jobsPage?.length}
              description="Số Lượng Bài Đăng Tuyển Dụng"
              icon={
                <FaBriefcase style={{ color: "#ad86df", fontSize: "5rem" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title={candidate?.length}
              description="Số lượng ứng viên"
              icon={
                <BsFilePersonFill
                  style={{ color: "#19a0fb", fontSize: "5rem" }}
                />
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default function Dashboard() {
  return (
    <>
      <Grid container sx={{ background: "#f1f2f6" }}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          <Routes>
            <Route path="/" element={<Admin />}></Route>
            <Route path="/User" element={<ManageUser />}></Route>
            <Route path="/JobsPosting" element={<JobPosting />}></Route>
            <Route path="/Employer" element={<ManageEmploy />}></Route>
            <Route path="/Seeker" element={<ManageSeeker />}></Route>
            <Route path="/CV" element={<ManageCVRec />}></Route>
            <Route path="/jobCate" element={<ManageJobCate />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}
