import { useState } from "react";
import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import { AccountCircle, Person, Business } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginType = () => {
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
        Choose Account Type
      </Typography>
      <Box
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} sm={4}>
          <Button
            width="100%"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/LoginSeeker");
            }}
            sx={{
              borderRadius: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              py: { xs: 2, md: 3 },
            }}
          >
            <Icon component={Person} sx={{ mr: 1 }} />
            Job Seeker
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button
            width="100%"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/LoginEmployer");
            }}
            sx={{
              borderRadius: 2,
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: { xs: "1rem", md: "1.2rem" },
              py: { xs: 2, md: 3 },
            }}
          >
            <Icon component={Business} sx={{ mr: 1 }} />
            Employer
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button
            width="100%"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/LoginAdmin");
            }}
            sx={{
              borderRadius: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              py: { xs: 2, md: 3 },
            }}
          >
            <Icon component={AccountCircle} sx={{ mr: 1 }} />
            Admin
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginType;
