import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import Image from "../../asset/5.jpg";
import { red } from "@mui/material/colors";
import { getAddressTitleFromId } from "../../other/SelectDataUtils";
import { styled } from "@mui/material/styles";
import JobCard from "./JobCard";
export const JobList = (props) => {
  const StyledCard = styled(Card)({
    maxWidth: 345,
  });
  const { job } = props;

  function titleCut(title) {
    if (title.length > 20) {
      return title.slice(0, 19) + "...";
    } else return title;
  }
  const style1 = {
    background: "#2E7D32",
    px: 1,
    borderRadius: "4px",
    mr: 2,
    color: "white",
    fontSize: "16px",
  };
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to left, #8cebc84a, transparent)",
          mb: 0,
          p: 20,
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

      <Box marginLeft={40} marginTop={10} marginBottom={10}>
        <Grid container spacing={5}>
          <Grid container item md={3} spacing={4}>
            <Typography variant="h4" style={{ marginBottom: "1rem" }}>
              Danh mục công ty
            </Typography>
            <Box
              sx={{
                boxShadow: "-1px 1px 4px rgb(0 0 0 / 20%)",
                width: "100%",
              }}
            >
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </Box>
          </Grid>

          <Grid sx={{ mt: -4 }} container item xs={6} md={6} spacing={0}>
            <Typography variant="h4" style={{ marginBottom: "1rem" }}>
              Danh Sách Công Việc
            </Typography>

            <Grid item xs={12} md={12}>
              <Box marginTop={-12} marginBottom={5}>
                <Box
                  display="flex"
                  padding={3}
                  borderRadius={5}
                  boxShadow={"5px 10px 20px #ccc"}
                  backgroundColor="white"
                  zIndex={999}
                  sx={{
                    mt: "5rem",
                    flexDirection: "column",

                    ":hover": {
                      boxShadow: "10px 10px 20px #ccc ",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography variant="h6" fontWeight="500" gutterBottom>
                      Tìm kiếm Công Việc
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid container mb={15} item xs={12}>
              {/* <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              > */}
              <Card
                sx={{
                  boxShadow: "-1px 1px 4px rgb(0 0 0 / 20%)",
                  width: "100%",
                }}
              >
                {" "}
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
              </Card>
              {/* </Box> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
