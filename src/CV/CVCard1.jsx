import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import CV1 from "./CV1";
import CV2 from "./CV2";
import CV3 from "./CV3";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { PopCV } from "../components/PopCV";
import defaultCvData from "../asset/defaultCvData.json";
const StyledCard = styled(Card)({
  maxWidth: 500,
});
const ImageWrapper = styled("div")({
  position: "relative",
});
const StyledButton = styled(Button)({
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",

  opacity: 0,
  transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
  transitionDelay: "0.1s",
  width: "500px",
  height: "80px",
  marginTop: "-40px", // đặt margin-top bằng giá trị âm
  "&:hover": {
    opacity: 1,
    transform: "translateX(-50%) translateY(-20px)", // dịch chuyển button lên trên
  },
});
export const CVCard1 = ({ data, image }) => {
  const [hovered, setHovered] = useState(false);
  const [showPopCV, setShowPopCV] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <StyledCard
        sx={{ mx: 2, mb: 4 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ImageWrapper>
          <CardMedia
            component="img"
            height="300"
            width="1400"
            image={image}
            alt="Job"
          />

          {hovered && (
            <StyledButton>
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: "20px" }}
              >
                Dùng Mẫu Này
              </Button>

              <Button
                variant="outlined"
                color="info"
                sx={{ borderRadius: "20px" }}
                onClick={() => setShowPopCV(true)}
              >
                Xem trước Mẫu Này
              </Button>
            </StyledButton>
          )}
        </ImageWrapper>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CV Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nguyen Huu Thai
          </Typography>
        </CardContent>
      </StyledCard>
      <PopCV show={showPopCV} setShow={setShowPopCV} />
    </>
  );
};
//   const PopCV = ({ data }) => {
//     return (
//       <div>
//         <p>Name: {data.name}</p>
//         <p>Description: {data.description}</p>
//       </div>
//     );
//   };
// };
// const ChooseCV = () => {
//   const cardsData = [
//     { name: "CV 1", description: "This is CV 1." },
//     { name: "CV 2", description: "This is CV 2." },
//     { name: "CV 3", description: "This is CV 3." },
//   ];

//   return (
//     <div>
//       {cardsData.map((cardData, index) => (
//         <CVCard1 key={index} data={cardData} />
//       ))}
//     </div>
//   );
// };

// tôi có 3 component component ChooseCV là trang chủ hiển thị, tôi dùng component CVCard1 để tạo các nút khi rê chuột vào Card sẽ hover button,
// làm thế nào để khi click vào button của từng card thì sẽ hiển thị đúng dữ liệu tương ứng từng card và popup của card được tạo
// thành từ componet PopCV
