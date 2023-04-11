import Image from "mui-image";
import { Box, Typography, Button } from "@mui/material";

function FeatureCard({
  maxHeight,
  maxWidth,
  title,
  subTitle,
  buttonTitle,
  imageLink,
}) {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to left, #a7cbef, #004d99)",
          // background: "linear-gradient(to left, #004d99, #008ae6)" xanh đậm,
          p: 5,
          justifyContent: "space-between",
        }}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        display="flex"
        borderRadius="1rem"
      >
        <Box display="flex" flexDirection="column" minWidth="70%">
          <Typography
            variant="h5"
            fontFamily="Arial,Helvetica Neue,Helvetica,sans-serif"
            sx={{ color: "white", fontWeight: "550", mb: 0.7 }}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            fontFamily="Arial,Helvetica Neue,Helvetica,sans-serif"
            fontSize="0.9rem"
            sx={{ color: "white", mb: 1.67 }}
          >
            {subTitle}
          </Typography>
          <Button
            color="success"
            variant="contained"
            sx={{
              width: "20rem",
              bgcolor: "#F44336",
            }}
          >
            {buttonTitle}
          </Button>
        </Box>
        <Image
          src={imageLink}
          width="100%"
          height="100%"
          fit="cover"
          duration="0"
        />
      </Box>
    </>
  );
}
export default FeatureCard;
