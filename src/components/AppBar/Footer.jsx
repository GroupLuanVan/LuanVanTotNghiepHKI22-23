import React from "react";
import { Box, Grid, Typography, Link, Footer } from "@mui/material";

const CustomFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#25323F",
        bottom: "0",
        width: "100%",
        zIndex: "999",
        marginTop: "150px",
      }}
    >
      <Grid container spacing={3} height="250px">
        <Grid item xs={12} md={3} sx={{ textAlign: "center", color: "#FFFF" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Home
          </Typography>
          <Typography variant="body1">Contact</Typography>
          <Typography variant="body1">About Us</Typography>
          <Typography variant="body1">Terms & Conditions</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "center", color: "#FFFF" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            EMPLOYER
          </Typography>
          <Typography variant="body1">Post a Job</Typography>
          <Typography variant="body1">Search Resumes</Typography>
          <Typography variant="body1">Sign in</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "center", color: "#FFFF" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            JOB SEEKER
          </Typography>
          <Typography variant="body1">Find Jobs</Typography>
          <Typography variant="body1">Create Resume</Typography>
          <Typography variant="body1">Sign in</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "center", color: "#FFFF" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Liên kết hữu ích
          </Typography>
          <Link href="#" sx={{ color: "white", mr: 2 }}>
            Trang chủ
          </Link>
          <Link href="#" sx={{ color: "white", mr: 2 }}>
            Việc làm
          </Link>
          <Link href="#" sx={{ color: "white", mr: 2 }}>
            Nhân viên
          </Link>
          <Link href="#" sx={{ color: "white" }}>
            Liên hệ
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomFooter;
