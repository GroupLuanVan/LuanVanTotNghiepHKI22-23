import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Image from "mui-image";

import Logo1 from "../../asset/Logo1.png";
import Logo from "../../asset/Final_Logo.png";
import AccountMenu from "../Menu/AccountMenu";
import { selectIsLoggedIn } from "../../store/userSlice";
import App from "../../App.css";

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
  const navigateTo = function (location) {
    navigate(location);
  };
  return (
    <AppBar
      sx={{
        background: "white",
        color: "black",
        height: "120px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
      }}
      position="fixed"
    >
      <Toolbar sx={{ mt: 2, minHeight: "80px", alignItems: "center" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            marginRight: "auto",
          }}
        >
          <Image
            onClick={() => {
              navigateTo("/");
            }}
            src={Logo}
            width="210px"
            height="100px"
            fit="cover"
            duration="0"
            sx={{
              ml: "60px",
              mb: "12px",
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              onClick={() => {
                navigate("/ListJob");
              }}
              variant="h5"
              sx={{
                mr: 5,
                ml: 10,
                cursor: "pointer",
              }}
            >
              Công việc
            </Typography>
            <Typography
              onClick={() => {
                navigate("/CreateCV");
              }}
              variant="h5"
              sx={{
                mr: 5,
                cursor: "pointer",
              }}
            >
              Tạo cv
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
          {!user.isLogin ? (
            <>
              <Button
                onClick={() => {
                  navigate("/LoginType");
                }}
                color="inherit"
                variant="contained"
                sx={{
                  fontWeight: "normal",
                  mr: 2,
                  padding: "8px 16px",
                  height: "45px",
                  width: "180px",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#5490cc",
                    boxShadow: "none",
                  },
                }}
              >
                Đăng nhập
              </Button>
              <Button
                onClick={() => {
                  navigate("/Rtype");
                }}
                variant="contained"
                sx={{
                  ml: 2,
                  padding: "8px 16px",
                  height: "45px",
                  width: "180px",
                  backgroundColor: "#5490cc",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                  "&:hover": {
                    // backgroundColor: "#00695c",
                    backgroundColor: "white",
                  },
                }}
              >
                Đăng ký
              </Button>
            </>
          ) : (
            <AccountMenu user={user.user} />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
