import React from "react";
import {
  Box,
  Typography,
  Button,
  InputBase,
  Grid,
  Container,
} from "@mui/material";
import Image1 from "../asset/BK_LandingPage.jpg";
import Image2 from "../asset/LJ.png";
import Silicon from "../asset/Logo_Silicon.jpg";
import Bstar from "../asset/logo_Bstar.webp";
import FuJinet from "../asset/logo_Fujinnet.jpg";
import PTN from "../asset/logo_PTN.jpg";
import FPT from "../asset/logo_FPT.png";
import hrimg from "../asset/hr.png";
import Cadi from "../asset/86.jpg";
import Image from "mui-image";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import FeatureCard from "./FeatureCard";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hook/useFetch";
import Loading from "./Loading";
import { JobListCompany } from "./JobPost/JobListCompany";

export const LandingPage = () => {
  const durationString = "0"; // giá trị chuỗi
  const duration = parseInt(durationString); // chuyển đổi thành giá trị số
  const [displayFilterBox, setDisplayFilterBox] = useState("none");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/jobpost/"
  );
  const [keyWord, setKeyWord] = useState();
  const SearchBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    border: "0.5px solid black",
    padding: "5px 15px",
    transition: "all 0.3s ease",
    width: "340px",
    position: "relative",
    "&:hover": {
      borderColor: "#4CAF50",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      boxShadow: "0px 0px 10px 0px #4CAF50",
    },
  });
  const SearchInput = styled(InputBase)({
    color: "black",
  });
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
            color: "Black",
          }}
        >
          Xây Dựng Hồ Sơ Cá Nhân Và Đăng Tuyển Ứng Viên Tiềm Năng
        </Typography>
        <Box
          boxShadow={"5px 10px 20px #ccc"}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            height: "294px",
            width: "1410px",
            //padding: "32px 32px 32px 32px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box ml={10}>
                <Box>
                  <Typography variant="h4">
                    Tìm Kiếm Và Gợi Ý Công Việc Phù Hợp Cho Bạn
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Typography variant="h6">
                    Đăng Tin Tuyển Dụng Ứng Viên
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    p: 1,
                  }}
                >
                  <SearchBox>
                    <SearchInput
                      placeholder="Search... Job title, keywords, or company "
                      sx={{ ml: 2, flex: 1 }}
                    />
                  </SearchBox>

                  <SearchBox>
                    <SearchInput
                      placeholder="Location "
                      sx={{ ml: 1, flex: 1 }}
                    />
                  </SearchBox>
                  <Button
                    sx={{
                      backgroundColor: "#2F4BA0",
                      height: "46px",
                      width: "160px",
                      borderRadius: "0px",
                    }}
                    variant="contained"
                    size="medium"
                  >
                    <SearchIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#D5DBEC",
                zIndex: 2,
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "30%",
              }}
              item
              xs={4}
            >
              <Box mt={4}>
                <Typography sx={{ lineHeight: 1.75 }} fontWeight="bold">
                  Tìm Kiếm việc làm dễ dàng hơn
                </Typography>
                <Typography variant="h4">Tạo Cv cho bản thân bạn</Typography>
                <Typography sx={{ lineHeight: 3 }}>
                  Bạn chưa có CV? Tạo ngay chỉ với 3 bước.
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#2F4BA0",
                    height: "50px",
                    width: "195px",
                  }}
                  variant="contained"
                >
                  Tạo CV của bạn
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography align="center" variant="h4" fontWeight={550}>
          Các công ty tuyển dụng hàng đầu
        </Typography>
        <Box
          sx={{
            mt: "1rem",
            display: "flex",
          }}
        >
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
            }}
            src={Silicon}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "300px",
              maxHeight: "200px",
              mr: 4,
            }}
            src={Bstar}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "250px",
              maxHeight: "200px",
              mr: 4,
            }}
            src={FuJinet}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
            }}
            src={PTN}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
            }}
            src={FPT}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 4,
          px: 4,
        }}
      >
        <FeatureCard
          maxHeight="262px"
          maxWidth="40%"
          title="Tạo CV online "
          subTitle="SmartJobBoard có các mẫu CV đa dạng cho bạn thỏa sức lựa chọn"
          imageLink="https://www.topcv.vn/v4/image/welcome/mau_cv.png?v=1.0.0"
          buttonTitle="Tạo CV ngay"
        />

        <FeatureCard
          maxHeight="262px"
          maxWidth="40%"
          title="Tìm Việc Làm và Ứng Viên Thông Qua Gợi Ý"
          subTitle="Gợi Ý Phù Hợp Với Yêu Cầu Và Kỹ Năng"
          imageLink={hrimg}
          buttonTitle="Tìm ứng viên và Việc Làm Phù Hợp"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 4,
          px: 4,
        }}
      >
        <FeatureCard
          maxHeight="280px"
          maxWidth="50%"
          title="Ứng Tuyển Công Việc"
          subTitle="Ứng tuyển vào vị trí mà bạn mong muốn"
          imageLink={Cadi}
          buttonTitle="Ứng Tuyển Ngay"
        />
      </Box>
      <Box
      // sx={{
      //   display: "flex",
      //   justifyContent: "center",
      // }}
      >
        <Box
          boxShadow={"5px 10px 20px #ccc"}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            background: "#0E0E24",
            height: "310px",
            width: "1846px",
          }}
        >
          <Grid container item xs={12}>
            <Grid item xs={9}>
              {" "}
              <Box mt={5} ml={10}>
                <Typography sx={{ lineHeight: 1.75 }} fontWeight="bold">
                  Nhà Tuyển Dụng
                </Typography>
                <Typography variant="h4">Tìm Kiếm Và Đăng Công Việc</Typography>
                <Typography sx={{ lineHeight: 3 }}>
                  Chúng tôi có các giải pháp đầu cuối có thể theo kịp bạn và các
                  tiêu chuẩn của bạn.
                </Typography>
                <Button
                  sx={{
                    "&:hover": { bgcolor: "white", color: "#2F4BA0" },
                    fontSize: "1rem",
                    fontWeight: "bold",
                    height: "50px",
                    width: "250px",
                    border: "0.125rem solid",
                  }}
                  variant="Outlined"
                >
                  Đăng Tin Tuyển dụng
                </Button>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Image
                sx={{
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={Image2}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {loading ? <Loading /> : <JobListCompany jobsPage={data} />}
    </>
  );
};
