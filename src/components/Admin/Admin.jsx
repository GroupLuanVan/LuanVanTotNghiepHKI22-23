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
import { TbDashboard } from "react-icons/tb";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Editor, EditorState, convertToRaw } from "draft-js";
import { useSelector } from "react-redux";
import { styled, alpha, createTheme } from "@mui/material/styles";
import "draft-js/dist/Draft.css";
// import MyCard from "./MyCard";
import { useEffect, useState } from "react";
import JobPosting from "./JobPostingRec";
import ManageEmploy from "./ManageEmployRec";
import ManageSeeker from "./ManageSeekerRec";
import ManageCVRec from "./ManageCVRec";
import ManageUser from "./ManageUser";
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
      case "/admin/statistical":
        setActiveItem(6);
        break;
      default:
        break;
    }
  });
  return (
    <Grid
      sx={{
        height: "140vh",
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
              color: activeItem === 1 ? theme.palette.success.main : "",
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
                  color: activeItem === 1 ? theme.palette.success.main : "",
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
              color: activeItem === 1 ? theme.palette.success.main : "",
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
                  color: activeItem === 1 ? theme.palette.success.main : "",
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
              color: activeItem === 2 ? theme.palette.success.main : "",
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
                  color: activeItem === 2 ? theme.palette.success.main : "",
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
              color: activeItem == 3 ? theme.palette.success.main : "",
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
                  color: activeItem == 3 ? theme.palette.success.main : "",
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
              color: activeItem == 3 ? theme.palette.success.main : "",
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
                  color: activeItem == 3 ? theme.palette.success.main : "",
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
      <CardActions>
        <Button startIcon={<Edit />} size="small">
          Edit
        </Button>
        <Button startIcon={<Delete />} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

function Admin() {
  return (
    <>
      <Grid sx={{ width: "100%", height: "80vh", mt: 15 }} container>
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <EditIcon />
          <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
            Dashboard
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
            p: 2,
            rowGap: 1,
            columnGap: 2,
            background: "#f7f7f7",
            mb: 2,
          }}
        >
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title="10"
              description="Số Lượng CV "
              icon={<ImProfile style={{ color: "red", fontSize: "5rem" }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title="10"
              description="Số Lượng Nhà Tuyển Dụng"
              icon={
                <FaUserTie style={{ color: "#ad86df", fontSize: "5rem" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title="10"
              description="Số Lượng User"
              icon={
                <FaUserAlt style={{ color: "#3f51b5", fontSize: "5rem" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title="8"
              description="Số Lượng Ứng Tuyển"
              icon={<SendIcon sx={{ fontSize: "5rem" }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title="8"
              description="Số Lượng Bài Đăng Tuyển Dụng"
              icon={
                <FaBriefcase style={{ color: "#ad86df", fontSize: "5rem" }} />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <DashboardCard
              title="8"
              description="Job Alerts Created"
              icon={
                <FaEnvelope style={{ color: "#19a0fb", fontSize: "5rem" }} />
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
      <Grid container sx={{ background: "#f1f2f6", height: "140vh" }}>
        <Grid item xs={2.5}>
          <SideBar />
        </Grid>
        <Grid item xs={9.5}>
          <Routes>
            <Route path="/" element={<Admin />}></Route>
            <Route path="/User" element={<ManageUser />}></Route>
            <Route path="/JobsPosting" element={<JobPosting />}></Route>
            <Route path="/Employer" element={<ManageEmploy />}></Route>
            <Route path="/Seeker" element={<ManageSeeker />}></Route>
            <Route path="/CV" element={<ManageCVRec />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}
