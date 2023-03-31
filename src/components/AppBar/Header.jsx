import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Image from "mui-image";
import AccountMenu from "../Menu/AccountMenu";

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

  return (
    <AppBar
      sx={{
        background: "#FFF",
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
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Jobs
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Companies
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          Post a Job
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
          Resume
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: 5,
          }}
        >
          SearchPricing
        </Typography>

        {/* <>
          {!user.isLogin && (
            <>
              <Button
                onClick={() => {
                  navigate("/Dangnhap");
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
          )}
          {user.isLogin && <AccountMenu user={user.user} />}
        </> */}

        <Button
          onClick={() => {
            navigate("/Dangnhap");
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
        <Avatar alt="User" src="/assets/images/avatar.jpg" sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
