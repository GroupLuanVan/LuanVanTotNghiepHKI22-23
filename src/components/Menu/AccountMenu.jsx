import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogout } from "../../store/userSlice";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ArticleIcon from "@mui/icons-material/Article";
import WorkIcon from "@mui/icons-material/Work";
import Logout from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { useNavigate } from "react-router-dom";
export default function AccountMenu() {
  const navigate = useNavigate();
  function navigateTo(location) {
    navigate(location);
  }
  const user = useSelector((state) => state.user.data.user.username);
  const role = useSelector((state) => state.user.data.user.role);
  // console.log(user);
  const dispatch = useDispatch();
  const logOut = function () {
    localStorage.removeItem("token");
    dispatch(setUserLogout());
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const successColor = {
    color: "#66bb6a",
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("login nha", role);
  console.log("binh", user);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton size="small" sx={{ ml: 4 }}>
          <NotificationsIcon
            sx={{ width: 32, height: 32, color: "white" }}
          ></NotificationsIcon>
        </IconButton>
        <IconButton size="small" sx={{ ml: 4 }}>
          <ChatBubbleIcon
            sx={{ width: 32, height: 32, color: "white" }}
          ></ChatBubbleIcon>
        </IconButton>
        <Tooltip title="Thông tin tài khoản">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 4 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {user?.split("")?.[0].toUpperCase()}
            </Avatar>

            {/* user.username[0] hiển thị chữ cái đầu tiên của tên Đăng nhập */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar fontSize="small" /> {user}
        </MenuItem>
        {role === "candidate" && (
          <>
            <MenuItem onClick={() => navigateTo("/MyProfile")}>
              <ListItemIcon>
                <NoteAltIcon fontSize="small" />
              </ListItemIcon>
              Hồ sơ của bạn
            </MenuItem>
            <MenuItem onClick={() => navigateTo(`/MyCV`)}>
              <ListItemIcon>
                <ArticleIcon fontSize="small" />
              </ListItemIcon>
              CV của bạn
            </MenuItem>
            <MenuItem onClick={() => navigateTo("/appliedjobs")}>
              <ListItemIcon>
                <WorkIcon fontSize="small" />
              </ListItemIcon>
              Công việc đã ứng tuyển
            </MenuItem>
            <MenuItem onClick={() => navigateTo("/hrlogin")}>
              <ListItemIcon>
                <WorkIcon fontSize="small" />
              </ListItemIcon>
              ViecLamNhanh for Business
            </MenuItem>
          </>
        )}
        {role === "recruiter" && (
          <>
            <MenuItem onClick={() => navigateTo("/myprofile")}>
              <ListItemIcon>
                <NoteAltIcon fontSize="small" />
              </ListItemIcon>
              Cập nhật công ty
            </MenuItem>
            <MenuItem onClick={() => navigateTo(`/cv/${user?._id}`)}>
              <ListItemIcon>
                <ArticleIcon fontSize="small" />
              </ListItemIcon>
              Báo Cáo Tuyển dụng
            </MenuItem>
            <MenuItem onClick={() => navigateTo("/appliedjobs")}>
              <ListItemIcon>
                <WorkIcon fontSize="small" />
              </ListItemIcon>
              Quản Lý Ứng Tuyển
            </MenuItem>
            <MenuItem onClick={() => navigateTo("/hrlogin")}>
              <ListItemIcon>
                <WorkIcon fontSize="small" />
              </ListItemIcon>
              ViecLamNhanh for Business
            </MenuItem>
          </>
        )}

        {/* <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem> */}
        <Divider />
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
