import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogout } from "../../store/userSlice";

import { styled } from "@mui/material/styles";
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
  const user = useSelector((state) => state.user.user);
  const role = useSelector((state) => state.user.role);
  const dispatch = useDispatch();
  const logOut = function () {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("idcompany");
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
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Arial, sans-serif",
    //backgroundColor: "#d5d5d5",
    color: "#000",
    width: "220px",
    height: "38px",
    padding: "8px",
    borderRadius: "8px",
    border: "2px solid #ccc",
  }));

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "90%",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleClick}
          sx={{
            display: "block",
            position: "absolute",
            left: 0,
            zIndex: 1,
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 35, height: 35, fontSize: 20 }}>
            {user?.split("")?.[0].toUpperCase()}
          </Avatar>
        </IconButton>
        <StyledTypography
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            paddingLeft: "50px",
            mr: 2,
            mr: -5,
            zIndex: 0,
          }}
          variant="h6"
        >
          {user}
        </StyledTypography>
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
            width: 350,
            height: 320,
            lineHeight: "100rem",
            backgroundColor: "#fff",

            "& .MuiAvatar-root": {
              width: 42,
              height: 42,
              ml: 0,
              mr: 1,
              backgroundColor: "#fff",
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
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {role === "candidate" && (
          <>
            <MenuItem sx={{ fontSize: "1.5rem" }}>
              <Avatar sx={{ color: "#5490CC", fontSize: "35px" }} /> {user}
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "1.5rem" }}
              onClick={() => navigateTo("/MyProfile")}
            >
              <ListItemIcon>
                <NoteAltIcon
                  sx={{ color: "#5490CC", fontSize: "35px", mr: 2 }}
                />
              </ListItemIcon>
              Hồ sơ của bạn
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "1.5rem" }}
              onClick={() => navigateTo(`/MyCV`)}
            >
              <ListItemIcon>
                <ArticleIcon
                  sx={{ color: "#5490CC", fontSize: "35px", mr: 2 }}
                />
              </ListItemIcon>
              CV của bạn
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "1.5rem" }}
              onClick={() => navigateTo("/appliedjobs")}
            >
              <ListItemIcon>
                <WorkIcon sx={{ color: "#5490CC", fontSize: "35px", mr: 2 }} />
              </ListItemIcon>
              Công việc đã ứng tuyển
            </MenuItem>
          </>
        )}
        {role === "recruiter" && (
          <>
            <MenuItem>
              <Avatar /> {user}
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "1.5rem" }}
              onClick={() => navigateTo("/HR/company")}
            >
              <ListItemIcon>
                <NoteAltIcon
                  sx={{ color: "#5490CC", fontSize: "35px", mr: 2 }}
                />
              </ListItemIcon>
              Cập nhật công ty
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "1.5rem" }}
              onClick={() => navigateTo("/HR")}
            >
              <ListItemIcon>
                <NoteAltIcon
                  sx={{ color: "#5490CC", fontSize: "35px", mr: 2 }}
                />
              </ListItemIcon>
              Đăng bài
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "1.5rem" }}
              onClick={() => navigateTo(`./charts`)}
            >
              <ListItemIcon>
                <ArticleIcon
                  sx={{ color: "#5490CC", fontSize: "35px", mr: 2 }}
                />
              </ListItemIcon>
              Công việc đã đăng
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "1.5rem" }}
              onClick={() => navigateTo("./SearchCandi")}
            >
              <ListItemIcon>
                <WorkIcon sx={{ color: "#5490CC", fontSize: "35px", mr: 2 }} />
              </ListItemIcon>
              Quản Lý Ứng Tuyển
            </MenuItem>
          </>
        )}

        <Divider />
        <MenuItem sx={{ fontSize: "1.5rem", color: "red" }} onClick={logOut}>
          <ListItemIcon>
            <Logout
              sx={{ color: "#5490CC", fontSize: "35px", mr: 2, ml: 0.5 }}
            />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

/* {role === "admin" && (
          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Đăng xuất
          </MenuItem>
        )} */
