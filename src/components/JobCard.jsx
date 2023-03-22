import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  maxWidth: 345,
});

const JobCard = () => {
  return (
    <StyledCard sx={{ mx: 2, mb: 4 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random/345x140"
        alt="Job"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Job Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin eros augue, at tristique quam ultricies sit amet.
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default JobCard;
