import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  Chip,
  Box,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { useNavigate, createSearchParams } from "react-router-dom";
import Image from "mui-image";

const StyledCard = styled(Card)({
  maxWidth: 780,
});

const JobCardSimilar = (props) => {
  const { job } = props;
  console.log(job?.data?.location);
  console.log(job?.data?.salaryMin);

  function titleCut(title) {
    if (title?.length > 30) {
      return title.slice(0, 28) + "...";
    } else return title;
  }

  const navigate = useNavigate();
  // console.log(job);
  let salaryChip = "";
  if (job?.data?.salaryMin === 0 && job?.data?.salaryMax === 0) {
    salaryChip = "Thỏa thuận";
  }
  if (
    job?.data?.salaryMin === job?.data?.salaryMax &&
    job?.data?.salaryMin > 0
  ) {
    salaryChip = `${job?.data?.salaryMin / 1000000} Triệu`;
  }

  if (
    job?.data?.salaryMin > 0 &&
    job?.data?.salaryMax < 999999999 &&
    job?.data?.salaryMin < job?.data?.salaryMax
  ) {
    salaryChip = `${job?.data?.salaryMin / 1000000} Triệu  -  ${
      job?.data?.salaryMax / 1000000
    } Triệu`;
  }

  if (job?.data?.salaryMin === 0 && job?.data?.salaryMax > 0) {
    salaryChip = `Lên đến ${job?.data?.salaryMax / 1000000} Triệu`;
  }
  if (job?.data?.salaryMax === 999999999 && job?.data?.salaryMin > 0) {
    salaryChip = `Từ ${job?.data?.salaryMin / 1000000} Triệu`;
  }
  //console.log(job);
  return (
    <>
      <StyledCard
        sx={{
          mx: 1,
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            borderRadius: "100%",
          }}
        >
          <Image
            src={job?.data?.logo}
            width="250px"
            height="250px"
            duration={0}
          />
        </Box>

        <CardContent>
          <Box
            sx={{
              ml: 2,
            }}
          >
            <Typography fontWeight="600" fontSize="18px" variant="h6">
              {titleCut(job?.data?.title)}
            </Typography>
            <Typography fontWeight="300" fontSize="20px" variant="h5">
              {job?.data?.companyName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              minWidth: "80%",
              mr: 5,
            }}
          >
            <Chip color="info" label={salaryChip} sx={{ mr: 1, ml: -2 }} />
            <Chip color="info" label={job?.data?.location} />
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => {
              navigate({
                pathname: `/jobdetail/${job._id}`,
              });
            }}
            sx={{
              fontSize: "17px",
              backgroundColor: "#00a7ac",
              height: "40px",
              width: "150px",
            }}
            variant="contained"
            size="small"
          >
            Learn More
          </Button>
        </CardActions>
      </StyledCard>
    </>
  );
};

export default JobCardSimilar;
