// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   Box,
//   Card,
//   CardMedia,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   IconButton,
// } from "@mui/material";
// // import { ArrowBack, ArrowForward } from "@mui/icons-material";
// const CompanySlider = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: isMobile ? 2 : 4,
//     slidesToScroll: isMobile ? 2 : 4,
//   };

//   return (
//     <Box sx={{ my: 5 }}>
//       <Typography variant="h4" component="div" sx={{ mb: 2 }}>
//         Featured Companies
//       </Typography>
//       <Slider {...settings}>
//         <Card sx={{ m: 1 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://picsum.photos/id/1018/400/200"
//             alt="Company 1"
//             // sx={{
//             //   width: "100%",
//             //   height: "100%",
//             //   objectFit: "cover",
//             // }}
//           />
//         </Card>
//         <Card sx={{ m: 1 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://picsum.photos/id/1025/400/200"
//             alt="Company 2"
//           />
//         </Card>
//         <Card sx={{ m: 1 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://picsum.photos/id/1031/400/200"
//             alt="Company 3"
//           />
//         </Card>
//         <Card sx={{ m: 1 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://picsum.photos/id/1043/400/200"
//             alt="Company 4"
//           />
//         </Card>
//         <Card sx={{ m: 1 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://picsum.photos/id/1053/400/200"
//             alt="Company 5"
//           />
//         </Card>
//         <Card sx={{ m: 1 }}>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://picsum.photos/id/1059/400/200"
//             alt="Company 6"
//           />
//         </Card>
//       </Slider>
//     </Box>
//   );
// };

// export default CompanySlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Icon,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const CompanySlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: isMobile ? 2 : 4,
    prevArrow: (
      <IconButton
        sx={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <ArrowBack />
      </IconButton>
    ),
    nextArrow: (
      <IconButton
        sx={{
          position: "absolute",
          zIndex: 1,
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <ArrowForward />
      </IconButton>
    ),
  };

  //prevArrow={<PrevArrow />} nextArrow={<NextArrow />}
  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        Featured Companies
      </Typography>
      <Slider {...settings}>
        <Card sx={{ m: 1 }}>
          {/* <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/id/1018/400/200"
            alt="Company 1"
          /> */}

          <CardActionArea>
            <CardMedia component="img" height="140" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nguyen Huu Thai
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mang may tinh
              </Typography>
              <Typography variant="body2" color="text.secondary">
                K44
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ m: 1 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/id/1025/400/200"
            alt="Company 2"
          />
        </Card>
        <Card sx={{ m: 1 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/id/1031/400/200"
            alt="Company 3"
          />
        </Card>
        <Card sx={{ m: 1 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/id/1043/400/200"
            alt="Company 4"
          />
        </Card>
        <Card sx={{ m: 1 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/id/1053/400/200"
            alt="Company 5"
          />
        </Card>
        <Card sx={{ m: 1 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/id/1059/400/200"
            alt="Company 6"
          />
        </Card>
      </Slider>
    </Box>
  );
};

export default CompanySlider;
