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

const JobCardALL = (props) => {
  const { job } = props;
  // console.log(job);
  // console.log(props);
  function titleCut(title) {
    if (title?.length > 20) {
      return title.slice(0, 19) + "...";
    } else return title;
  }

  const navigate = useNavigate();
  // console.log(job);
  let salaryChip = "";
  if (job?.salaryMin === 0 && job?.salaryMax === 0) {
    salaryChip = "Thỏa thuận";
  }
  if (job?.salaryMin === job?.salaryMax && job?.salaryMin > 0) {
    salaryChip = `${job?.salaryMin / 1000000} Triệu`;
  }
  if (
    job?.salaryMin > 0 &&
    job?.salaryMax < 999999999 &&
    job?.salaryMin < job?.salaryMax
  ) {
    salaryChip = `${job?.salaryMin / 1000000} Triệu  -  ${
      job?.salaryMax / 1000000
    } Triệu`;
  }
  if (job?.salaryMin === 0 && job?.salaryMax > 0) {
    salaryChip = `Lên đến ${job?.salaryMax / 1000000} Triệu`;
  }
  if (job?.salaryMax === 999999999 && job?.salaryMin > 0) {
    salaryChip = `Từ ${job?.salaryMin / 1000000} Triệu`;
  }

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
            src={job?.companyId.linkToLogo}
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
              {titleCut(job?.title)}
            </Typography>
            <Typography fontWeight="300" fontSize="20px" variant="h5">
              {job?.companyId.name}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", padding: "10px", minWidth: "50%", mr: 5 }}
          >
            <Chip color="info" label={salaryChip} sx={{ mr: 1 }} />
            <Chip color="info" label={job?.fullAddress} />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              fontSize: "17px",
              backgroundColor: "#2F4BA0",
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

export default JobCardALL;
