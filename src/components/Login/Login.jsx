import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLogin, setActivatedCvId } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import LoginSchema from "../../validate/loginValidate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as yup from "yup";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const [response, setResponse] = useState({
    showArlert: false,
    message: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu với schema validation
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
      dispatch(setUserLogin(data.token));
      dispatch(setActivatedCvId(null));
      navigate("/");
    } catch (error) {
      // Nếu có lỗi xảy ra, hiển thị thông báo lỗi cho người dùng
      //toast.error(error.errors[0]);

      toast.error(error.response.data.message);
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
                Sign in
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
