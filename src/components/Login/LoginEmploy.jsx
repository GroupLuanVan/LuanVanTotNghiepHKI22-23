import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLogin,
  setRole,
  setToken,
  setidCompany,
} from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Redirect,
} from "@mui/material";
import LoginSchema from "../../validate/loginValidate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const LoginEmployer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.role);
  const idcompany = useSelector((state) => state.user.idcompany);
  const [response, setResponse] = useState({
    showArlert: false,
    message: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.current.value || !password.current.value) {
      toast.error("Sai tên đăng nhập hoặc mật khẩu");
      return;
    }

    //Kiểm tra dữ liệu với schema validation
    try {
      await LoginSchema.validate({
        email: username.current.value,
        password: password.current.value,
      });

      // Nếu validation thành công, tiếp tục quá trình đăng nhập
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: username.current.value,
        password: password.current.value,
      });

      const { data } = res.data;

      localStorage.setItem("token", data.token);
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      dispatch(setUserLogin(data.user.username));
      dispatch(setRole(data.user.role));
      dispatch(setToken(data.token));
      dispatch(setidCompany(data.company._id));

      // Kiểm tra nếu role là admin, chuyển hướng đến trang admin
      if (data.user.role === "recruiter") {
        navigate("/HR");
        return;
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="85vh">
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {response.showArlert && (
            <Alert severity="error" sx={{ p: 0, mb: 4 }}>
              {response.message}
            </Alert>
          )}
          <form>
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent={"center"}
              marginTop={20}
              marginBottom={10}
              padding={3}
              borderRadius={5}
              boxShadow={"5px 10px 20px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc ",
                },
                height: "588px",
              }}
            >
              <Typography variant="h2" padding={3} textAlign="center">
                Đăng nhập nhà tuyển dụng
              </Typography>
              <TextField
                inputRef={username}
                margin="normal"
                variant="outlined"
                type={"eamil"}
                label="Email"
                sx={{ width: "500px" }}
              />
              <TextField
                inputRef={password}
                margin="normal"
                variant="outlined"
                type={"password"}
                label="password"
                sx={{ width: "500px" }}
              />
              <Button
                onClick={handleLogin}
                sx={{
                  marginTop: 3,
                  borderRadius: 3,
                  margin: "1 10px 15px",
                  height: 40,
                  width: 150,
                }}
                variant="contained"
                color="warning"
              >
                Login
              </Button>
              <br />
              <a>Quên mật khẩu</a>
              <div className="form-group login-help text-center">
                <a>Đăng ký tìm việc</a>|<a>Đăng ký tuyển dụng</a>
              </div>
            </Box>
          </form>
        </Box>
      </Box>
      {response.showArlert && (
        <Alert severity="error" sx={{ p: 0, mb: 4 }}>
          {response.message}
        </Alert>
      )}
    </>
  );
};
