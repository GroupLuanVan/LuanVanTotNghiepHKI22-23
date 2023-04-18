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

const CustomAppBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  console.log(user);
  return (
    <AppBar
      sx={{
        background: "#b8b2ab",
        color: "red",
        height: "80px",
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
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
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
          Công Việc
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Các Công Ty
        </Typography>
        <Typography
          onClick={() => {
            navigate("/updateProfile");
          }}
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Chỉnh sửa hồ sơ
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
          Tạo CV
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

export default CustomAppBar;
