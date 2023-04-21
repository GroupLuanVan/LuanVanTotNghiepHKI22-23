import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Image from "mui-image";
import AccountMenu from "../Menu/AccountMenu";
import { selectIsLoggedIn } from "../../store/userSlice";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { styled, alpha, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderHR = () => {
  const theme = createTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(0);
  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    switch (location.pathname) {
      case "/HR/":
        setActiveItem(0);
        break;
      case "/HR/editcompany":
        setActiveItem(1);
        break;
      case "/HR/charts":
        setActiveItem(2);
        break;
      default:
        break;
    }
  });

  const user = useSelector((state) => state.user);

  console.log(user);
  return (
    <AppBar
      sx={{
        background: "#5490cc",
        color: "black",
        height: "70px",
      }}
      position="fixed"
    >
      <Toolbar sx={{ minHeight: "80px", alignItems: "center" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 5 }}
        ></IconButton>
        <Typography
          onClick={() => {
            navigate("/");
          }}
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          SmartJobBoard
        </Typography>
        <Typography
          onClick={() => {
            navigateTo("./company");
          }}
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Cập Nhật Công Ty
        </Typography>
        <Typography
          onClick={() => {
            navigateTo("./charts");
          }}
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Báo Cáo Tuyển Dụng
        </Typography>
        <Typography
          onClick={() => {
            navigate("./contacts");
          }}
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Quản Lý Ứng Tuyển
        </Typography>
        <>
          {!user.isLogin ? (
            <>
              <Button
                onClick={() => {
                  navigate("/Login");
                }}
                color="inherit"
                variant="contained"
                sx={{
                  fontWeight: "normal",
                  mr: 2,
                }}
              >
                Đăng nhập
              </Button>
              <Button
                onClick={() => {
                  navigate("/Rtype");
                }}
                color="warning"
                variant="contained"
                sx={{ ml: 2 }}
              >
                Đăng ký
              </Button>
            </>
          ) : (
            <AccountMenu user={user.user} />
          )}
        </>{" "}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderHR;
