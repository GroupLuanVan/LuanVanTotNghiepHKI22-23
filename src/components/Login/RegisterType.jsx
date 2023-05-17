import { useState } from "react";
import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import { AccountCircle, Person, Business } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const RegisterOption = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("");

  const handleAccountTypeClick = (type) => {
    setAccountType(type);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="270px"
      marginBottom={"280px"}
      marginLeft={"620px"}
      borderRadius={5}
      boxShadow={"5px 10px 20px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc ",
        },
        height: "250px",
        maxWidth: "600px", // Giảm chiều ngang của box cha bao bọc bên ngoài
      }}
    >
      <Typography marginTop={"45px"} variant="h4" gutterBottom>
        Chọn tài khoản bạn muốn đăng ký
      </Typography>
      <Box container spacing={0}>
        <Button
          width="50%"
          variant="contained"
          color="primary"
          // onClick={() => handleAccountTypeClick("jobSeeker")}
          onClick={() => {
            navigate("/Rseeker");
          }}
          sx={{
            borderRadius: 2,
            marginRight: "20px",
            fontSize: { xs: "1rem", md: "1.2rem" },
            py: { xs: 2, md: 3 },
          }}
        >
          <Icon component={Person} sx={{ mr: 1 }} />
          Ứng viên
        </Button>

        <Button
          width="50%"
          variant="contained"
          color="primary"
          // onClick={() => handleAccountTypeClick("employer")}
          onClick={() => {
            navigate("/Remployer");
          }}
          sx={{
            borderRadius: 2,
            marginLeft: "30px",
            fontSize: { xs: "1rem", md: "1.2rem" },
            py: { xs: 2, md: 3 },
          }}
        >
          <Icon component={Business} sx={{ mr: 1 }} />
          Nhà tuyển dụng
        </Button>
      </Box>
      {/* {accountType && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          You selected {accountType} account type.
        </Typography>
      )} */}
    </Box>
  );
};

export default RegisterOption;
