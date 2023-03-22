import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

// function Login() {
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleLogin = () => {
//     // Code xử lý đăng nhập
//     if (/* đăng nhập thành công */) {
//       setIsSuccess(true);
//     } else {
//       setIsSuccess(false);
//     }
//   };

function handleLogin() {}

export const Login = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="85vh">
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
              justifyContent={"center"}
              // margin="auto"
              marginTop={20}
              marginBottom={10}
              padding={3}
              borderRadius={5}
              boxShadow={"5px 10px 20px #ccc"}
              // backgroundColor="red"
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
                margin="normal"
                variant="outlined"
                type={"eamil"}
                label="Email"
                sx={{ width: "500px" }}
              />
              <TextField
                margin="normal"
                variant="outlined"
                type={"password"}
                label="password"
                sx={{ width: "500px" }}
              />
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
              >
                Login
              </Button>
              <br />
              <a>Quên mật khẩu</a>
              <div className="form-group login-help text-center">
                <a>Đăng ký tìm việc</a>
                &nbsp; | &nbsp;
                <a>Đăng ký tuyển dụng</a>
              </div>
            </Box>
          </form>
        </Box>
      </Box>

      {/* <div>
   
      <button onClick={handleLogin}>Đăng nhập</button>

      <Snackbar
        open={isSuccess}
        autoHideDuration={3000}
        onClose={() => setIsSuccess(false)}
        message="Đăng nhập thành công!"
      />

      <Snackbar
        open={!isSuccess}
        autoHideDuration={3000}
        onClose={() => setIsSuccess(false)}
        message="Đăng nhập thất bại!"
      />
    </div>  */}
    </>
  );
};
