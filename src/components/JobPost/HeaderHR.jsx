import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";

const HeaderHR = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  console.log(user);
  return (
    <AppBar
      sx={{
        background: "#00b2a3",
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
            navigate("/joblist");
          }}
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Cập Nhật Công Ty
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Báo Cáo Tuyển Dụng
        </Typography>
        <Typography
          onClick={() => {
            navigate("/CreateCV");
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
