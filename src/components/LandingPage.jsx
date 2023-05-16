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
import Image3 from "../asset/BK_Page.png";
import Logo from "../asset/Logo.png";

import Silicon from "../asset/Silicon.png";
import Bstar from "../asset/logo_Bstar.webp";
import FuJinet from "../asset/logo_Fujinnet.jpg";
import PTN from "../asset/logo_PTN.jpg";
import FPT from "../asset/logo_FPT.png";
import UNIT from "../asset/UNIT.png";
import DXC from "../asset/DXC.png";
import TMA from "../asset/TMA.png";
import NFQ from "../asset/NFQ.png";
import TPS from "../asset/TPS.webp";
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
    "http://localhost:5000/api/jobpost/all/home"
  );

  // Tạo một đối tượng Date hiện tại
  const now = new Date();

  // Tạo một đối tượng Intl.DateTimeFormat cho múi giờ Việt Nam
  const formatter = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Asia/Ho_Chi_Minh",
  });

  // Sử dụng đối tượng formatter để chuyển đổi giá trị Date thành chuỗi ngày giờ theo định dạng của Việt Nam
  const vietnamTime = formatter.format(now);
  console.log(vietnamTime); // ví dụ: "3/5/2023, 18:15:30"

  const [keyWord, setKeyWord] = useState();
  const SearchBox = styled(Box)({
    // display: "flex",
    // alignItems: "center",
    // border: "0.5px solid black",
    // padding: "5px 15px",
    // transition: "all 0.3s ease",
    // width: "440px",
    // position: "relative",
    // "&:hover": {
    //   borderColor: "#4CAF50",
    //   backgroundColor: "rgba(0, 0, 0, 0.2)",
    // },
    height: "22px",
    background: "#EFF3F2",
    fontFamily: "var(--font-work-sans)",
    fontWeight: "400",
    fontSize: "0.938rem",
    lineHeight: "18px",
    color: "var(--title-color1)",
    padding: "20px 20px 20px 0px",
    lineHeight: "1",
    width: "100%",
    borderRadius: "10px",
  });
  const SearchInput = styled(InputBase)({
    color: "black",
  });
  console.log("-----------", data);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
          "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Box display={"flex"}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,

              color: " #00a7ac",
              mr: 5,
              fontFamily: "font-exo2",
              zIndex: 1,
            }}
          >
            Cơ hội
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
              color: "white",
              fontFamily: "font-exo2",
              zIndex: 1,
            }}
          >
            nghề nghiệp của bạn
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            height: "294px",
            width: "1410px",
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box ml={10}>
                <Box>
                  <Typography variant="h4">
                    Tìm kiếm và gợi ý công việc phù hợp cho bạn
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Typography variant="h6">
                    Đăng tin tuyển dụng ứng viên
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    p: 1,
                  }}
                >
                  <SearchBox>
                    <SearchInput
                      placeholder="Tên công việc"
                      sx={{ ml: 2, flex: 1 }}
                    />
                  </SearchBox>

                  <SearchBox>
                    <SearchInput
                      placeholder="Địa điểm "
                      sx={{ ml: 2, flex: 1 }}
                    />
                  </SearchBox>

                  <Button
                    onClick={() => {
                      navigate({
                        pathname: "/jobs",
                        search: keyWord ? `?job=${keyWord}` : "",
                      });
                    }}
                    sx={{
                      backgroundColor: "#5490cc",
                      height: "62px",
                      width: "200px",
                      borderRadius: "10px",
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
                borderRadius: "20px",
              }}
              item
              xs={4}
            >
              <Box mt={3}>
                <Typography sx={{ lineHeight: 1.75 }} fontWeight="bold">
                  Tìm kiếm việc làm dễ dàng hơn
                </Typography>
                <Typography variant="h4">Tạo cv cho bản thân bạn</Typography>
                <Typography sx={{ lineHeight: 3 }}>
                  Bạn chưa có CV ? Tạo ngay chỉ với 3 bước.
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#5490cc",
                    height: "62px",
                    width: "200px",
                    borderRadius: "10px",
                  }}
                  variant="contained"
                >
                  Tạo cv của bạn
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ my: 4, padding: 10 }}>
        <Box sx={{ ml: 10 }} display={"flex"}>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "var(--title-color1)",
              fontFamily: "var(--font-exo2)",
              lineHeight: "48px",
              marginBottom: "20px",
              marginTop: "-10px",
            }}
            align="center"
            variant="h4"
            fontWeight={550}
          >
            Các công ty tuyển dụng
          </Typography>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#00a7ac",
              fontFamily: "var(--font-exo2)",
              lineHeight: "48px",
              marginBottom: "20px",
              marginTop: "-10px",
              ml: 2,
            }}
            align="center"
            variant="h4"
            fontWeight={550}
          >
            hàng đầu
          </Typography>
        </Box>
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
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
              mt: 3,
            }}
            src={Bstar}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "200px",
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
        <Box
          sx={{
            mt: "1rem",
            display: "flex",
          }}
        >
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "140px",
              mr: 4,
            }}
            src={UNIT}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
              mt: 3,
            }}
            src={DXC}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
              mt: 3,
            }}
            src={TMA}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
            }}
            src={NFQ}
            fit="cover"
            duration={duration} // truyền giá trị số vào prop duration
          />
          <Image
            sx={{
              maxWidth: "200px",
              maxHeight: "200px",
              mr: 4,
              mt: 4,
            }}
            src={TPS}
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
          subTitle="SmartJobBoard có các mẫu cv đa dạng cho bạn lựa chọn"
          imageLink="https://www.topcv.vn/v4/image/welcome/mau_cv.png?v=1.0.0"
          buttonTitle="Tạo CV ngay"
        />

        <FeatureCard
          maxHeight="262px"
          maxWidth="40%"
          title="Tìm việc làm và ứng viên thông qua gợi ý"
          subTitle="Gợi ý phù hợp với yêu cầu và kỹ năng"
          imageLink={hrimg}
          buttonTitle="Tìm ứng viên và việc làm phù hợp"
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
          title="Ứng tuyển công việc"
          subTitle="Ứng tuyển vào vị trí mà bạn mong muốn"
          imageLink={Cadi}
          buttonTitle="Ứng tuyển ngay"
        />
      </Box>
      <Box sx={{ mt: 10 }}>
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
                <Typography
                  variant="h6"
                  fontFamily="Arial,Helvetica Neue,Helvetica,sans-serif"
                  sx={{ lineHeight: 1.75 }}
                  fontWeight="bold"
                >
                  Nhà tuyển dụng
                </Typography>
                <Typography
                  fontFamily="Arial,Helvetica Neue,Helvetica,sans-serif"
                  variant="h4"
                >
                  Tìm kiếm và đăng công việc
                </Typography>
                <Typography
                  variant="h5"
                  fontFamily="Arial,Helvetica Neue,Helvetica,sans-serif"
                  sx={{ lineHeight: 3 }}
                >
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
                  Đăng tin tuyển dụng
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
      <Box padding={5} display={"flex"} justifyContent={"center"}>
        <Typography
          variant="h4"
          fontWeight="600"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: 3,
            mt: 4,
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
        >
          Tin tuyển dụng
        </Typography>
        <Typography
          variant="h4"
          fontWeight="600"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: 1,
            mt: 4,
            color: "#00a7ac",
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
        >
          việc làm mới nhất
        </Typography>
      </Box>
      {loading ? <Loading /> : <JobListCompany jobsPage={data} />}
    </>
  );
};
