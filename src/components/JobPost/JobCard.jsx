import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  maxWidth: 780,
});

const JobCard = () => {
  return (
    <>
      <StyledCard
        sx={{
          mx: 2,
          mb: 4,
        }}
      >
        <CardMedia
          component="img"
          height="140"
          maxWidth="750"
          image="https://source.unsplash.com/random/345x140"
          alt="Job"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Job Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Đây là dòng mô tả
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </StyledCard>
    </>
  );
};

export default JobCard;
