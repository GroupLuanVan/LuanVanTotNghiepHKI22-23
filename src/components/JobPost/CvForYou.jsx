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
import Image1 from "../../asset/JobS1.jpg";
import { red } from "@mui/material/colors";
import { getAddressTitleFromId } from "../../other/SelectDataUtils";
import { styled } from "@mui/material/styles";
import JobCard from "../JobPost/JobCard";
import Loading from "../Loading";
import { JobListCompany } from "../JobPost/JobListCompany";
import useFetch from "../../hook/useFetch";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { JobListSimilar } from "./JobListSimilar";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CvListSimilar } from "./CvListSimilar";

export const CvForYou = () => {
  const { id } = useParams();
  console.log(id);
  //   const location = useLocation();
  //   const job = location?.state?.job;
  //   console.log(job);
  const [CvRecs, setCvRecs] = useState([]);
  const cvId = useSelector((state) => state.user.cvId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const sugListDbData = await axios.get(
          `http://127.0.0.1:8080/findResForJob/${id}`
        );
        const jobRecs = sugListDbData.data;
        console.log(jobRecs);
        setCvRecs(jobRecs);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getData();
  }, []);
  console.log(CvRecs);
  return (
    <>
      <Box
        sx={{
          //background: "linear-gradient(to left, #8cebc84a, transparent)",
          // background:
          //   "transparent linear-gradient(6deg,#fff,#c4ffdd 100%,rgba(195,255,221,.702) 0) 0 0 no-repeat",

          background:
            "transparent linear-gradient(6deg, #fff, #5490cc 100%, #5490cc 0) 0 0 no-repeat",

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
            left: "80%",
            bottom: "100%",

            transform: "translate(-50%, -50%)",
          }}
        />
        <Box mt={1}>
          <Typography variant="h3" sx={{ color: "#2C8CF4", mb: "37px" }}>
            Khám phá công việc của công ty nổi bật
          </Typography>
          <Typography variant="h6" sx={{ color: "#2C8CF4" }}>
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
                  mr: 2,
                  border: "none",
                  outline: "none",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: 0,
                      borderRadius: "100rem",
                    },
                  },
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
                  backgroundColor: "#2C8CF4",
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
            CV Phù Hợp Nhất
          </Typography>
          {/* {loading ? <Loading /> : <JobListSimilar jobSimilar={jobRecs} />} */}
          <CvListSimilar Cvdata={CvRecs} />
        </Box>
      </Container>
    </>
  );
};
