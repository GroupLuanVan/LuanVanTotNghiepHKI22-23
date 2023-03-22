import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
export const RegisterJobSeeker = () => {
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
              margin="auto"
              marginTop={-10}
              padding={3}
              // borderRadius={5}
              // boxShadow={"5px 10px 20px #ccc"}
              sx={{
                // ":hover": {
                //   boxShadow: "10px 10px 20px #ccc ",
                // },
                height: "588px",
              }}
            >
              <Typography variant="h2" padding={3} textAlign="center">
                Tạo một tài khoản
              </Typography>
              <Box
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
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
                  I already have a Job Seeker account <a> Sign me in</a>
                </Typography>{" "}
              </Box>

              <TextField
                margin="normal"
                type={"text"}
                placeholder="FullName"
                sx={{ width: "670px" }}
              />

              <TextField
                margin="normal"
                type={"email"}
                placeholder="Email"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"password"}
                placeholder="password"
                sx={{ width: "670px" }}
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
