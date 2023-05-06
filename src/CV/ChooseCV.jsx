import React from "react";
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
  Grid,
} from "@mui/material";

import cv1image from "./t1.png";
import cv2image from "./t2.png";
import cv3image from "./t3.png";
import cv4image from "./t4.png";
import cv5image from "./t5.png";
import cv6image from "./t6.png";

import { CVCard1 } from "./CVCard1";
import { PopCV } from "../components/PopCV";
import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import Image from "mui-image";
import banner from "../asset/banner.png";
import banner1 from "../asset/bn1.png";
import { styled } from "@mui/material/styles";
import defaultCvData from "../asset/defaultCvData.json";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CV1 from "./CV1";
import CV2 from "./CV2";
import CV3 from "./CV3";
const TitleTypography = styled(Typography)({
  fontSize: "40px",
  fontWeight: "bold",
  color: "#ff5722",
});

export const ChooseCV = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();
  const [currentCV, setCurrentCV] = useState("");
  const [print, setPrint] = useState(false);
  const [defaultCv, setDefaultCv] = useState(defaultCvData);

  useEffect(() => {
    if (user.role != "candidate") {
      navigate("/LoginSeeker");
    }
  });

  return (
    <>
      <Container maxWidth sx={{ background: "#F0F0F0", mt: 15, pb: 2 }}>
        <Container maxWidth sx={{ pb: 2 }}>
          {" "}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "24px",
                fontWeight: 500,
              }}
            >
              Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc
            </Typography>
            <Typography variant="p">
              Tiếp cận 30,000+ tin tuyển dụng việc làm mới mỗi ngày từ hàng
              nghìn doanh nghiệp uy tín tại Việt Nam
            </Typography>
            <Image
              sx={{
                mt: 2,
                borderRadius: "5px",
              }}
              src={banner1}
              duration={0}
            />
          </Box>{" "}
        </Container>
      </Container>

      <Box>
        <Container
          sx={{ paddingTop: "85px", paddingBottom: "50px", maxWidth: "xl" }}
        >
          <Box sx={{ my: 2, mb: 5 }}>
            <TitleTypography
              gutterBottom
              variant="h1"
              component="div"
              sx={{
                mb: 4,
                ml: 10,
                cursor: "pointer",
                textAlign: "center",
                //fontWeight: 600,
                fontFamily: "Montserrat",
                //fontSize: "1.5rem",   // không nhận dc phản hồi của
                color: "  #105aa3",
              }}
            >
              Chọn CV phù hợp cho bạn
            </TitleTypography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <CVCard1
                title="Chuyên nghiệp"
                image={cv1image}
                selectedItem={setCurrentCV}
                template={"CV1"}
                cardNumber={1}
              />

              <CVCard1
                title="Thiết kế"
                image={cv2image}
                selectedItem={setCurrentCV}
                template={"CV2"}
                cardNumber={2}
              />
              <CVCard1
                title="Kinh doanh"
                image={cv3image}
                selectedItem={setCurrentCV}
                template={"CV3"}
                cardNumber={3}
              />
              <CVCard1
                title="Thời Trang"
                image={cv4image}
                selectedItem={setCurrentCV}
                template={"CV4"}
                cardNumber={4}
              />
              <CVCard1
                title="Nhẹ Nhàng"
                image={cv5image}
                selectedItem={setCurrentCV}
                template={"CV5"}
                cardNumber={5}
              />
              <CVCard1
                title="Trầm Tính"
                image={cv6image}
                selectedItem={setCurrentCV}
                template={"CV6"}
                cardNumber={6}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
