import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLogin,
  setRole,
  setToken,
  setidApplyJob,
  setidcv,
  setidCandidate,
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

export const LoginSeeker = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const user = useSelector((state) => state.user);
  const role = useSelector((state) => state.user.role);
  console.log(user);
  console.log(role);
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
      console.log(data);
      localStorage.setItem("token", data.token);
      //localStorage.setItem("role", data.user.role);
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      // Kiểm tra role của user
      if (data.user.role === "candidate") {
        dispatch(setidApplyJob(data.candidate.applyJobs));
        dispatch(setidcv(data.candidate.activatedCvId));
        dispatch(setidCandidate(data.candidate._id));
        dispatch(setUserLogin(data.candidate.nameCandidate));
        dispatch(setRole(data.user.role));
        dispatch(setToken(data.token));
        //dispatch(setidApplyJob(data.candidate.applyJobs));

        console.log(data);

        navigate("/");
        return;
      } else {
        toast.error("Invalid user role");
        setIsLogin(false);
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
                Đăng nhập ứng viên
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
                  backgroundColor: "#5490cc",
                }}
                variant="contained"
                //color="warning"
              >
                Đăng nhập
              </Button>
              <br />
              <a>Quên mật khẩu</a>
              <div className="form-group login-help text-center">
                <a>Đăng ký tìm việc</a> | <a>Đăng ký tuyển dụng</a>
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
