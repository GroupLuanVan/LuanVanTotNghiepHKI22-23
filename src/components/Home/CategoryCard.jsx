import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const CategoryCard = () => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random/400x200/?technology"
        alt="category image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Technology
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit nisi vel gravida congue.
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Typography variant="subtitle1" component="div">
          Learn more
        </Typography>
      </Box>
    </Card>
  );
};

export default CategoryCard;
