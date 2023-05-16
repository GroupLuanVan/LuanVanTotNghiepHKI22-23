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
            Trang chủ
          </Typography>
          <Typography variant="body1">Liên hệ</Typography>
          <Typography variant="body1">Về chúng tôi</Typography>
          <Typography variant="body1">Điều khoản và điều kiện</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "center", color: "#FFFF" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Nhà tuyển dụng
          </Typography>
          <Typography variant="body1">Đăng bài tuyển dụng</Typography>
          <Typography variant="body1">Gợi ý CV phù hợp</Typography>
          <Typography variant="body1">Đăng nhập</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "center", color: "#FFFF" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Ứng viên
          </Typography>
          <Typography variant="body1">Tìm công việc</Typography>
          <Typography variant="body1">Tạo CV</Typography>
          <Typography variant="body1">Đăng nhập</Typography>
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
