import * as React from "react";
import { useNavigate } from "react-router-dom";
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
export const HeaderCV = () => {
  const navigate = useNavigate();
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
        <Box></Box>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          SmartJobBoard
        </Typography>
        <Box></Box>
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
        <Button
          onClick={() => {
            navigate("/Dangnhap");
          }}
          color="inherit"
          variant="contained"
          sx={{
            //textTransform: "none",
            //fontSize: "1.20rem",
            fontWeight: "normal",
            mr: 2,
            //px: 3,
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
