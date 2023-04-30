import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CakeIcon from "@mui/icons-material/Cake";
import KeyIcon from "@mui/icons-material/Key";
import TransgenderIcon from "@mui/icons-material/Transgender";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import WcIcon from "@mui/icons-material/Wc";
import Image from "mui-image";

import env from "../../asset/env.json";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Autocomplete,
  IconButton,
  Icon,
  Link,
  ListItemIcon,
  Select,
  MenuItem,
} from "@mui/material";
export const RegisterJobSeeker = () => {
  const navigate = useNavigate();

  const [username, setUsernameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPasswordValue] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(username, email, gender, password, confirmPassword);

    if (!username || !gender || !email || !password || !confirmPassword) {
      toast.error("Vui lòng nhập đủ ô");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("mật khẩu không trùng khớp");
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password,
      role: "candidate",
      gender: gender,
    };

    axios
      .post(`http://localhost:5000/api/auth/register`, user)
      .then((response) => {
        //const { username } = response.data;
        toast.success(
          `Đăng Ký Thành Công. Tên người dùng của bạn là ${username}`
        );
        navigate("/");
      })
      .catch((error) => {
        toast.error("Đăng ký không thành công. Vui lòng thử lại.");
      });
  };

  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            marginTop={30}
            marginBottom={20}
            padding={3}
            sx={{
              height: "588px",
            }}
          >
            <Typography variant="h2" padding={5} textAlign="center">
              Tạo một tài khoản
            </Typography>
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent={"center"}
              border="1px solid #e1e1e1"
              boxShadow={"5px 10px 20px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc ",
                },
                width: "100%",
                height: "50px",
                background: "#fff",
              }}
            >
              <Typography variant="h6" padding={3} textAlign="center">
                Bạn đã có tài khoản ứng Viên ?
                <Button
                  variant="text"
                  sx={{
                    marginLeft: "10px",
                    marginTop: "0px",
                    fontSize: "1.1rem",
                  }}
                >
                  Sign me in
                </Button>
              </Typography>
            </Box>

            <Box>
              <InputLabel
                color="success"
                variant=""
                sx={{ fontSize: "18px", mt: 2, mb: -1 }}
              >
                FullName
              </InputLabel>
              <TextField
                margin="normal"
                type={"text"}
                placeholder="FullName"
                name="name"
                value={username}
                onChange={(e) => setUsernameValue(e.target.value)}
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <AccountCircleIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* <Box>
              {" "}
              <InputLabel
                color="success"
                variant=""
                sx={{ fontSize: "18px", mt: 1, mb: 0 }}
              >
                Ngày Sinh
              </InputLabel>
              <TextField
                fullWidth
                name="birth"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                color="success"
                id="input-with-icon-adornment"
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <CakeIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box> */}

            <Box>
              {" "}
              <InputLabel
                color="success"
                variant=""
                sx={{ fontSize: "18px", mt: 1, mb: 0 }}
              >
                Giới Tính
              </InputLabel>
              <Select
                sx={{
                  width: "670px",
                }}
                labelId="gender-label"
                id="gender"
                value={gender}
                label="Giới tính"
                onChange={handleChange}
              >
                <MenuItem value="Nam">Nam</MenuItem>
                <MenuItem value="Nữ">Nữ</MenuItem>
                <MenuItem value="Khác">Khác</MenuItem>
              </Select>
            </Box>

            <Box>
              <InputLabel
                color="success"
                variant=""
                sx={{ fontSize: "18px", mt: 2, mb: -1.1 }}
              >
                Email
              </InputLabel>
              <TextField
                margin="normal"
                type={"email"}
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmailValue(e.target.value)}
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <AttachEmailIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <InputLabel
                color="success"
                variant=""
                sx={{ fontSize: "18px", mt: 2, mb: -1.1 }}
              >
                Mật Khẩu
              </InputLabel>
              <TextField
                margin="normal"
                type={"password"}
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPasswordValue(e.target.value)}
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <KeyIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box>
              <InputLabel
                color="success"
                variant=""
                sx={{ fontSize: "18px", mt: 2, mb: -1.1 }}
              >
                Xác Nhận Mật Khẩu
              </InputLabel>
              <TextField
                margin="normal"
                type={"password"}
                placeholder="ConfirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPasswordValue(e.target.value)}
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <LockIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Button
              sx={{
                marginTop: 3,
                borderRadius: 3,
                margin: "1 10px 15px",
                height: 40,
                width: 150,
              }}
              variant="contained"
              color="warning"
              onClick={handleRegister}
            >
              Register
            </Button>
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography variant="h6">
                I agree to the <Link href="#">terms of use</Link>
              </Typography>
              <Typography variant="h6">
                <Link href="#">Đăng ký tìm việc</Link> |{" "}
                <Link href="/Remployer">Đăng ký tuyển dụng</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
