// import * as React from "react";
// import {
//   Card,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
//   Grid,
// } from "@mui/material";

// const CompanyCard = ({ company }) => {
//   const { name, logo, location, industry, website } = company;

//   return (
//     // <Grid item xs={12} sm={6} md={4}>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={logo}
//           alt={`${name} logo`}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {location}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {industry}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" href={website} target="_blank">
//           Visit website
//         </Button>
//       </CardActions>
//     </Card>
//     //</Grid>
//   );
// };

// export default CompanyCard;

// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
// } from "@mui/material";

// const CompanyCard = ({ company }) => {
//   const { name, logo, jobsCount } = company;
//   return (
//     <Card sx={{ maxWidth: 345, margin: 2 }}>
//       <CardMedia component="img" height="140" image={logo} alt="company-logo" />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {`${jobsCount} jobs available`}
//         </Typography>
//       </CardContent>
//       <Button variant="contained" color="secondary" sx={{ margin: 2 }}>
//         View Jobs
//       </Button>
//     </Card>
//   );
// };

// export default CompanyCard;

import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  maxWidth: 345,
});

const CompanyCard = () => {
  return (
    <StyledCard sx={{ mx: 2, mb: 4 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random/345x140"
        alt="Company"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Company Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin eros augue, at tristique quam ultricies sit amet.
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CompanyCard;
