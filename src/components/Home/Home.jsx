import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import Image from "../../asset/6.png";
import MenuIcon from "@mui/icons-material/Menu";
// import Slider from "./Slider";
import CompanySlider from "../Slider";
import JobCard from "../JobCard";
import CompanyCard from "./CompanyCard";
import CategoryCard from "./CategoryCard";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to left, #8cebc84a, transparent)",
          mb: 0,
          p: 35,
          position: "relative",
        }}
      >
        <img
          src={Image}
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box display={"flex"} justifyContent={"center"} marginTop={-22}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          padding={3}
          borderRadius={5}
          boxShadow={"5px 10px 20px #ccc"}
          backgroundColor="white"
          zIndex={999}
          sx={{
            mt: "7rem",
            flexDirection: "column",

            ":hover": {
              boxShadow: "10px 10px 20px #ccc ",
            },
            height: "100px",
            width: "1000px",
          }}
        >
          <Typography variant="h4" fontWeight="550" gutterBottom>
            Tìm kiếm công việc phù hợp với bạn
          </Typography>
          <Box
            sx={{
              display: "flex",
              //flexWrap: "wrap",
              zIndex: 1,
            }}
          >
            <TextField
              // onFocus={() => {
              //   setDisplayFilterBox("block");
              // }}

              size="small"
              sx={{ width: "100%", zIndex: 1, backgroundColor: "white" }}
              id="outlined-start-adornment"
              color="success"
              label="Từ Khóa"
              //onBlur={(e) => setKeyWord(e.target.value)}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">Nguyen</InputAdornment>
                ),
              }}
            />
            <TextField
              // onFocus={() => {
              //   setDisplayFilterBox("block");
              // }}
              background="white"
              size="small"
              sx={{
                width: "100%",
                marginLeft: "25px",
                zIndex: 1,
                backgroundColor: "white",
              }}
              id="outlined-start-adornment"
              color="success"
              label="Địa Điểm"
              //onBlur={(e) => setKeyWord(e.target.value)}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
            />
            <Button
              size="small"
              sx={{
                ml: 2,
                width: "350px",
              }}
              variant="contained"
              color="success"
              // onClick={() => {
              //   navigate({
              //     pathname: "/jobs",
              //     search: keyWord ? `?job=${keyWord}` : "",
              //   });
              // }}
            >
              Tìm việc ngay
            </Button>
          </Box>
        </Box>
      </Box>

      {/*  Phần Sauuu */}
      <Box>
        <Container
          sx={{ paddingTop: "85px", paddingBottom: "50px", maxWidth: "xl" }}
        >
          <Box sx={{ my: 5 }}>
            <CompanySlider />
          </Box>

          <Box sx={{ my: 5 }}>
            <Typography variant="h4" component="div" sx={{ mb: 2 }}>
              Featured Jobs
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </Box>
          </Box>

          <Box sx={{ my: 5 }}>
            <Typography variant="h4" component="div" sx={{ mb: 2 }}>
              Featured Companies
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </Box>
          </Box>

          <Box sx={{ my: 5 }}>
            <Typography variant="h4" component="div" sx={{ mb: 2 }}>
              Popular Categories
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
