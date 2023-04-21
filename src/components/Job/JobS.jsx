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
  Container,
} from "@mui/material";
import Image from "mui-image";
import { useNavigate, createSearchParams } from "react-router-dom";
import Image1 from "../../asset/JobS.png";
import { red } from "@mui/material/colors";
import { getAddressTitleFromId } from "../../other/SelectDataUtils";
import { styled } from "@mui/material/styles";
import JobCard from "../JobPost/JobCard";
import Loading from "../Loading";
import { JobListCompany } from "../JobPost/JobListCompany";
import useFetch from "../../hook/useFetch";

export const JobS = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/jobpost/all"
  );
  return (
    <>
      <Box
        sx={{
          //background: "linear-gradient(to left, #8cebc84a, transparent)",
          background:
            "transparent linear-gradient(6deg,#fff,#c4ffdd 100%,rgba(195,255,221,.702) 0) 0 0 no-repeat",
          //   mb: 0,
          p: 15,
          height: "290px",
          position: "relative",
        }}
      >
        <img
          src={Image1}
          alt="yourImageAltText"
          style={{
            height: "400px",
            position: "absolute",
            top: "calc(50% + 50px)",
            left: "85%",
            bottom: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Box mt={1}>
          <Typography variant="h3" sx={{ color: "#00b14f", mb: "37px" }}>
            Khám phá công việc của công ty nổi bật
          </Typography>
          <Typography variant="h6" sx={{ color: "#00b14f" }}>
            Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho
            bạn
          </Typography>
        </Box>

        <Box mb={-10} mr={100} display={"flex"} justifyContent="flex-start">
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            padding={3}
            borderRadius={5}
            // boxShadow={"5px 10px 20px #ccc"}
            // backgroundColor="white"
            // zIndex={999}
            sx={{
              mt: "2rem",
              ml: "-2rem",
            }}
          >
            <Box mr={10}>
              <Typography variant="h4" fontWeight="550" gutterBottom>
                Tìm kiếm công việc phù hợp với bạn
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                zIndex: 1,
              }}
            >
              <TextField
                size="small"
                sx={{
                  width: "500px",

                  backgroundColor: "white",

                  borderRadius: "100rem",
                }}
                color="success"
                label="Nhập tên công ty"
              />

              <Button
                size="small"
                sx={{
                  ml: 2,
                  width: "150px",
                  borderRadius: "10rem",
                }}
                variant="contained"
                color="success"
              >
                Tìm việc ngay
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Container maxWidth>
        <Box sx={{ my: 6 }}>
          <Typography
            variant="h3"
            fontWeight="600"
            gutterBottom
            sx={{ display: "flex", justifyContent: "center", ml: 3, mt: 4 }}
          >
            Tin tuyển dụng, việc làm mới nhất
          </Typography>
          {loading ? <Loading /> : <JobListCompany jobsPage={data} />}
        </Box>
      </Container>
    </>
  );
};
