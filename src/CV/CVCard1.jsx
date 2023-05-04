import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  EditIcon,
} from "@mui/material";
import CV1 from "./CV1";
import CV2 from "./CV2";
import CV3 from "./CV3";
import { styled } from "@mui/material/styles";
import React, { useState, useRef } from "react";
import { PopCV } from "../components/PopCV";
import defaultCvData from "../asset/defaultCvData.json";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)({
  width: 500,
  marginLeft: "200px",
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
  marginTop: "-40px",
  "&:hover": {
    opacity: 1,
    transform: "translateX(-50%) translateY(-20px)",
  },
});
export const CVCard1 = ({
  image,
  selectedItem,
  template,
  cardNumber,
  title,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showPopCV, setShowPopCV] = useState(false);

  const [avatar, setAvatar] = useState(defaultCvData.avatar);

  let navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const onClick = () => {
    selectedItem(template);
    navigate(`/use${template}`);
  };
  console.log(template);
  return (
    <>
      <StyledCard
        sx={{ mx: 4, mb: 5, mr: -10 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ImageWrapper>
          <CardMedia
            component="img"
            height="500"
            //width="1400"
            image={image}
            alt="Job"
          />

          <StyledButton>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#5490cc",
                fontWeight: 700,
              }}
              onClick={onClick}
            >
              Dùng Mẫu Này
            </Button>

            <Button
              variant="outlined"
              color="info"
              sx={{ borderRadius: "20px", fontWeight: 700 }}
              onClick={() => setShowPopCV(true)}
            >
              Xem trước Mẫu Này
            </Button>
          </StyledButton>
        </ImageWrapper>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CV {cardNumber}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </StyledCard>
      <PopCV
        show={showPopCV}
        setShow={setShowPopCV}
        template={template}
        avatar={avatar}
        image={image}
        setAvatar={setAvatar}
      />
    </>
  );
};

// {hovered && ( )}
