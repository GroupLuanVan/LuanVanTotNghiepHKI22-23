import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "mui-image";
import env from "../../asset/env.json";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
export const RegisterEmployer = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [addresses, setAddresses] = useState([]);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(
      usernameValue,
      emailValue,
      companyValue,
      locationValue,
      phoneValue,
      passwordValue,
      confirmPasswordValue
    );

    if (
      !usernameValue ||
      !emailValue ||
      !companyValue ||
      !locationValue ||
      !phoneValue ||
      !passwordValue ||
      !confirmPasswordValue
    ) {
      toast.error("Vui lòng nhập đủ ô");
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      toast.error("mật khẩu không trùng khớp");
      return;
    }

    const user = {
      username: usernameValue,
      email: emailValue,
      nameCompany: companyValue,
      location: locationValue,
      phone: phoneValue,
      password: passwordValue,
      role: "recruiter",
    };

    axios
      .post(`http://localhost:5000/api/auth/Register`, user)
      .then((response) => {
        toast.success("Đăng Ký Thành Công");
        toast.success(`Welcome, ${usernameValue}!`);
        navigate("/LoginEmployer");
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 409) {
          toast.error(
            "Email hoặc username đăng nhập đã được sử dụng. Vui lòng chọn username hoặc email đăng nhập khác."
          );
        } else {
          toast.error("Đăng ký không thành công. Vui lòng thử lại.");
        }
      });
  };

  return (
    <>
      <Box display="flex" flexDirection="column" marginTop={20}>
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <form>
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              //justifyContent={"center"}
              sx={{}}
            >
              <Typography variant="h2" padding={3} textAlign="center">
                Tạo một tài khoản tuyển dụng
              </Typography>

              <TextField
                value={usernameValue}
                onChange={(e) => setUsernameValue(e.target.value)}
                margin="normal"
                type="text"
                placeholder="username"
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

              <TextField
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                margin="normal"
                type={"email"}
                placeholder="email"
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
              <TextField
                value={companyValue}
                onChange={(e) => setCompanyValue(e.target.value)}
                margin="normal"
                type={"text"}
                placeholder="CompanyName"
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <BusinessIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
                margin="normal"
                type={"text"}
                placeholder="Location"
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <LocationOnIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                margin="normal"
                type={"text"}
                placeholder="Phone"
                sx={{ width: "670px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <LocalPhoneIcon color="warning" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                margin="normal"
                type={"password"}
                placeholder="Mật khẩu "
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
              <TextField
                value={confirmPasswordValue}
                onChange={(e) => setConfirmPasswordValue(e.target.value)}
                margin="normal"
                type={"password"}
                placeholder="Xác nhận mật khẩu"
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

              <Button
                onClick={handleRegister}
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
                Register
              </Button>
              <br />
              <a> I agree to the terms of use</a>
              <div className="form-group login-help text-center">
                <a>Đăng ký tìm việc</a>
                &nbsp; | &nbsp;
                <a>Đăng ký tuyển dụng</a>
              </div>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

// const handleRegister = async () => {
//   try {
//     const response = await axios.post(
//       `http://localhost:5000/api/auth/register`,
//       user
//     );
//     const { token, userName } = response.data.data;
//     console.log(response.data.data);
//     localStorage.setItem("token", token);
//     toast.success(`Welcome, ${userName}!`);
//     navigate("/");
//   } catch (error) {
//     toast.error(error.response.data.message);
//     console.log(error.response.data.message);
//   }
// };
