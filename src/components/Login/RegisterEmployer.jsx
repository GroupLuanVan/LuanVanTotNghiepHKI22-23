import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
export const RegisterEmployer = () => {
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
                margin="normal"
                type={"Email"}
                placeholder="Email"
                sx={{ width: "670px" }}
              />

              <TextField
                margin="normal"
                type={"password"}
                placeholder="password"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"text"}
                placeholder="FullName"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"text"}
                placeholder="Company Name"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"text"}
                placeholder="Phone"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"text"}
                placeholder="website"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"text"}
                placeholder="Location"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"text"}
                placeholder="Logo"
                sx={{ width: "670px" }}
              />
              <TextField
                margin="normal"
                type={"text"}
                placeholder="Company Description"
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
